import counterStore from "./counter";
import EsiDataStore from "./esi-data";

export const store = {
  counterStore, esiDataStore: new EsiDataStore()
}

