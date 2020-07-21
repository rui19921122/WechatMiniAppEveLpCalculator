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
    GetFwLeaderboardsCorporationsActiveTotalActiveTotal1,
    GetFwLeaderboardsCorporationsActiveTotalActiveTotal1FromJSON,
    GetFwLeaderboardsCorporationsActiveTotalActiveTotal1FromJSONTyped,
    GetFwLeaderboardsCorporationsActiveTotalActiveTotal1ToJSON,
    GetFwLeaderboardsCorporationsLastWeekLastWeek1,
    GetFwLeaderboardsCorporationsLastWeekLastWeek1FromJSON,
    GetFwLeaderboardsCorporationsLastWeekLastWeek1FromJSONTyped,
    GetFwLeaderboardsCorporationsLastWeekLastWeek1ToJSON,
    GetFwLeaderboardsCorporationsYesterdayYesterday1,
    GetFwLeaderboardsCorporationsYesterdayYesterday1FromJSON,
    GetFwLeaderboardsCorporationsYesterdayYesterday1FromJSONTyped,
    GetFwLeaderboardsCorporationsYesterdayYesterday1ToJSON,
} from './';

/**
 * Top 10 rankings of corporations by victory points from yesterday, last week and in total
 * @export
 * @interface GetFwLeaderboardsCorporationsVictoryPoints
 */
export interface GetFwLeaderboardsCorporationsVictoryPoints {
    /**
     * Top 10 ranking of corporations active in faction warfare by total victory points. A corporation is considered "active" if they have participated in faction warfare in the past 14 days
     * @type {Array<GetFwLeaderboardsCorporationsActiveTotalActiveTotal1>}
     * @memberof GetFwLeaderboardsCorporationsVictoryPoints
     */
    activeTotal: Array<GetFwLeaderboardsCorporationsActiveTotalActiveTotal1>;
    /**
     * Top 10 ranking of corporations by victory points in the past week
     * @type {Array<GetFwLeaderboardsCorporationsLastWeekLastWeek1>}
     * @memberof GetFwLeaderboardsCorporationsVictoryPoints
     */
    lastWeek: Array<GetFwLeaderboardsCorporationsLastWeekLastWeek1>;
    /**
     * Top 10 ranking of corporations by victory points in the past day
     * @type {Array<GetFwLeaderboardsCorporationsYesterdayYesterday1>}
     * @memberof GetFwLeaderboardsCorporationsVictoryPoints
     */
    yesterday: Array<GetFwLeaderboardsCorporationsYesterdayYesterday1>;
}

export function GetFwLeaderboardsCorporationsVictoryPointsFromJSON(json: any): GetFwLeaderboardsCorporationsVictoryPoints {
    return GetFwLeaderboardsCorporationsVictoryPointsFromJSONTyped(json, false);
}

export function GetFwLeaderboardsCorporationsVictoryPointsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFwLeaderboardsCorporationsVictoryPoints {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activeTotal': ((json['active_total'] as Array<any>).map(GetFwLeaderboardsCorporationsActiveTotalActiveTotal1FromJSON)),
        'lastWeek': ((json['last_week'] as Array<any>).map(GetFwLeaderboardsCorporationsLastWeekLastWeek1FromJSON)),
        'yesterday': ((json['yesterday'] as Array<any>).map(GetFwLeaderboardsCorporationsYesterdayYesterday1FromJSON)),
    };
}

export function GetFwLeaderboardsCorporationsVictoryPointsToJSON(value?: GetFwLeaderboardsCorporationsVictoryPoints | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active_total': ((value.activeTotal as Array<any>).map(GetFwLeaderboardsCorporationsActiveTotalActiveTotal1ToJSON)),
        'last_week': ((value.lastWeek as Array<any>).map(GetFwLeaderboardsCorporationsLastWeekLastWeek1ToJSON)),
        'yesterday': ((value.yesterday as Array<any>).map(GetFwLeaderboardsCorporationsYesterdayYesterday1ToJSON)),
    };
}


