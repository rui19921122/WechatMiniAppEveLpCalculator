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
 * yesterday object
 * @export
 * @interface GetFwLeaderboardsCharactersYesterdayYesterday1
 */
export interface GetFwLeaderboardsCharactersYesterdayYesterday1 {
    /**
     * Amount of victory points
     * @type {number}
     * @memberof GetFwLeaderboardsCharactersYesterdayYesterday1
     */
    amount?: number;
    /**
     * character_id integer
     * @type {number}
     * @memberof GetFwLeaderboardsCharactersYesterdayYesterday1
     */
    characterId?: number;
}

export function GetFwLeaderboardsCharactersYesterdayYesterday1FromJSON(json: any): GetFwLeaderboardsCharactersYesterdayYesterday1 {
    return GetFwLeaderboardsCharactersYesterdayYesterday1FromJSONTyped(json, false);
}

export function GetFwLeaderboardsCharactersYesterdayYesterday1FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFwLeaderboardsCharactersYesterdayYesterday1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'characterId': !exists(json, 'character_id') ? undefined : json['character_id'],
    };
}

export function GetFwLeaderboardsCharactersYesterdayYesterday1ToJSON(value?: GetFwLeaderboardsCharactersYesterdayYesterday1 | null): any {
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


