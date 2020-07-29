import Taro from "@tarojs/taro";

const BASE_URL = "https://esi.evepc.163.com/latest";
const combineURL = (url: string): string => BASE_URL + url;
export const listNpcCorporationRequest = (): Promise<number[]> => {
  const URL = "/corporations/npccorps/";
  return new Promise<number[]>((resolve, reject) => {
    Taro.request({ url: combineURL(URL) })
      .then(res => {
        resolve(res.data);
      })
      .catch(reject);
  });
};

interface EsiFactionResponse {
  corporation_id: number;
  description: string;
  faction_id: number;
  is_unique: boolean;
  name: string;
  size_factor: number;
  solar_system_id: number;
  station_count: number;
  station_system_count: number;
}
export const listFactionsRequest = (): Promise<EsiFactionResponse[]> => {
  const URL = "/universe/factions/?datasource=serenity&language=zh";
  return new Promise((resolve, reject) => {
    Taro.request({ url: combineURL(URL) })
      .then(res => {
        resolve(res.data);
      })
      .catch(reject);
  });
};
interface EsiLoyaltyStoreOfferResponse {
  isk_cost: number;
  lp_cost: number;
  offer_id: number;
  quantity: number;
  required_items: {
    quantity: number;
    type_id: number;
  }[];
  type_id: number;
}
export const getCorporationLoyaltyStore = (
  corporation_id: number
): Promise<EsiLoyaltyStoreOfferResponse[]> => {
  const URL = `/loyalty/stores/${corporation_id}/offers/?datasource=serenity`;
  return new Promise((resolve, reject) => {
    Taro.request({ url: combineURL(URL) })
      .then(res => {
        resolve(res.data);
      })
      .catch(reject);
  });
};
export const queryNames = (
  ids: number[]
): Promise<{ category: "corporation"; id: number; name: string }[]> => {
  const URL = "/universe/names/";
  return new Promise((resolve, reject) => {
    Taro.request({ url: combineURL(URL), method: "POST", data: ids })
      .then(res => {
        resolve(res.data);
      })
      .catch(reject);
  });
};
export const queryIcons = (
  ids: number[]
): Promise<{ category: number; id: number; name: string }[]> => {
  const URL = "/universe/names/";
  return new Promise((resolve, reject) => {
    Taro.request({ url: combineURL(URL), method: "POST", data: ids })
      .then(res => {
        resolve(res.data);
      })
      .catch(reject);
  });
};
