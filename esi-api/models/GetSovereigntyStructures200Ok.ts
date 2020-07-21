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
 * @interface GetSovereigntyStructures200Ok
 */
export interface GetSovereigntyStructures200Ok {
    /**
     * The alliance that owns the structure.

     * @type {number}
     * @memberof GetSovereigntyStructures200Ok
     */
    allianceId: number;
    /**
     * Solar system in which the structure is located.

     * @type {number}
     * @memberof GetSovereigntyStructures200Ok
     */
    solarSystemId: number;
    /**
     * Unique item ID for this structure.
     * @type {number}
     * @memberof GetSovereigntyStructures200Ok
     */
    structureId: number;
    /**
     * A reference to the type of structure this is.

     * @type {number}
     * @memberof GetSovereigntyStructures200Ok
     */
    structureTypeId: number;
    /**
     * The occupancy level for the next or current vulnerability window. This takes into account all development indexes and capital system bonuses. Also known as Activity Defense Multiplier from in the client. It increases the time that attackers must spend using their entosis links on the structure.

     * @type {number}
     * @memberof GetSovereigntyStructures200Ok
     */
    vulnerabilityOccupancyLevel?: number;
    /**
     * The time at which the next or current vulnerability window ends. At the end of a vulnerability window the next window is recalculated and locked in along with the vulnerabilityOccupancyLevel. If the structure is not in 100% entosis control of the defender, it will go in to 'overtime' and stay vulnerable for as long as that situation persists. Only once the defenders have 100% entosis control and has the vulnerableEndTime passed does the vulnerability interval expire and a new one is calculated.

     * @type {Date}
     * @memberof GetSovereigntyStructures200Ok
     */
    vulnerableEndTime?: Date;
    /**
     * The next time at which the structure will become vulnerable. Or the start time of the current window if current time is between this and vulnerableEndTime.

     * @type {Date}
     * @memberof GetSovereigntyStructures200Ok
     */
    vulnerableStartTime?: Date;
}

export function GetSovereigntyStructures200OkFromJSON(json: any): GetSovereigntyStructures200Ok {
    return GetSovereigntyStructures200OkFromJSONTyped(json, false);
}

export function GetSovereigntyStructures200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetSovereigntyStructures200Ok {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allianceId': json['alliance_id'],
        'solarSystemId': json['solar_system_id'],
        'structureId': json['structure_id'],
        'structureTypeId': json['structure_type_id'],
        'vulnerabilityOccupancyLevel': !exists(json, 'vulnerability_occupancy_level') ? undefined : json['vulnerability_occupancy_level'],
        'vulnerableEndTime': !exists(json, 'vulnerable_end_time') ? undefined : (new Date(json['vulnerable_end_time'])),
        'vulnerableStartTime': !exists(json, 'vulnerable_start_time') ? undefined : (new Date(json['vulnerable_start_time'])),
    };
}

export function GetSovereigntyStructures200OkToJSON(value?: GetSovereigntyStructures200Ok | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alliance_id': value.allianceId,
        'solar_system_id': value.solarSystemId,
        'structure_id': value.structureId,
        'structure_type_id': value.structureTypeId,
        'vulnerability_occupancy_level': value.vulnerabilityOccupancyLevel,
        'vulnerable_end_time': value.vulnerableEndTime === undefined ? undefined : (value.vulnerableEndTime.toISOString()),
        'vulnerable_start_time': value.vulnerableStartTime === undefined ? undefined : (value.vulnerableStartTime.toISOString()),
    };
}

