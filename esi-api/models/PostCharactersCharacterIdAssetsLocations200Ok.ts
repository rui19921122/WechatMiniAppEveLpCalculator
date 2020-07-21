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
    PostCharactersCharacterIdAssetsLocationsPosition,
    PostCharactersCharacterIdAssetsLocationsPositionFromJSON,
    PostCharactersCharacterIdAssetsLocationsPositionFromJSONTyped,
    PostCharactersCharacterIdAssetsLocationsPositionToJSON,
} from './';

/**
 * 200 ok object
 * @export
 * @interface PostCharactersCharacterIdAssetsLocations200Ok
 */
export interface PostCharactersCharacterIdAssetsLocations200Ok {
    /**
     * item_id integer
     * @type {number}
     * @memberof PostCharactersCharacterIdAssetsLocations200Ok
     */
    itemId: number;
    /**
     * 
     * @type {PostCharactersCharacterIdAssetsLocationsPosition}
     * @memberof PostCharactersCharacterIdAssetsLocations200Ok
     */
    position: PostCharactersCharacterIdAssetsLocationsPosition;
}

export function PostCharactersCharacterIdAssetsLocations200OkFromJSON(json: any): PostCharactersCharacterIdAssetsLocations200Ok {
    return PostCharactersCharacterIdAssetsLocations200OkFromJSONTyped(json, false);
}

export function PostCharactersCharacterIdAssetsLocations200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCharactersCharacterIdAssetsLocations200Ok {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'itemId': json['item_id'],
        'position': PostCharactersCharacterIdAssetsLocationsPositionFromJSON(json['position']),
    };
}

export function PostCharactersCharacterIdAssetsLocations200OkToJSON(value?: PostCharactersCharacterIdAssetsLocations200Ok | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'item_id': value.itemId,
        'position': PostCharactersCharacterIdAssetsLocationsPositionToJSON(value.position),
    };
}

