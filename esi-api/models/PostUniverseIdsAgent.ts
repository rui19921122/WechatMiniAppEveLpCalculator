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
 * agent object
 * @export
 * @interface PostUniverseIdsAgent
 */
export interface PostUniverseIdsAgent {
    /**
     * id integer
     * @type {number}
     * @memberof PostUniverseIdsAgent
     */
    id?: number;
    /**
     * name string
     * @type {string}
     * @memberof PostUniverseIdsAgent
     */
    name?: string;
}

export function PostUniverseIdsAgentFromJSON(json: any): PostUniverseIdsAgent {
    return PostUniverseIdsAgentFromJSONTyped(json, false);
}

export function PostUniverseIdsAgentFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostUniverseIdsAgent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function PostUniverseIdsAgentToJSON(value?: PostUniverseIdsAgent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
    };
}


