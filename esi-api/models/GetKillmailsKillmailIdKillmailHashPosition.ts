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
 * Coordinates of the victim in Cartesian space relative to the Sun

 * @export
 * @interface GetKillmailsKillmailIdKillmailHashPosition
 */
export interface GetKillmailsKillmailIdKillmailHashPosition {
    /**
     * x number
     * @type {number}
     * @memberof GetKillmailsKillmailIdKillmailHashPosition
     */
    x: number;
    /**
     * y number
     * @type {number}
     * @memberof GetKillmailsKillmailIdKillmailHashPosition
     */
    y: number;
    /**
     * z number
     * @type {number}
     * @memberof GetKillmailsKillmailIdKillmailHashPosition
     */
    z: number;
}

export function GetKillmailsKillmailIdKillmailHashPositionFromJSON(json: any): GetKillmailsKillmailIdKillmailHashPosition {
    return GetKillmailsKillmailIdKillmailHashPositionFromJSONTyped(json, false);
}

export function GetKillmailsKillmailIdKillmailHashPositionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetKillmailsKillmailIdKillmailHashPosition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'x': json['x'],
        'y': json['y'],
        'z': json['z'],
    };
}

export function GetKillmailsKillmailIdKillmailHashPositionToJSON(value?: GetKillmailsKillmailIdKillmailHashPosition | null): any {
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

