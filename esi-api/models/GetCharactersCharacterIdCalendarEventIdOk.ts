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
 * Full details of a specific event
 * @export
 * @interface GetCharactersCharacterIdCalendarEventIdOk
 */
export interface GetCharactersCharacterIdCalendarEventIdOk {
    /**
     * date string
     * @type {Date}
     * @memberof GetCharactersCharacterIdCalendarEventIdOk
     */
    date: Date;
    /**
     * Length in minutes
     * @type {number}
     * @memberof GetCharactersCharacterIdCalendarEventIdOk
     */
    duration: number;
    /**
     * event_id integer
     * @type {number}
     * @memberof GetCharactersCharacterIdCalendarEventIdOk
     */
    eventId: number;
    /**
     * importance integer
     * @type {number}
     * @memberof GetCharactersCharacterIdCalendarEventIdOk
     */
    importance: number;
    /**
     * owner_id integer
     * @type {number}
     * @memberof GetCharactersCharacterIdCalendarEventIdOk
     */
    ownerId: number;
    /**
     * owner_name string
     * @type {string}
     * @memberof GetCharactersCharacterIdCalendarEventIdOk
     */
    ownerName: string;
    /**
     * owner_type string
     * @type {string}
     * @memberof GetCharactersCharacterIdCalendarEventIdOk
     */
    ownerType: GetCharactersCharacterIdCalendarEventIdOkOwnerTypeEnum;
    /**
     * response string
     * @type {string}
     * @memberof GetCharactersCharacterIdCalendarEventIdOk
     */
    response: string;
    /**
     * text string
     * @type {string}
     * @memberof GetCharactersCharacterIdCalendarEventIdOk
     */
    text: string;
    /**
     * title string
     * @type {string}
     * @memberof GetCharactersCharacterIdCalendarEventIdOk
     */
    title: string;
}

export function GetCharactersCharacterIdCalendarEventIdOkFromJSON(json: any): GetCharactersCharacterIdCalendarEventIdOk {
    return GetCharactersCharacterIdCalendarEventIdOkFromJSONTyped(json, false);
}

export function GetCharactersCharacterIdCalendarEventIdOkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCharactersCharacterIdCalendarEventIdOk {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'date': (new Date(json['date'])),
        'duration': json['duration'],
        'eventId': json['event_id'],
        'importance': json['importance'],
        'ownerId': json['owner_id'],
        'ownerName': json['owner_name'],
        'ownerType': json['owner_type'],
        'response': json['response'],
        'text': json['text'],
        'title': json['title'],
    };
}

export function GetCharactersCharacterIdCalendarEventIdOkToJSON(value?: GetCharactersCharacterIdCalendarEventIdOk | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'date': (value.date.toISOString()),
        'duration': value.duration,
        'event_id': value.eventId,
        'importance': value.importance,
        'owner_id': value.ownerId,
        'owner_name': value.ownerName,
        'owner_type': value.ownerType,
        'response': value.response,
        'text': value.text,
        'title': value.title,
    };
}

/**
* @export
* @enum {string}
*/
export enum GetCharactersCharacterIdCalendarEventIdOkOwnerTypeEnum {
    EveServer = 'eve_server',
    Corporation = 'corporation',
    Faction = 'faction',
    Character = 'character',
    Alliance = 'alliance'
}

