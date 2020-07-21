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
 * @interface GetFleetsFleetIdOk
 */
export interface GetFleetsFleetIdOk {
    /**
     * Is free-move enabled
     * @type {boolean}
     * @memberof GetFleetsFleetIdOk
     */
    isFreeMove: boolean;
    /**
     * Does the fleet have an active fleet advertisement
     * @type {boolean}
     * @memberof GetFleetsFleetIdOk
     */
    isRegistered: boolean;
    /**
     * Is EVE Voice enabled
     * @type {boolean}
     * @memberof GetFleetsFleetIdOk
     */
    isVoiceEnabled: boolean;
    /**
     * Fleet MOTD in CCP flavoured HTML
     * @type {string}
     * @memberof GetFleetsFleetIdOk
     */
    motd: string;
}

export function GetFleetsFleetIdOkFromJSON(json: any): GetFleetsFleetIdOk {
    return GetFleetsFleetIdOkFromJSONTyped(json, false);
}

export function GetFleetsFleetIdOkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFleetsFleetIdOk {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isFreeMove': json['is_free_move'],
        'isRegistered': json['is_registered'],
        'isVoiceEnabled': json['is_voice_enabled'],
        'motd': json['motd'],
    };
}

export function GetFleetsFleetIdOkToJSON(value?: GetFleetsFleetIdOk | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'is_free_move': value.isFreeMove,
        'is_registered': value.isRegistered,
        'is_voice_enabled': value.isVoiceEnabled,
        'motd': value.motd,
    };
}


