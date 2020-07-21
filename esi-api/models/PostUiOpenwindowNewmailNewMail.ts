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
 * new_mail object
 * @export
 * @interface PostUiOpenwindowNewmailNewMail
 */
export interface PostUiOpenwindowNewmailNewMail {
    /**
     * body string
     * @type {string}
     * @memberof PostUiOpenwindowNewmailNewMail
     */
    body: string;
    /**
     * recipients array
     * @type {Array<number>}
     * @memberof PostUiOpenwindowNewmailNewMail
     */
    recipients: Array<number>;
    /**
     * subject string
     * @type {string}
     * @memberof PostUiOpenwindowNewmailNewMail
     */
    subject: string;
    /**
     * to_corp_or_alliance_id integer
     * @type {number}
     * @memberof PostUiOpenwindowNewmailNewMail
     */
    toCorpOrAllianceId?: number;
    /**
     * Corporations, alliances and mailing lists are all types of mailing groups. You may only send to one mailing group, at a time, so you may fill out either this field or the to_corp_or_alliance_ids field
     * @type {number}
     * @memberof PostUiOpenwindowNewmailNewMail
     */
    toMailingListId?: number;
}

export function PostUiOpenwindowNewmailNewMailFromJSON(json: any): PostUiOpenwindowNewmailNewMail {
    return PostUiOpenwindowNewmailNewMailFromJSONTyped(json, false);
}

export function PostUiOpenwindowNewmailNewMailFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostUiOpenwindowNewmailNewMail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'body': json['body'],
        'recipients': json['recipients'],
        'subject': json['subject'],
        'toCorpOrAllianceId': !exists(json, 'to_corp_or_alliance_id') ? undefined : json['to_corp_or_alliance_id'],
        'toMailingListId': !exists(json, 'to_mailing_list_id') ? undefined : json['to_mailing_list_id'],
    };
}

export function PostUiOpenwindowNewmailNewMailToJSON(value?: PostUiOpenwindowNewmailNewMail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'body': value.body,
        'recipients': value.recipients,
        'subject': value.subject,
        'to_corp_or_alliance_id': value.toCorpOrAllianceId,
        'to_mailing_list_id': value.toMailingListId,
    };
}


