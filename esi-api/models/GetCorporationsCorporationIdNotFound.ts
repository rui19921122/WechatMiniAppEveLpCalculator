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
 * @interface GetCorporationsCorporationIdNotFound
 */
export interface GetCorporationsCorporationIdNotFound {
    /**
     * Not found message
     * @type {string}
     * @memberof GetCorporationsCorporationIdNotFound
     */
    error?: string;
}

export function GetCorporationsCorporationIdNotFoundFromJSON(json: any): GetCorporationsCorporationIdNotFound {
    return GetCorporationsCorporationIdNotFoundFromJSONTyped(json, false);
}

export function GetCorporationsCorporationIdNotFoundFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCorporationsCorporationIdNotFound {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function GetCorporationsCorporationIdNotFoundToJSON(value?: GetCorporationsCorporationIdNotFound | null): any {
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

