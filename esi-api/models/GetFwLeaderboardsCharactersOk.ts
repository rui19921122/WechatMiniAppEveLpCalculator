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
import {
    GetFwLeaderboardsCharactersKills,
    GetFwLeaderboardsCharactersKillsFromJSON,
    GetFwLeaderboardsCharactersKillsFromJSONTyped,
    GetFwLeaderboardsCharactersKillsToJSON,
    GetFwLeaderboardsCharactersVictoryPoints,
    GetFwLeaderboardsCharactersVictoryPointsFromJSON,
    GetFwLeaderboardsCharactersVictoryPointsFromJSONTyped,
    GetFwLeaderboardsCharactersVictoryPointsToJSON,
} from './';

/**
 * 200 ok object
 * @export
 * @interface GetFwLeaderboardsCharactersOk
 */
export interface GetFwLeaderboardsCharactersOk {
    /**
     * 
     * @type {GetFwLeaderboardsCharactersKills}
     * @memberof GetFwLeaderboardsCharactersOk
     */
    kills: GetFwLeaderboardsCharactersKills;
    /**
     * 
     * @type {GetFwLeaderboardsCharactersVictoryPoints}
     * @memberof GetFwLeaderboardsCharactersOk
     */
    victoryPoints: GetFwLeaderboardsCharactersVictoryPoints;
}

export function GetFwLeaderboardsCharactersOkFromJSON(json: any): GetFwLeaderboardsCharactersOk {
    return GetFwLeaderboardsCharactersOkFromJSONTyped(json, false);
}

export function GetFwLeaderboardsCharactersOkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFwLeaderboardsCharactersOk {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kills': GetFwLeaderboardsCharactersKillsFromJSON(json['kills']),
        'victoryPoints': GetFwLeaderboardsCharactersVictoryPointsFromJSON(json['victory_points']),
    };
}

export function GetFwLeaderboardsCharactersOkToJSON(value?: GetFwLeaderboardsCharactersOk | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kills': GetFwLeaderboardsCharactersKillsToJSON(value.kills),
        'victory_points': GetFwLeaderboardsCharactersVictoryPointsToJSON(value.victoryPoints),
    };
}

