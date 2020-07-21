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
 * No image server for this datasource
 * @export
 * @interface GetAlliancesAllianceIdIconsNotFound
 */
export interface GetAlliancesAllianceIdIconsNotFound {
    /**
     * error message
     * @type {string}
     * @memberof GetAlliancesAllianceIdIconsNotFound
     */
    error?: string;
}

export function GetAlliancesAllianceIdIconsNotFoundFromJSON(json: any): GetAlliancesAllianceIdIconsNotFound {
    return GetAlliancesAllianceIdIconsNotFoundFromJSONTyped(json, false);
}

export function GetAlliancesAllianceIdIconsNotFoundFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAlliancesAllianceIdIconsNotFound {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function GetAlliancesAllianceIdIconsNotFoundToJSON(value?: GetAlliancesAllianceIdIconsNotFound | null): any {
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

