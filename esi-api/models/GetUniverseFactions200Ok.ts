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
 * @interface GetUniverseFactions200Ok
 */
export interface GetUniverseFactions200Ok {
    /**
     * corporation_id integer
     * @type {number}
     * @memberof GetUniverseFactions200Ok
     */
    corporationId?: number;
    /**
     * description string
     * @type {string}
     * @memberof GetUniverseFactions200Ok
     */
    description: string;
    /**
     * faction_id integer
     * @type {number}
     * @memberof GetUniverseFactions200Ok
     */
    factionId: number;
    /**
     * is_unique boolean
     * @type {boolean}
     * @memberof GetUniverseFactions200Ok
     */
    isUnique: boolean;
    /**
     * militia_corporation_id integer
     * @type {number}
     * @memberof GetUniverseFactions200Ok
     */
    militiaCorporationId?: number;
    /**
     * name string
     * @type {string}
     * @memberof GetUniverseFactions200Ok
     */
    name: string;
    /**
     * size_factor number
     * @type {number}
     * @memberof GetUniverseFactions200Ok
     */
    sizeFactor: number;
    /**
     * solar_system_id integer
     * @type {number}
     * @memberof GetUniverseFactions200Ok
     */
    solarSystemId?: number;
    /**
     * station_count integer
     * @type {number}
     * @memberof GetUniverseFactions200Ok
     */
    stationCount: number;
    /**
     * station_system_count integer
     * @type {number}
     * @memberof GetUniverseFactions200Ok
     */
    stationSystemCount: number;
}

export function GetUniverseFactions200OkFromJSON(json: any): GetUniverseFactions200Ok {
    return GetUniverseFactions200OkFromJSONTyped(json, false);
}

export function GetUniverseFactions200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUniverseFactions200Ok {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'corporationId': !exists(json, 'corporation_id') ? undefined : json['corporation_id'],
        'description': json['description'],
        'factionId': json['faction_id'],
        'isUnique': json['is_unique'],
        'militiaCorporationId': !exists(json, 'militia_corporation_id') ? undefined : json['militia_corporation_id'],
        'name': json['name'],
        'sizeFactor': json['size_factor'],
        'solarSystemId': !exists(json, 'solar_system_id') ? undefined : json['solar_system_id'],
        'stationCount': json['station_count'],
        'stationSystemCount': json['station_system_count'],
    };
}

export function GetUniverseFactions200OkToJSON(value?: GetUniverseFactions200Ok | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'corporation_id': value.corporationId,
        'description': value.description,
        'faction_id': value.factionId,
        'is_unique': value.isUnique,
        'militia_corporation_id': value.militiaCorporationId,
        'name': value.name,
        'size_factor': value.sizeFactor,
        'solar_system_id': value.solarSystemId,
        'station_count': value.stationCount,
        'station_system_count': value.stationSystemCount,
    };
}


