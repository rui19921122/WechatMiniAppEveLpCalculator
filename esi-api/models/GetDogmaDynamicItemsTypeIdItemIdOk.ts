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
import {
    GetDogmaDynamicItemsTypeIdItemIdDogmaAttribute,
    GetDogmaDynamicItemsTypeIdItemIdDogmaAttributeFromJSON,
    GetDogmaDynamicItemsTypeIdItemIdDogmaAttributeFromJSONTyped,
    GetDogmaDynamicItemsTypeIdItemIdDogmaAttributeToJSON,
    GetDogmaDynamicItemsTypeIdItemIdDogmaEffect,
    GetDogmaDynamicItemsTypeIdItemIdDogmaEffectFromJSON,
    GetDogmaDynamicItemsTypeIdItemIdDogmaEffectFromJSONTyped,
    GetDogmaDynamicItemsTypeIdItemIdDogmaEffectToJSON,
} from './';

/**
 * 200 ok object
 * @export
 * @interface GetDogmaDynamicItemsTypeIdItemIdOk
 */
export interface GetDogmaDynamicItemsTypeIdItemIdOk {
    /**
     * The ID of the character who created the item
     * @type {number}
     * @memberof GetDogmaDynamicItemsTypeIdItemIdOk
     */
    createdBy: number;
    /**
     * dogma_attributes array
     * @type {Array<GetDogmaDynamicItemsTypeIdItemIdDogmaAttribute>}
     * @memberof GetDogmaDynamicItemsTypeIdItemIdOk
     */
    dogmaAttributes: Array<GetDogmaDynamicItemsTypeIdItemIdDogmaAttribute>;
    /**
     * dogma_effects array
     * @type {Array<GetDogmaDynamicItemsTypeIdItemIdDogmaEffect>}
     * @memberof GetDogmaDynamicItemsTypeIdItemIdOk
     */
    dogmaEffects: Array<GetDogmaDynamicItemsTypeIdItemIdDogmaEffect>;
    /**
     * The type ID of the mutator used to generate the dynamic item.
     * @type {number}
     * @memberof GetDogmaDynamicItemsTypeIdItemIdOk
     */
    mutatorTypeId: number;
    /**
     * The type ID of the source item the mutator was applied to create the dynamic item.
     * @type {number}
     * @memberof GetDogmaDynamicItemsTypeIdItemIdOk
     */
    sourceTypeId: number;
}

export function GetDogmaDynamicItemsTypeIdItemIdOkFromJSON(json: any): GetDogmaDynamicItemsTypeIdItemIdOk {
    return GetDogmaDynamicItemsTypeIdItemIdOkFromJSONTyped(json, false);
}

export function GetDogmaDynamicItemsTypeIdItemIdOkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetDogmaDynamicItemsTypeIdItemIdOk {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdBy': json['created_by'],
        'dogmaAttributes': ((json['dogma_attributes'] as Array<any>).map(GetDogmaDynamicItemsTypeIdItemIdDogmaAttributeFromJSON)),
        'dogmaEffects': ((json['dogma_effects'] as Array<any>).map(GetDogmaDynamicItemsTypeIdItemIdDogmaEffectFromJSON)),
        'mutatorTypeId': json['mutator_type_id'],
        'sourceTypeId': json['source_type_id'],
    };
}

export function GetDogmaDynamicItemsTypeIdItemIdOkToJSON(value?: GetDogmaDynamicItemsTypeIdItemIdOk | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_by': value.createdBy,
        'dogma_attributes': ((value.dogmaAttributes as Array<any>).map(GetDogmaDynamicItemsTypeIdItemIdDogmaAttributeToJSON)),
        'dogma_effects': ((value.dogmaEffects as Array<any>).map(GetDogmaDynamicItemsTypeIdItemIdDogmaEffectToJSON)),
        'mutator_type_id': value.mutatorTypeId,
        'source_type_id': value.sourceTypeId,
    };
}

