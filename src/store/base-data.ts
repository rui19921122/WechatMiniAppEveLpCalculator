export interface ESI_NAME {
  id: string;
  name: string;
  category: "corporation";
}

export interface ESI_ICON {
  id: string;
  url: string;
}

export interface ESI_OFFER {
  isk_cost: number;
  lp_cost: number;
  offer_id: string;
  quantity: number;
  required_items: {
    quantity: number;
    type_id: string;
  }[];
  type_id: string;
}

export interface ESI_TYPE {
  capacity: number;
  description: string;
  group_id: string;
  icon_id: string;
  mass: number;
  name: string;
  packaged_volume: number;
  portion_size: number;
  published: boolean;
  radius: boolean;
  type_id: string;
  volume: boolean;
}
