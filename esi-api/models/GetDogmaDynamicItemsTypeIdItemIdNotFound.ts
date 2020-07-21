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
 * @interface GetDogmaDynamicItemsTypeIdItemIdNotFound
 */
export interface GetDogmaDynamicItemsTypeIdItemIdNotFound {
    /**
     * Not found message
     * @type {string}
     * @memberof GetDogmaDynamicItemsTypeIdItemIdNotFound
     */
    error?: string;
}

export function GetDogmaDynamicItemsTypeIdItemIdNotFoundFromJSON(json: any): GetDogmaDynamicItemsTypeIdItemIdNotFound {
    return GetDogmaDynamicItemsTypeIdItemIdNotFoundFromJSONTyped(json, false);
}

export function GetDogmaDynamicItemsTypeIdItemIdNotFoundFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetDogmaDynamicItemsTypeIdItemIdNotFound {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function GetDogmaDynamicItemsTypeIdItemIdNotFoundToJSON(value?: GetDogmaDynamicItemsTypeIdItemIdNotFound | null): any {
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


