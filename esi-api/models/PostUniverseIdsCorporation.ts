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
 * corporation object
 * @export
 * @interface PostUniverseIdsCorporation
 */
export interface PostUniverseIdsCorporation {
    /**
     * id integer
     * @type {number}
     * @memberof PostUniverseIdsCorporation
     */
    id?: number;
    /**
     * name string
     * @type {string}
     * @memberof PostUniverseIdsCorporation
     */
    name?: string;
}

export function PostUniverseIdsCorporationFromJSON(json: any): PostUniverseIdsCorporation {
    return PostUniverseIdsCorporationFromJSONTyped(json, false);
}

export function PostUniverseIdsCorporationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostUniverseIdsCorporation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function PostUniverseIdsCorporationToJSON(value?: PostUniverseIdsCorporation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
    };
}


