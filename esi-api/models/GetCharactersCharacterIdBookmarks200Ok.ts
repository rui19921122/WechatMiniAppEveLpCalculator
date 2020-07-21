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
    GetCharactersCharacterIdBookmarksCoordinates,
    GetCharactersCharacterIdBookmarksCoordinatesFromJSON,
    GetCharactersCharacterIdBookmarksCoordinatesFromJSONTyped,
    GetCharactersCharacterIdBookmarksCoordinatesToJSON,
    GetCharactersCharacterIdBookmarksItem,
    GetCharactersCharacterIdBookmarksItemFromJSON,
    GetCharactersCharacterIdBookmarksItemFromJSONTyped,
    GetCharactersCharacterIdBookmarksItemToJSON,
} from './';

/**
 * 200 ok object
 * @export
 * @interface GetCharactersCharacterIdBookmarks200Ok
 */
export interface GetCharactersCharacterIdBookmarks200Ok {
    /**
     * bookmark_id integer
     * @type {number}
     * @memberof GetCharactersCharacterIdBookmarks200Ok
     */
    bookmarkId: number;
    /**
     * 
     * @type {GetCharactersCharacterIdBookmarksCoordinates}
     * @memberof GetCharactersCharacterIdBookmarks200Ok
     */
    coordinates?: GetCharactersCharacterIdBookmarksCoordinates;
    /**
     * created string
     * @type {Date}
     * @memberof GetCharactersCharacterIdBookmarks200Ok
     */
    created: Date;
    /**
     * creator_id integer
     * @type {number}
     * @memberof GetCharactersCharacterIdBookmarks200Ok
     */
    creatorId: number;
    /**
     * folder_id integer
     * @type {number}
     * @memberof GetCharactersCharacterIdBookmarks200Ok
     */
    folderId?: number;
    /**
     * 
     * @type {GetCharactersCharacterIdBookmarksItem}
     * @memberof GetCharactersCharacterIdBookmarks200Ok
     */
    item?: GetCharactersCharacterIdBookmarksItem;
    /**
     * label string
     * @type {string}
     * @memberof GetCharactersCharacterIdBookmarks200Ok
     */
    label: string;
    /**
     * location_id integer
     * @type {number}
     * @memberof GetCharactersCharacterIdBookmarks200Ok
     */
    locationId: number;
    /**
     * notes string
     * @type {string}
     * @memberof GetCharactersCharacterIdBookmarks200Ok
     */
    notes: string;
}

export function GetCharactersCharacterIdBookmarks200OkFromJSON(json: any): GetCharactersCharacterIdBookmarks200Ok {
    return GetCharactersCharacterIdBookmarks200OkFromJSONTyped(json, false);
}

export function GetCharactersCharacterIdBookmarks200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCharactersCharacterIdBookmarks200Ok {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookmarkId': json['bookmark_id'],
        'coordinates': !exists(json, 'coordinates') ? undefined : GetCharactersCharacterIdBookmarksCoordinatesFromJSON(json['coordinates']),
        'created': (new Date(json['created'])),
        'creatorId': json['creator_id'],
        'folderId': !exists(json, 'folder_id') ? undefined : json['folder_id'],
        'item': !exists(json, 'item') ? undefined : GetCharactersCharacterIdBookmarksItemFromJSON(json['item']),
        'label': json['label'],
        'locationId': json['location_id'],
        'notes': json['notes'],
    };
}

export function GetCharactersCharacterIdBookmarks200OkToJSON(value?: GetCharactersCharacterIdBookmarks200Ok | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookmark_id': value.bookmarkId,
        'coordinates': GetCharactersCharacterIdBookmarksCoordinatesToJSON(value.coordinates),
        'created': (value.created.toISOString()),
        'creator_id': value.creatorId,
        'folder_id': value.folderId,
        'item': GetCharactersCharacterIdBookmarksItemToJSON(value.item),
        'label': value.label,
        'location_id': value.locationId,
        'notes': value.notes,
    };
}

