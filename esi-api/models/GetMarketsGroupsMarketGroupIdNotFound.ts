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
 * @interface GetMarketsGroupsMarketGroupIdNotFound
 */
export interface GetMarketsGroupsMarketGroupIdNotFound {
    /**
     * Not found message
     * @type {string}
     * @memberof GetMarketsGroupsMarketGroupIdNotFound
     */
    error?: string;
}

export function GetMarketsGroupsMarketGroupIdNotFoundFromJSON(json: any): GetMarketsGroupsMarketGroupIdNotFound {
    return GetMarketsGroupsMarketGroupIdNotFoundFromJSONTyped(json, false);
}

export function GetMarketsGroupsMarketGroupIdNotFoundFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMarketsGroupsMarketGroupIdNotFound {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function GetMarketsGroupsMarketGroupIdNotFoundToJSON(value?: GetMarketsGroupsMarketGroupIdNotFound | null): any {
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

