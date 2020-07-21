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
 * active_total object
 * @export
 * @interface GetFwLeaderboardsCharactersActiveTotalActiveTotal1
 */
export interface GetFwLeaderboardsCharactersActiveTotalActiveTotal1 {
    /**
     * Amount of victory points
     * @type {number}
     * @memberof GetFwLeaderboardsCharactersActiveTotalActiveTotal1
     */
    amount?: number;
    /**
     * character_id integer
     * @type {number}
     * @memberof GetFwLeaderboardsCharactersActiveTotalActiveTotal1
     */
    characterId?: number;
}

export function GetFwLeaderboardsCharactersActiveTotalActiveTotal1FromJSON(json: any): GetFwLeaderboardsCharactersActiveTotalActiveTotal1 {
    return GetFwLeaderboardsCharactersActiveTotalActiveTotal1FromJSONTyped(json, false);
}

export function GetFwLeaderboardsCharactersActiveTotalActiveTotal1FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFwLeaderboardsCharactersActiveTotalActiveTotal1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'characterId': !exists(json, 'character_id') ? undefined : json['character_id'],
    };
}

export function GetFwLeaderboardsCharactersActiveTotalActiveTotal1ToJSON(value?: GetFwLeaderboardsCharactersActiveTotalActiveTotal1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'character_id': value.characterId,
    };
}


