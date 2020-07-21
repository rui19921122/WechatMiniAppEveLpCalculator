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
 * level object
 * @export
 * @interface GetInsurancePricesLevel
 */
export interface GetInsurancePricesLevel {
    /**
     * cost number
     * @type {number}
     * @memberof GetInsurancePricesLevel
     */
    cost: number;
    /**
     * Localized insurance level
     * @type {string}
     * @memberof GetInsurancePricesLevel
     */
    name: string;
    /**
     * payout number
     * @type {number}
     * @memberof GetInsurancePricesLevel
     */
    payout: number;
}

export function GetInsurancePricesLevelFromJSON(json: any): GetInsurancePricesLevel {
    return GetInsurancePricesLevelFromJSONTyped(json, false);
}

export function GetInsurancePricesLevelFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetInsurancePricesLevel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cost': json['cost'],
        'name': json['name'],
        'payout': json['payout'],
    };
}

export function GetInsurancePricesLevelToJSON(value?: GetInsurancePricesLevel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cost': value.cost,
        'name': value.name,
        'payout': value.payout,
    };
}

