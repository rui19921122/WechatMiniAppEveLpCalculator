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
 * @interface GetCharactersCharacterIdFatigueOk
 */
export interface GetCharactersCharacterIdFatigueOk {
    /**
     * Character's jump fatigue expiry
     * @type {Date}
     * @memberof GetCharactersCharacterIdFatigueOk
     */
    jumpFatigueExpireDate?: Date;
    /**
     * Character's last jump activation
     * @type {Date}
     * @memberof GetCharactersCharacterIdFatigueOk
     */
    lastJumpDate?: Date;
    /**
     * Character's last jump update
     * @type {Date}
     * @memberof GetCharactersCharacterIdFatigueOk
     */
    lastUpdateDate?: Date;
}

export function GetCharactersCharacterIdFatigueOkFromJSON(json: any): GetCharactersCharacterIdFatigueOk {
    return GetCharactersCharacterIdFatigueOkFromJSONTyped(json, false);
}

export function GetCharactersCharacterIdFatigueOkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCharactersCharacterIdFatigueOk {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'jumpFatigueExpireDate': !exists(json, 'jump_fatigue_expire_date') ? undefined : (new Date(json['jump_fatigue_expire_date'])),
        'lastJumpDate': !exists(json, 'last_jump_date') ? undefined : (new Date(json['last_jump_date'])),
        'lastUpdateDate': !exists(json, 'last_update_date') ? undefined : (new Date(json['last_update_date'])),
    };
}

export function GetCharactersCharacterIdFatigueOkToJSON(value?: GetCharactersCharacterIdFatigueOk | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'jump_fatigue_expire_date': value.jumpFatigueExpireDate === undefined ? undefined : (value.jumpFatigueExpireDate.toISOString()),
        'last_jump_date': value.lastJumpDate === undefined ? undefined : (value.lastJumpDate.toISOString()),
        'last_update_date': value.lastUpdateDate === undefined ? undefined : (value.lastUpdateDate.toISOString()),
    };
}


