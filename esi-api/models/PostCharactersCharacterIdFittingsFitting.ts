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
    PostCharactersCharacterIdFittingsItem,
    PostCharactersCharacterIdFittingsItemFromJSON,
    PostCharactersCharacterIdFittingsItemFromJSONTyped,
    PostCharactersCharacterIdFittingsItemToJSON,
} from './';

/**
 * fitting object
 * @export
 * @interface PostCharactersCharacterIdFittingsFitting
 */
export interface PostCharactersCharacterIdFittingsFitting {
    /**
     * description string
     * @type {string}
     * @memberof PostCharactersCharacterIdFittingsFitting
     */
    description: string;
    /**
     * items array
     * @type {Array<PostCharactersCharacterIdFittingsItem>}
     * @memberof PostCharactersCharacterIdFittingsFitting
     */
    items: Array<PostCharactersCharacterIdFittingsItem>;
    /**
     * name string
     * @type {string}
     * @memberof PostCharactersCharacterIdFittingsFitting
     */
    name: string;
    /**
     * ship_type_id integer
     * @type {number}
     * @memberof PostCharactersCharacterIdFittingsFitting
     */
    shipTypeId: number;
}

export function PostCharactersCharacterIdFittingsFittingFromJSON(json: any): PostCharactersCharacterIdFittingsFitting {
    return PostCharactersCharacterIdFittingsFittingFromJSONTyped(json, false);
}

export function PostCharactersCharacterIdFittingsFittingFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCharactersCharacterIdFittingsFitting {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': json['description'],
        'items': ((json['items'] as Array<any>).map(PostCharactersCharacterIdFittingsItemFromJSON)),
        'name': json['name'],
        'shipTypeId': json['ship_type_id'],
    };
}

export function PostCharactersCharacterIdFittingsFittingToJSON(value?: PostCharactersCharacterIdFittingsFitting | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'items': ((value.items as Array<any>).map(PostCharactersCharacterIdFittingsItemToJSON)),
        'name': value.name,
        'ship_type_id': value.shipTypeId,
    };
}


