/* tslint:disable */
/* eslint-disable */
/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * The version of the OpenAPI document: 1.7.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 200 ok object
 * @export
 * @interface GetCharactersCharacterIdAssets200Ok
 */
export interface GetCharactersCharacterIdAssets200Ok {
    /**
     * is_blueprint_copy boolean
     * @type {boolean}
     * @memberof GetCharactersCharacterIdAssets200Ok
     */
    isBlueprintCopy?: boolean;
    /**
     * is_singleton boolean
     * @type {boolean}
     * @memberof GetCharactersCharacterIdAssets200Ok
     */
    isSingleton: boolean;
    /**
     * item_id integer
     * @type {number}
     * @memberof GetCharactersCharacterIdAssets200Ok
     */
    itemId: number;
    /**
     * location_flag string
     * @type {string}
     * @memberof GetCharactersCharacterIdAssets200Ok
     */
    locationFlag: GetCharactersCharacterIdAssets200OkLocationFlagEnum;
    /**
     * location_id integer
     * @type {number}
     * @memberof GetCharactersCharacterIdAssets200Ok
     */
    locationId: number;
    /**
     * location_type string
     * @type {string}
     * @memberof GetCharactersCharacterIdAssets200Ok
     */
    locationType: GetCharactersCharacterIdAssets200OkLocationTypeEnum;
    /**
     * quantity integer
     * @type {number}
     * @memberof GetCharactersCharacterIdAssets200Ok
     */
    quantity: number;
    /**
     * type_id integer
     * @type {number}
     * @memberof GetCharactersCharacterIdAssets200Ok
     */
    typeId: number;
}

export function GetCharactersCharacterIdAssets200OkFromJSON(json: any): GetCharactersCharacterIdAssets200Ok {
    return GetCharactersCharacterIdAssets200OkFromJSONTyped(json, false);
}

export function GetCharactersCharacterIdAssets200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCharactersCharacterIdAssets200Ok {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isBlueprintCopy': !exists(json, 'is_blueprint_copy') ? undefined : json['is_blueprint_copy'],
        'isSingleton': json['is_singleton'],
        'itemId': json['item_id'],
        'locationFlag': json['location_flag'],
        'locationId': json['location_id'],
        'locationType': json['location_type'],
        'quantity': json['quantity'],
        'typeId': json['type_id'],
    };
}

export function GetCharactersCharacterIdAssets200OkToJSON(value?: GetCharactersCharacterIdAssets200Ok | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'is_blueprint_copy': value.isBlueprintCopy,
        'is_singleton': value.isSingleton,
        'item_id': value.itemId,
        'location_flag': value.locationFlag,
        'location_id': value.locationId,
        'location_type': value.locationType,
        'quantity': value.quantity,
        'type_id': value.typeId,
    };
}

/**
* @export
* @enum {string}
*/
export enum GetCharactersCharacterIdAssets200OkLocationFlagEnum {
    AssetSafety = 'AssetSafety',
    AutoFit = 'AutoFit',
    BoosterBay = 'BoosterBay',
    Cargo = 'Cargo',
    CorpseBay = 'CorpseBay',
    Deliveries = 'Deliveries',
    DroneBay = 'DroneBay',
    FighterBay = 'FighterBay',
    FighterTube0 = 'FighterTube0',
    FighterTube1 = 'FighterTube1',
    FighterTube2 = 'FighterTube2',
    FighterTube3 = 'FighterTube3',
    FighterTube4 = 'FighterTube4',
    FleetHangar = 'FleetHangar',
    FrigateEscapeBay = 'FrigateEscapeBay',
    Hangar = 'Hangar',
    HangarAll = 'HangarAll',
    HiSlot0 = 'HiSlot0',
    HiSlot1 = 'HiSlot1',
    HiSlot2 = 'HiSlot2',
    HiSlot3 = 'HiSlot3',
    HiSlot4 = 'HiSlot4',
    HiSlot5 = 'HiSlot5',
    HiSlot6 = 'HiSlot6',
    HiSlot7 = 'HiSlot7',
    HiddenModifiers = 'HiddenModifiers',
    Implant = 'Implant',
    LoSlot0 = 'LoSlot0',
    LoSlot1 = 'LoSlot1',
    LoSlot2 = 'LoSlot2',
    LoSlot3 = 'LoSlot3',
    LoSlot4 = 'LoSlot4',
    LoSlot5 = 'LoSlot5',
    LoSlot6 = 'LoSlot6',
    LoSlot7 = 'LoSlot7',
    Locked = 'Locked',
    MedSlot0 = 'MedSlot0',
    MedSlot1 = 'MedSlot1',
    MedSlot2 = 'MedSlot2',
    MedSlot3 = 'MedSlot3',
    MedSlot4 = 'MedSlot4',
    MedSlot5 = 'MedSlot5',
    MedSlot6 = 'MedSlot6',
    MedSlot7 = 'MedSlot7',
    QuafeBay = 'QuafeBay',
    RigSlot0 = 'RigSlot0',
    RigSlot1 = 'RigSlot1',
    RigSlot2 = 'RigSlot2',
    RigSlot3 = 'RigSlot3',
    RigSlot4 = 'RigSlot4',
    RigSlot5 = 'RigSlot5',
    RigSlot6 = 'RigSlot6',
    RigSlot7 = 'RigSlot7',
    ShipHangar = 'ShipHangar',
    Skill = 'Skill',
    SpecializedAmmoHold = 'SpecializedAmmoHold',
    SpecializedCommandCenterHold = 'SpecializedCommandCenterHold',
    SpecializedFuelBay = 'SpecializedFuelBay',
    SpecializedGasHold = 'SpecializedGasHold',
    SpecializedIndustrialShipHold = 'SpecializedIndustrialShipHold',
    SpecializedLargeShipHold = 'SpecializedLargeShipHold',
    SpecializedMaterialBay = 'SpecializedMaterialBay',
    SpecializedMediumShipHold = 'SpecializedMediumShipHold',
    SpecializedMineralHold = 'SpecializedMineralHold',
    SpecializedOreHold = 'SpecializedOreHold',
    SpecializedPlanetaryCommoditiesHold = 'SpecializedPlanetaryCommoditiesHold',
    SpecializedSalvageHold = 'SpecializedSalvageHold',
    SpecializedShipHold = 'SpecializedShipHold',
    SpecializedSmallShipHold = 'SpecializedSmallShipHold',
    SubSystemBay = 'SubSystemBay',
    SubSystemSlot0 = 'SubSystemSlot0',
    SubSystemSlot1 = 'SubSystemSlot1',
    SubSystemSlot2 = 'SubSystemSlot2',
    SubSystemSlot3 = 'SubSystemSlot3',
    SubSystemSlot4 = 'SubSystemSlot4',
    SubSystemSlot5 = 'SubSystemSlot5',
    SubSystemSlot6 = 'SubSystemSlot6',
    SubSystemSlot7 = 'SubSystemSlot7',
    Unlocked = 'Unlocked',
    Wardrobe = 'Wardrobe'
}
/**
* @export
* @enum {string}
*/
export enum GetCharactersCharacterIdAssets200OkLocationTypeEnum {
    Station = 'station',
    SolarSystem = 'solar_system',
    Item = 'item',
    Other = 'other'
}


