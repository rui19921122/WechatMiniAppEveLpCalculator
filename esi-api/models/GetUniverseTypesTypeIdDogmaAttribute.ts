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
 * dogma_attribute object
 * @export
 * @interface GetUniverseTypesTypeIdDogmaAttribute
 */
export interface GetUniverseTypesTypeIdDogmaAttribute {
    /**
     * attribute_id integer
     * @type {number}
     * @memberof GetUniverseTypesTypeIdDogmaAttribute
     */
    attributeId: number;
    /**
     * value number
     * @type {number}
     * @memberof GetUniverseTypesTypeIdDogmaAttribute
     */
    value: number;
}

export function GetUniverseTypesTypeIdDogmaAttributeFromJSON(json: any): GetUniverseTypesTypeIdDogmaAttribute {
    return GetUniverseTypesTypeIdDogmaAttributeFromJSONTyped(json, false);
}

export function GetUniverseTypesTypeIdDogmaAttributeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUniverseTypesTypeIdDogmaAttribute {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributeId': json['attribute_id'],
        'value': json['value'],
    };
}

export function GetUniverseTypesTypeIdDogmaAttributeToJSON(value?: GetUniverseTypesTypeIdDogmaAttribute | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attribute_id': value.attributeId,
        'value': value.value,
    };
}


