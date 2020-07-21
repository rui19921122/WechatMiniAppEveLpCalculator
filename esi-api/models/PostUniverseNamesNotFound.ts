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
 * Not found
 * @export
 * @interface PostUniverseNamesNotFound
 */
export interface PostUniverseNamesNotFound {
    /**
     * Not found message
     * @type {string}
     * @memberof PostUniverseNamesNotFound
     */
    error?: string;
}

export function PostUniverseNamesNotFoundFromJSON(json: any): PostUniverseNamesNotFound {
    return PostUniverseNamesNotFoundFromJSONTyped(json, false);
}

export function PostUniverseNamesNotFoundFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostUniverseNamesNotFound {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function PostUniverseNamesNotFoundToJSON(value?: PostUniverseNamesNotFound | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': value.error,
    };
}


