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
 * Unprocessable entity
 * @export
 * @interface GetWarsWarIdUnprocessableEntity
 */
export interface GetWarsWarIdUnprocessableEntity {
    /**
     * Unprocessable entity message
     * @type {string}
     * @memberof GetWarsWarIdUnprocessableEntity
     */
    error?: string;
}

export function GetWarsWarIdUnprocessableEntityFromJSON(json: any): GetWarsWarIdUnprocessableEntity {
    return GetWarsWarIdUnprocessableEntityFromJSONTyped(json, false);
}

export function GetWarsWarIdUnprocessableEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetWarsWarIdUnprocessableEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function GetWarsWarIdUnprocessableEntityToJSON(value?: GetWarsWarIdUnprocessableEntity | null): any {
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


