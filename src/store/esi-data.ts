import { action, observable } from "mobx";
import Taro from "@tarojs/taro";
import {
  getCorporationLoyaltyStore,
  listNpcCorporationRequest,
  queryNames
} from "../esi-api";

class EsiDataStore {
  @action
  updateEsiData() {
    Taro.showModal({ title: "更新缓存耗时较久,确定更新吗?" }).then(() => {});
  }

  updateEsiDataDirect() {
    // 获取所有的npc军团
    return listNpcCorporationRequest().then(npcCorporations => {
      const npcCorporationLoyaltyStore: {
        [id: number]: number[];
      }[] = [];
      const names: { [id: number]: string } = {};
      const icons: { [id: number]: string } = {};
      const offers: {
        [id: number]: {
          isk_cost: number;
          lp_cost: number;
          offer_id: number;
          quantity: number;
          required_items: {
            quantity: number;
            type_id: number;
          }[];
          type_id: number;
        };
      } = {};
      const types: {
        [id: number]: {
          capacity: number;
          description: string;
          group_id: number;
          icon_id: number;
          mass: number;
          name: string;
          packaged_volume: number;
          portion_size: number;
          published: boolean;
          radius: boolean;
          type_id: boolean;
          volume: boolean;
        };
      } = {};
      // 获取npc军团的LP兑换列表,如果军团不存在LP商店,则跳过
      npcCorporations.forEach(npcCorporation => {
        getCorporationLoyaltyStore(npcCorporation).then(value => {
          if (value && value.length > 0) {
            npcCorporationLoyaltyStore.push({
              [npcCorporation]: value.map(offer => offer.offer_id)
            });
            // 将offer数据存在offer数组中
            value.forEach(offer => (offers[offer.offer_id] = offer));
          }
        });
      });
      // 计算需要提取名称的军团和物品
      const namesNeedQuery: number[] = [];
      Object.keys(offers).forEach(offer_id => {
        namesNeedQuery.push(offer_id);
      });
    });
  }

  constructor() {
    this.updateEsiDataDirect().then();
  }
}

export default EsiDataStore;
