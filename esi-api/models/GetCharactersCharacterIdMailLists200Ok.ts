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
 * 200 ok object
 * @export
 * @interface GetCharactersCharacterIdMailLists200Ok
 */
export interface GetCharactersCharacterIdMailLists200Ok {
    /**
     * Mailing list ID
     * @type {number}
     * @memberof GetCharactersCharacterIdMailLists200Ok
     */
    mailingListId: number;
    /**
     * name string
     * @type {string}
     * @memberof GetCharactersCharacterIdMailLists200Ok
     */
    name: string;
}

export function GetCharactersCharacterIdMailLists200OkFromJSON(json: any): GetCharactersCharacterIdMailLists200Ok {
    return GetCharactersCharacterIdMailLists200OkFromJSONTyped(json, false);
}

export function GetCharactersCharacterIdMailLists200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCharactersCharacterIdMailLists200Ok {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mailingListId': json['mailing_list_id'],
        'name': json['name'],
    };
}

export function GetCharactersCharacterIdMailLists200OkToJSON(value?: GetCharactersCharacterIdMailLists200Ok | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mailing_list_id': value.mailingListId,
        'name': value.name,
    };
}

