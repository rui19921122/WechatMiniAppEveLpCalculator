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
 * position object
 * @export
 * @interface GetUniverseAsteroidBeltsAsteroidBeltIdPosition
 */
export interface GetUniverseAsteroidBeltsAsteroidBeltIdPosition {
    /**
     * x number
     * @type {number}
     * @memberof GetUniverseAsteroidBeltsAsteroidBeltIdPosition
     */
    x: number;
    /**
     * y number
     * @type {number}
     * @memberof GetUniverseAsteroidBeltsAsteroidBeltIdPosition
     */
    y: number;
    /**
     * z number
     * @type {number}
     * @memberof GetUniverseAsteroidBeltsAsteroidBeltIdPosition
     */
    z: number;
}

export function GetUniverseAsteroidBeltsAsteroidBeltIdPositionFromJSON(json: any): GetUniverseAsteroidBeltsAsteroidBeltIdPosition {
    return GetUniverseAsteroidBeltsAsteroidBeltIdPositionFromJSONTyped(json, false);
}

export function GetUniverseAsteroidBeltsAsteroidBeltIdPositionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUniverseAsteroidBeltsAsteroidBeltIdPosition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'x': json['x'],
        'y': json['y'],
        'z': json['z'],
    };
}

export function GetUniverseAsteroidBeltsAsteroidBeltIdPositionToJSON(value?: GetUniverseAsteroidBeltsAsteroidBeltIdPosition | null): any {
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


