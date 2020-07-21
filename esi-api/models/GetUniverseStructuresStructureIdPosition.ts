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
 * Coordinates of the structure in Cartesian space relative to the Sun, in metres.

 * @export
 * @interface GetUniverseStructuresStructureIdPosition
 */
export interface GetUniverseStructuresStructureIdPosition {
    /**
     * x number
     * @type {number}
     * @memberof GetUniverseStructuresStructureIdPosition
     */
    x: number;
    /**
     * y number
     * @type {number}
     * @memberof GetUniverseStructuresStructureIdPosition
     */
    y: number;
    /**
     * z number
     * @type {number}
     * @memberof GetUniverseStructuresStructureIdPosition
     */
    z: number;
}

export function GetUniverseStructuresStructureIdPositionFromJSON(json: any): GetUniverseStructuresStructureIdPosition {
    return GetUniverseStructuresStructureIdPositionFromJSONTyped(json, false);
}

export function GetUniverseStructuresStructureIdPositionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUniverseStructuresStructureIdPosition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'x': json['x'],
        'y': json['y'],
        'z': json['z'],
    };
}

export function GetUniverseStructuresStructureIdPositionToJSON(value?: GetUniverseStructuresStructureIdPosition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'x': value.x,
        'y': value.y,
        'z': value.z,
    };
}

