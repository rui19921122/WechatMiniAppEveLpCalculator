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
 * @interface GetFwSystems200Ok
 */
export interface GetFwSystems200Ok {
    /**
     * contested string
     * @type {string}
     * @memberof GetFwSystems200Ok
     */
    contested: GetFwSystems200OkContestedEnum;
    /**
     * occupier_faction_id integer
     * @type {number}
     * @memberof GetFwSystems200Ok
     */
    occupierFactionId: number;
    /**
     * owner_faction_id integer
     * @type {number}
     * @memberof GetFwSystems200Ok
     */
    ownerFactionId: number;
    /**
     * solar_system_id integer
     * @type {number}
     * @memberof GetFwSystems200Ok
     */
    solarSystemId: number;
    /**
     * victory_points integer
     * @type {number}
     * @memberof GetFwSystems200Ok
     */
    victoryPoints: number;
    /**
     * victory_points_threshold integer
     * @type {number}
     * @memberof GetFwSystems200Ok
     */
    victoryPointsThreshold: number;
}

export function GetFwSystems200OkFromJSON(json: any): GetFwSystems200Ok {
    return GetFwSystems200OkFromJSONTyped(json, false);
}

export function GetFwSystems200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFwSystems200Ok {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contested': json['contested'],
        'occupierFactionId': json['occupier_faction_id'],
        'ownerFactionId': json['owner_faction_id'],
        'solarSystemId': json['solar_system_id'],
        'victoryPoints': json['victory_points'],
        'victoryPointsThreshold': json['victory_points_threshold'],
    };
}

export function GetFwSystems200OkToJSON(value?: GetFwSystems200Ok | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contested': value.contested,
        'occupier_faction_id': value.occupierFactionId,
        'owner_faction_id': value.ownerFactionId,
        'solar_system_id': value.solarSystemId,
        'victory_points': value.victoryPoints,
        'victory_points_threshold': value.victoryPointsThreshold,
    };
}

/**
* @export
* @enum {string}
*/
export enum GetFwSystems200OkContestedEnum {
    Captured = 'captured',
    Contested = 'contested',
    Uncontested = 'uncontested',
    Vulnerable = 'vulnerable'
}


