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
 * @interface GetCorporationsCorporationIdContainersLogs200Ok
 */
export interface GetCorporationsCorporationIdContainersLogs200Ok {
    /**
     * action string
     * @type {string}
     * @memberof GetCorporationsCorporationIdContainersLogs200Ok
     */
    action: GetCorporationsCorporationIdContainersLogs200OkActionEnum;
    /**
     * ID of the character who performed the action.
     * @type {number}
     * @memberof GetCorporationsCorporationIdContainersLogs200Ok
     */
    characterId: number;
    /**
     * ID of the container
     * @type {number}
     * @memberof GetCorporationsCorporationIdContainersLogs200Ok
     */
    containerId: number;
    /**
     * Type ID of the container
     * @type {number}
     * @memberof GetCorporationsCorporationIdContainersLogs200Ok
     */
    containerTypeId: number;
    /**
     * location_flag string
     * @type {string}
     * @memberof GetCorporationsCorporationIdContainersLogs200Ok
     */
    locationFlag: GetCorporationsCorporationIdContainersLogs200OkLocationFlagEnum;
    /**
     * location_id integer
     * @type {number}
     * @memberof GetCorporationsCorporationIdContainersLogs200Ok
     */
    locationId: number;
    /**
     * Timestamp when this log was created
     * @type {Date}
     * @memberof GetCorporationsCorporationIdContainersLogs200Ok
     */
    loggedAt: Date;
    /**
     * new_config_bitmask integer
     * @type {number}
     * @memberof GetCorporationsCorporationIdContainersLogs200Ok
     */
    newConfigBitmask?: number;
    /**
     * old_config_bitmask integer
     * @type {number}
     * @memberof GetCorporationsCorporationIdContainersLogs200Ok
     */
    oldConfigBitmask?: number;
    /**
     * Type of password set if action is of type SetPassword or EnterPassword
     * @type {string}
     * @memberof GetCorporationsCorporationIdContainersLogs200Ok
     */
    passwordType?: GetCorporationsCorporationIdContainersLogs200OkPasswordTypeEnum;
    /**
     * Quantity of the item being acted upon
     * @type {number}
     * @memberof GetCorporationsCorporationIdContainersLogs200Ok
     */
    quantity?: number;
    /**
     * Type ID of the item being acted upon
     * @type {number}
     * @memberof GetCorporationsCorporationIdContainersLogs200Ok
     */
    typeId?: number;
}

export function GetCorporationsCorporationIdContainersLogs200OkFromJSON(json: any): GetCorporationsCorporationIdContainersLogs200Ok {
    return GetCorporationsCorporationIdContainersLogs200OkFromJSONTyped(json, false);
}

export function GetCorporationsCorporationIdContainersLogs200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCorporationsCorporationIdContainersLogs200Ok {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': json['action'],
        'characterId': json['character_id'],
        'containerId': json['container_id'],
        'containerTypeId': json['container_type_id'],
        'locationFlag': json['location_flag'],
        'locationId': json['location_id'],
        'loggedAt': (new Date(json['logged_at'])),
        'newConfigBitmask': !exists(json, 'new_config_bitmask') ? undefined : json['new_config_bitmask'],
        'oldConfigBitmask': !exists(json, 'old_config_bitmask') ? undefined : json['old_config_bitmask'],
        'passwordType': !exists(json, 'password_type') ? undefined : json['password_type'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'typeId': !exists(json, 'type_id') ? undefined : json['type_id'],
    };
}

export function GetCorporationsCorporationIdContainersLogs200OkToJSON(value?: GetCorporationsCorporationIdContainersLogs200Ok | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'character_id': value.characterId,
        'container_id': value.containerId,
        'container_type_id': value.containerTypeId,
        'location_flag': value.locationFlag,
        'location_id': value.locationId,
        'logged_at': (value.loggedAt.toISOString()),
        'new_config_bitmask': value.newConfigBitmask,
        'old_config_bitmask': value.oldConfigBitmask,
        'password_type': value.passwordType,
        'quantity': value.quantity,
        'type_id': value.typeId,
    };
}

/**
* @export
* @enum {string}
*/
export enum GetCorporationsCorporationIdContainersLogs200OkActionEnum {
    Add = 'add',
    Assemble = 'assemble',
    Configure = 'configure',
    EnterPassword = 'enter_password',
    Lock = 'lock',
    Move = 'move',
    Repackage = 'repackage',
    SetName = 'set_name',
    SetPassword = 'set_password',
    Unlock = 'unlock'
}
/**
* @export
* @enum {string}
*/
export enum GetCorporationsCorporationIdContainersLogs200OkLocationFlagEnum {
    AssetSafety = 'AssetSafety',
    AutoFit = 'AutoFit',
    Bonus = 'Bonus',
    Booster = 'Booster',
    BoosterBay = 'BoosterBay',
    Capsule = 'Capsule',
    Cargo = 'Cargo',
    CorpDeliveries = 'CorpDeliveries',
    CorpSAG1 = 'CorpSAG1',
    CorpSAG2 = 'CorpSAG2',
    CorpSAG3 = 'CorpSAG3',
    CorpSAG4 = 'CorpSAG4',
    CorpSAG5 = 'CorpSAG5',
    CorpSAG6 = 'CorpSAG6',
    CorpSAG7 = 'CorpSAG7',
    CrateLoot = 'CrateLoot',
    Deliveries = 'Deliveries',
    DroneBay = 'DroneBay',
    DustBattle = 'DustBattle',
    DustDatabank = 'DustDatabank',
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
    Impounded = 'Impounded',
    JunkyardReprocessed = 'JunkyardReprocessed',
    JunkyardTrashed = 'JunkyardTrashed',
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
    OfficeFolder = 'OfficeFolder',
    Pilot = 'Pilot',
    PlanetSurface = 'PlanetSurface',
    QuafeBay = 'QuafeBay',
    Reward = 'Reward',
    RigSlot0 = 'RigSlot0',
    RigSlot1 = 'RigSlot1',
    RigSlot2 = 'RigSlot2',
    RigSlot3 = 'RigSlot3',
    RigSlot4 = 'RigSlot4',
    RigSlot5 = 'RigSlot5',
    RigSlot6 = 'RigSlot6',
    RigSlot7 = 'RigSlot7',
    SecondaryStorage = 'SecondaryStorage',
    ServiceSlot0 = 'ServiceSlot0',
    ServiceSlot1 = 'ServiceSlot1',
    ServiceSlot2 = 'ServiceSlot2',
    ServiceSlot3 = 'ServiceSlot3',
    ServiceSlot4 = 'ServiceSlot4',
    ServiceSlot5 = 'ServiceSlot5',
    ServiceSlot6 = 'ServiceSlot6',
    ServiceSlot7 = 'ServiceSlot7',
    ShipHangar = 'ShipHangar',
    ShipOffline = 'ShipOffline',
    Skill = 'Skill',
    SkillInTraining = 'SkillInTraining',
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
    StructureActive = 'StructureActive',
    StructureFuel = 'StructureFuel',
    StructureInactive = 'StructureInactive',
    StructureOffline = 'StructureOffline',
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
    Wallet = 'Wallet',
    Wardrobe = 'Wardrobe'
}
/**
* @export
* @enum {string}
*/
export enum GetCorporationsCorporationIdContainersLogs200OkPasswordTypeEnum {
    Config = 'config',
    General = 'general'
}


