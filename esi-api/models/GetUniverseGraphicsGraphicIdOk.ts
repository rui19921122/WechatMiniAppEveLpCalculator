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
 * @interface GetUniverseGraphicsGraphicIdOk
 */
export interface GetUniverseGraphicsGraphicIdOk {
    /**
     * collision_file string
     * @type {string}
     * @memberof GetUniverseGraphicsGraphicIdOk
     */
    collisionFile?: string;
    /**
     * graphic_file string
     * @type {string}
     * @memberof GetUniverseGraphicsGraphicIdOk
     */
    graphicFile?: string;
    /**
     * graphic_id integer
     * @type {number}
     * @memberof GetUniverseGraphicsGraphicIdOk
     */
    graphicId: number;
    /**
     * icon_folder string
     * @type {string}
     * @memberof GetUniverseGraphicsGraphicIdOk
     */
    iconFolder?: string;
    /**
     * sof_dna string
     * @type {string}
     * @memberof GetUniverseGraphicsGraphicIdOk
     */
    sofDna?: string;
    /**
     * sof_fation_name string
     * @type {string}
     * @memberof GetUniverseGraphicsGraphicIdOk
     */
    sofFationName?: string;
    /**
     * sof_hull_name string
     * @type {string}
     * @memberof GetUniverseGraphicsGraphicIdOk
     */
    sofHullName?: string;
    /**
     * sof_race_name string
     * @type {string}
     * @memberof GetUniverseGraphicsGraphicIdOk
     */
    sofRaceName?: string;
}

export function GetUniverseGraphicsGraphicIdOkFromJSON(json: any): GetUniverseGraphicsGraphicIdOk {
    return GetUniverseGraphicsGraphicIdOkFromJSONTyped(json, false);
}

export function GetUniverseGraphicsGraphicIdOkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUniverseGraphicsGraphicIdOk {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'collisionFile': !exists(json, 'collision_file') ? undefined : json['collision_file'],
        'graphicFile': !exists(json, 'graphic_file') ? undefined : json['graphic_file'],
        'graphicId': json['graphic_id'],
        'iconFolder': !exists(json, 'icon_folder') ? undefined : json['icon_folder'],
        'sofDna': !exists(json, 'sof_dna') ? undefined : json['sof_dna'],
        'sofFationName': !exists(json, 'sof_fation_name') ? undefined : json['sof_fation_name'],
        'sofHullName': !exists(json, 'sof_hull_name') ? undefined : json['sof_hull_name'],
        'sofRaceName': !exists(json, 'sof_race_name') ? undefined : json['sof_race_name'],
    };
}

export function GetUniverseGraphicsGraphicIdOkToJSON(value?: GetUniverseGraphicsGraphicIdOk | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'collision_file': value.collisionFile,
        'graphic_file': value.graphicFile,
        'graphic_id': value.graphicId,
        'icon_folder': value.iconFolder,
        'sof_dna': value.sofDna,
        'sof_fation_name': value.sofFationName,
        'sof_hull_name': value.sofHullName,
        'sof_race_name': value.sofRaceName,
    };
}


