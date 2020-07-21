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
 * @interface GetStatusOk
 */
export interface GetStatusOk {
    /**
     * Current online player count
     * @type {number}
     * @memberof GetStatusOk
     */
    players: number;
    /**
     * Running version as string
     * @type {string}
     * @memberof GetStatusOk
     */
    serverVersion: string;
    /**
     * Server start timestamp
     * @type {Date}
     * @memberof GetStatusOk
     */
    startTime: Date;
    /**
     * If the server is in VIP mode
     * @type {boolean}
     * @memberof GetStatusOk
     */
    vip?: boolean;
}

export function GetStatusOkFromJSON(json: any): GetStatusOk {
    return GetStatusOkFromJSONTyped(json, false);
}

export function GetStatusOkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetStatusOk {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'players': json['players'],
        'serverVersion': json['server_version'],
        'startTime': (new Date(json['start_time'])),
        'vip': !exists(json, 'vip') ? undefined : json['vip'],
    };
}

export function GetStatusOkToJSON(value?: GetStatusOk | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'players': value.players,
        'server_version': value.serverVersion,
        'start_time': (value.startTime.toISOString()),
        'vip': value.vip,
    };
}


