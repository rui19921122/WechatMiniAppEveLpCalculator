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
    GetUniverseStargatesStargateIdDestination,
    GetUniverseStargatesStargateIdDestinationFromJSON,
    GetUniverseStargatesStargateIdDestinationFromJSONTyped,
    GetUniverseStargatesStargateIdDestinationToJSON,
    GetUniverseStargatesStargateIdPosition,
    GetUniverseStargatesStargateIdPositionFromJSON,
    GetUniverseStargatesStargateIdPositionFromJSONTyped,
    GetUniverseStargatesStargateIdPositionToJSON,
} from './';

/**
 * 200 ok object
 * @export
 * @interface GetUniverseStargatesStargateIdOk
 */
export interface GetUniverseStargatesStargateIdOk {
    /**
     * 
     * @type {GetUniverseStargatesStargateIdDestination}
     * @memberof GetUniverseStargatesStargateIdOk
     */
    destination: GetUniverseStargatesStargateIdDestination;
    /**
     * name string
     * @type {string}
     * @memberof GetUniverseStargatesStargateIdOk
     */
    name: string;
    /**
     * 
     * @type {GetUniverseStargatesStargateIdPosition}
     * @memberof GetUniverseStargatesStargateIdOk
     */
    position: GetUniverseStargatesStargateIdPosition;
    /**
     * stargate_id integer
     * @type {number}
     * @memberof GetUniverseStargatesStargateIdOk
     */
    stargateId: number;
    /**
     * The solar system this stargate is in
     * @type {number}
     * @memberof GetUniverseStargatesStargateIdOk
     */
    systemId: number;
    /**
     * type_id integer
     * @type {number}
     * @memberof GetUniverseStargatesStargateIdOk
     */
    typeId: number;
}

export function GetUniverseStargatesStargateIdOkFromJSON(json: any): GetUniverseStargatesStargateIdOk {
    return GetUniverseStargatesStargateIdOkFromJSONTyped(json, false);
}

export function GetUniverseStargatesStargateIdOkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUniverseStargatesStargateIdOk {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'destination': GetUniverseStargatesStargateIdDestinationFromJSON(json['destination']),
        'name': json['name'],
        'position': GetUniverseStargatesStargateIdPositionFromJSON(json['position']),
        'stargateId': json['stargate_id'],
        'systemId': json['system_id'],
        'typeId': json['type_id'],
    };
}

export function GetUniverseStargatesStargateIdOkToJSON(value?: GetUniverseStargatesStargateIdOk | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'destination': GetUniverseStargatesStargateIdDestinationToJSON(value.destination),
        'name': value.name,
        'position': GetUniverseStargatesStargateIdPositionToJSON(value.position),
        'stargate_id': value.stargateId,
        'system_id': value.systemId,
        'type_id': value.typeId,
    };
}


