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
 * Bad request model
 * @export
 * @interface BadRequest
 */
export interface BadRequest {
    /**
     * Bad request message
     * @type {string}
     * @memberof BadRequest
     */
    error: string;
}

export function BadRequestFromJSON(json: any): BadRequest {
    return BadRequestFromJSONTyped(json, false);
}

export function BadRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BadRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': json['error'],
    };
}

export function BadRequestToJSON(value?: BadRequest | null): any {
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

