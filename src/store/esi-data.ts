import { action, observable } from "mobx";
import Taro, { Events } from "@tarojs/taro";
import {
  getCorporationLoyaltyStore,
  listNpcCorporationRequest,
  queryNames
} from "../esi-api";
import { ESI_ICON, ESI_NAME, ESI_OFFER, ESI_TYPE } from "./base-data";
import base_data_processor from "../events/base-data-processor";

class EsiDataStore {
  @observable names: { [id: number]: ESI_NAME };
  @observable icons: { [id: number]: ESI_ICON };
  @observable types: { [id: number]: ESI_TYPE };
  @observable offers: { [id: number]: ESI_OFFER };
  @observable loyalty_store: { [id: number]: number[] };
  // 内部变量
  private npcCorporationLoyaltyStore: {
    [id: number]: number[];
  } = {};
  private names: {
    [id: string]: ESI_NAME;
  } = {};
  private names_need_query: string[] = [];
  private icons: {
    [id: string]: ESI_ICON;
  } = {};
  private icons_need_query: string[] = [];
  private offers: {
    [id: string]: ESI_OFFER;
  } = {};
  private types: {
    [id: string]: ESI_TYPE;
  } = {};
  private event = new Events();
  private types_need_query: string[] = [];

  @action
  updateEsiData() {
    Taro.showModal({ title: "更新缓存耗时较久,确定更新吗?" }).then(() => {});
  }

  private static queryNpcCorporations() {
    return listNpcCorporationRequest();
  }

  private queryCorporationLoyaltyStore(npcCorporations) {
    // 获取npc军团的LP兑换列表,如果军团不存在LP商店,则跳过
    let current_index = 0;
    const npcCorporationsCount = npcCorporations.length;
    npcCorporations.forEach(npcCorporation => {
      getCorporationLoyaltyStore(npcCorporation).then(value => {
        base_data_processor.update(
          `获取${current_index + 1}/${npcCorporationsCount}个军团的LP兑换信息`
        );
        if (value && value.length > 0) {
          // 如果军团存在LP兑换,则进行解析
          // 提取所有的offer
          value.forEach(single_corporation_offer => {
            const single_corporation_convert_id_to_string = {
              ...single_corporation_offer,
              type_id: single_corporation_offer.type_id.toString(10),
              offer_id: single_corporation_offer.offer_id.toString(10),
              required_items: single_corporation_offer.required_items
                ? single_corporation_offer.required_items.map(item => ({
                    ...item,
                    type_id: item.type_id.toString(10)
                  }))
                : []
            };
            this.offers[single_corporation_convert_id_to_string.offer_id] = {
              ...single_corporation_convert_id_to_string,
              type_id: single_corporation_convert_id_to_string.type_id,
              offer_id: single_corporation_convert_id_to_string.offer_id
            };
            if (this.npcCorporationLoyaltyStore[npcCorporation]) {
              this.npcCorporationLoyaltyStore[npcCorporation].push(
                single_corporation_offer.offer_id
              );
            } else {
              this.npcCorporationLoyaltyStore[npcCorporation] = [
                single_corporation_offer.offer_id
              ];
            }
          });
        }
        current_index += 1;
        if (npcCorporationsCount === current_index) {
          this.event.trigger("done");
        }
      });
    });
  }

  async updateEsiDataDirect() {
    // 获取所有的npc军团
    base_data_processor.onUpdate(console.log);
    base_data_processor.onDone(() => console.log("已处理完"));
    base_data_processor.update("正在获取所有npc军团信息");
    const npcCorporations = await EsiDataStore.queryNpcCorporations();
    this.queryCorporationLoyaltyStore(npcCorporations);
    // 所有数据处理完毕后
    this.event.on("done", async () => {
      base_data_processor.update("数据预处理");
      // 提取需要详细查询的军团名称
      // Object.keys(npcCorporationLoyaltyStore).forEach(corporation_id => {
      //   names_need_query.push(corporation_id);
      //   icons_need_query.push(corporation_id);
      // });
      // 提取需要查询的物品名称
      Object.keys(this.offers).forEach(offer_id => {
        const offer = this.offers[parseInt(offer_id, 10)];
        this.names_need_query.push(offer.type_id);
        this.types_need_query.push(offer.type_id);
        this.icons_need_query.push(offer.type_id);
        offer.required_items.forEach(item => {
          this.types_need_query.push(item.type_id);
          this.icons_need_query.push(item.type_id);
          this.names_need_query.push(item.type_id);
        });
      });
      // 暂存
      this.names_need_query = Array.from(new Set(this.names_need_query));
      const names_from_server = await queryNames(
        this.names_need_query.map(v => parseInt(v, 10))
      );
      names_from_server.forEach(name => {
        const string_id = name.id.toString();
        this.names[string_id] = {
          id: string_id,
          name: name.name,
          category: name.category
        };
      });
    });
  }

  constructor() {
    this.updateEsiDataDirect().then();
  }
}

export default EsiDataStore;
