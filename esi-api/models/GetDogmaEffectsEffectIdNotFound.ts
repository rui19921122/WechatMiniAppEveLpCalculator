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
 * @interface GetDogmaEffectsEffectIdNotFound
 */
export interface GetDogmaEffectsEffectIdNotFound {
    /**
     * Not found message
     * @type {string}
     * @memberof GetDogmaEffectsEffectIdNotFound
     */
    error?: string;
}

export function GetDogmaEffectsEffectIdNotFoundFromJSON(json: any): GetDogmaEffectsEffectIdNotFound {
    return GetDogmaEffectsEffectIdNotFoundFromJSONTyped(json, false);
}

export function GetDogmaEffectsEffectIdNotFoundFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetDogmaEffectsEffectIdNotFound {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function GetDogmaEffectsEffectIdNotFoundToJSON(value?: GetDogmaEffectsEffectIdNotFound | null): any {
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


