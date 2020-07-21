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
 * @interface GetCharactersCharacterIdLoyaltyPoints200Ok
 */
export interface GetCharactersCharacterIdLoyaltyPoints200Ok {
    /**
     * corporation_id integer
     * @type {number}
     * @memberof GetCharactersCharacterIdLoyaltyPoints200Ok
     */
    corporationId: number;
    /**
     * loyalty_points integer
     * @type {number}
     * @memberof GetCharactersCharacterIdLoyaltyPoints200Ok
     */
    loyaltyPoints: number;
}

export function GetCharactersCharacterIdLoyaltyPoints200OkFromJSON(json: any): GetCharactersCharacterIdLoyaltyPoints200Ok {
    return GetCharactersCharacterIdLoyaltyPoints200OkFromJSONTyped(json, false);
}

export function GetCharactersCharacterIdLoyaltyPoints200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCharactersCharacterIdLoyaltyPoints200Ok {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'corporationId': json['corporation_id'],
        'loyaltyPoints': json['loyalty_points'],
    };
}

export function GetCharactersCharacterIdLoyaltyPoints200OkToJSON(value?: GetCharactersCharacterIdLoyaltyPoints200Ok | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'corporation_id': value.corporationId,
        'loyalty_points': value.loyaltyPoints,
    };
}

