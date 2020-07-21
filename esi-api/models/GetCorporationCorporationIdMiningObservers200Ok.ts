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
 * @interface GetCorporationCorporationIdMiningObservers200Ok
 */
export interface GetCorporationCorporationIdMiningObservers200Ok {
    /**
     * last_updated string
     * @type {Date}
     * @memberof GetCorporationCorporationIdMiningObservers200Ok
     */
    lastUpdated: Date;
    /**
     * The entity that was observing the asteroid field when it was mined.

     * @type {number}
     * @memberof GetCorporationCorporationIdMiningObservers200Ok
     */
    observerId: number;
    /**
     * The category of the observing entity
     * @type {string}
     * @memberof GetCorporationCorporationIdMiningObservers200Ok
     */
    observerType: GetCorporationCorporationIdMiningObservers200OkObserverTypeEnum;
}

export function GetCorporationCorporationIdMiningObservers200OkFromJSON(json: any): GetCorporationCorporationIdMiningObservers200Ok {
    return GetCorporationCorporationIdMiningObservers200OkFromJSONTyped(json, false);
}

export function GetCorporationCorporationIdMiningObservers200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCorporationCorporationIdMiningObservers200Ok {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastUpdated': (new Date(json['last_updated'])),
        'observerId': json['observer_id'],
        'observerType': json['observer_type'],
    };
}

export function GetCorporationCorporationIdMiningObservers200OkToJSON(value?: GetCorporationCorporationIdMiningObservers200Ok | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'last_updated': (value.lastUpdated.toISOString().substr(0,10)),
        'observer_id': value.observerId,
        'observer_type': value.observerType,
    };
}

/**
* @export
* @enum {string}
*/
export enum GetCorporationCorporationIdMiningObservers200OkObserverTypeEnum {
    Structure = 'structure'
}


