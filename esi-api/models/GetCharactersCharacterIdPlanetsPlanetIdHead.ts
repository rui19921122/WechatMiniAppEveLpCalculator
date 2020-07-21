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
 * head object
 * @export
 * @interface GetCharactersCharacterIdPlanetsPlanetIdHead
 */
export interface GetCharactersCharacterIdPlanetsPlanetIdHead {
    /**
     * head_id integer
     * @type {number}
     * @memberof GetCharactersCharacterIdPlanetsPlanetIdHead
     */
    headId: number;
    /**
     * latitude number
     * @type {number}
     * @memberof GetCharactersCharacterIdPlanetsPlanetIdHead
     */
    latitude: number;
    /**
     * longitude number
     * @type {number}
     * @memberof GetCharactersCharacterIdPlanetsPlanetIdHead
     */
    longitude: number;
}

export function GetCharactersCharacterIdPlanetsPlanetIdHeadFromJSON(json: any): GetCharactersCharacterIdPlanetsPlanetIdHead {
    return GetCharactersCharacterIdPlanetsPlanetIdHeadFromJSONTyped(json, false);
}

export function GetCharactersCharacterIdPlanetsPlanetIdHeadFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCharactersCharacterIdPlanetsPlanetIdHead {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'headId': json['head_id'],
        'latitude': json['latitude'],
        'longitude': json['longitude'],
    };
}

export function GetCharactersCharacterIdPlanetsPlanetIdHeadToJSON(value?: GetCharactersCharacterIdPlanetsPlanetIdHead | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'head_id': value.headId,
        'latitude': value.latitude,
        'longitude': value.longitude,
    };
}

