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
 * @interface GetCharactersCharacterIdIndustryJobs200Ok
 */
export interface GetCharactersCharacterIdIndustryJobs200Ok {
    /**
     * Job activity ID
     * @type {number}
     * @memberof GetCharactersCharacterIdIndustryJobs200Ok
     */
    activityId: number;
    /**
     * blueprint_id integer
     * @type {number}
     * @memberof GetCharactersCharacterIdIndustryJobs200Ok
     */
    blueprintId: number;
    /**
     * Location ID of the location from which the blueprint was installed. Normally a station ID, but can also be an asset (e.g. container) or corporation facility
     * @type {number}
     * @memberof GetCharactersCharacterIdIndustryJobs200Ok
     */
    blueprintLocationId: number;
    /**
     * blueprint_type_id integer
     * @type {number}
     * @memberof GetCharactersCharacterIdIndustryJobs200Ok
     */
    blueprintTypeId: number;
    /**
     * ID of the character which completed this job
     * @type {number}
     * @memberof GetCharactersCharacterIdIndustryJobs200Ok
     */
    completedCharacterId?: number;
    /**
     * Date and time when this job was completed
     * @type {Date}
     * @memberof GetCharactersCharacterIdIndustryJobs200Ok
     */
    completedDate?: Date;
    /**
     * The sume of job installation fee and industry facility tax
     * @type {number}
     * @memberof GetCharactersCharacterIdIndustryJobs200Ok
     */
    cost?: number;
    /**
     * Job duration in seconds
     * @type {number}
     * @memberof GetCharactersCharacterIdIndustryJobs200Ok
     */
    duration: number;
    /**
     * Date and time when this job finished
     * @type {Date}
     * @memberof GetCharactersCharacterIdIndustryJobs200Ok
     */
    endDate: Date;
    /**
     * ID of the facility where this job is running
     * @type {number}
     * @memberof GetCharactersCharacterIdIndustryJobs200Ok
     */
    facilityId: number;
    /**
     * ID of the character which installed this job
     * @type {number}
     * @memberof GetCharactersCharacterIdIndustryJobs200Ok
     */
    installerId: number;
    /**
     * Unique job ID
     * @type {number}
     * @memberof GetCharactersCharacterIdIndustryJobs200Ok
     */
    jobId: number;
    /**
     * Number of runs blueprint is licensed for
     * @type {number}
     * @memberof GetCharactersCharacterIdIndustryJobs200Ok
     */
    licensedRuns?: number;
    /**
     * Location ID of the location to which the output of the job will be delivered. Normally a station ID, but can also be a corporation facility
     * @type {number}
     * @memberof GetCharactersCharacterIdIndustryJobs200Ok
     */
    outputLocationId: number;
    /**
     * Date and time when this job was paused (i.e. time when the facility where this job was installed went offline)
     * @type {Date}
     * @memberof GetCharactersCharacterIdIndustryJobs200Ok
     */
    pauseDate?: Date;
    /**
     * Chance of success for invention
     * @type {number}
     * @memberof GetCharactersCharacterIdIndustryJobs200Ok
     */
    probability?: number;
    /**
     * Type ID of product (manufactured, copied or invented)
     * @type {number}
     * @memberof GetCharactersCharacterIdIndustryJobs200Ok
     */
    productTypeId?: number;
    /**
     * Number of runs for a manufacturing job, or number of copies to make for a blueprint copy
     * @type {number}
     * @memberof GetCharactersCharacterIdIndustryJobs200Ok
     */
    runs: number;
    /**
     * Date and time when this job started
     * @type {Date}
     * @memberof GetCharactersCharacterIdIndustryJobs200Ok
     */
    startDate: Date;
    /**
     * ID of the station where industry facility is located
     * @type {number}
     * @memberof GetCharactersCharacterIdIndustryJobs200Ok
     */
    stationId: number;
    /**
     * status string
     * @type {string}
     * @memberof GetCharactersCharacterIdIndustryJobs200Ok
     */
    status: GetCharactersCharacterIdIndustryJobs200OkStatusEnum;
    /**
     * Number of successful runs for this job. Equal to runs unless this is an invention job
     * @type {number}
     * @memberof GetCharactersCharacterIdIndustryJobs200Ok
     */
    successfulRuns?: number;
}

export function GetCharactersCharacterIdIndustryJobs200OkFromJSON(json: any): GetCharactersCharacterIdIndustryJobs200Ok {
    return GetCharactersCharacterIdIndustryJobs200OkFromJSONTyped(json, false);
}

export function GetCharactersCharacterIdIndustryJobs200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCharactersCharacterIdIndustryJobs200Ok {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activityId': json['activity_id'],
        'blueprintId': json['blueprint_id'],
        'blueprintLocationId': json['blueprint_location_id'],
        'blueprintTypeId': json['blueprint_type_id'],
        'completedCharacterId': !exists(json, 'completed_character_id') ? undefined : json['completed_character_id'],
        'completedDate': !exists(json, 'completed_date') ? undefined : (new Date(json['completed_date'])),
        'cost': !exists(json, 'cost') ? undefined : json['cost'],
        'duration': json['duration'],
        'endDate': (new Date(json['end_date'])),
        'facilityId': json['facility_id'],
        'installerId': json['installer_id'],
        'jobId': json['job_id'],
        'licensedRuns': !exists(json, 'licensed_runs') ? undefined : json['licensed_runs'],
        'outputLocationId': json['output_location_id'],
        'pauseDate': !exists(json, 'pause_date') ? undefined : (new Date(json['pause_date'])),
        'probability': !exists(json, 'probability') ? undefined : json['probability'],
        'productTypeId': !exists(json, 'product_type_id') ? undefined : json['product_type_id'],
        'runs': json['runs'],
        'startDate': (new Date(json['start_date'])),
        'stationId': json['station_id'],
        'status': json['status'],
        'successfulRuns': !exists(json, 'successful_runs') ? undefined : json['successful_runs'],
    };
}

export function GetCharactersCharacterIdIndustryJobs200OkToJSON(value?: GetCharactersCharacterIdIndustryJobs200Ok | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'activity_id': value.activityId,
        'blueprint_id': value.blueprintId,
        'blueprint_location_id': value.blueprintLocationId,
        'blueprint_type_id': value.blueprintTypeId,
        'completed_character_id': value.completedCharacterId,
        'completed_date': value.completedDate === undefined ? undefined : (value.completedDate.toISOString()),
        'cost': value.cost,
        'duration': value.duration,
        'end_date': (value.endDate.toISOString()),
        'facility_id': value.facilityId,
        'installer_id': value.installerId,
        'job_id': value.jobId,
        'licensed_runs': value.licensedRuns,
        'output_location_id': value.outputLocationId,
        'pause_date': value.pauseDate === undefined ? undefined : (value.pauseDate.toISOString()),
        'probability': value.probability,
        'product_type_id': value.productTypeId,
        'runs': value.runs,
        'start_date': (value.startDate.toISOString()),
        'station_id': value.stationId,
        'status': value.status,
        'successful_runs': value.successfulRuns,
    };
}

/**
* @export
* @enum {string}
*/
export enum GetCharactersCharacterIdIndustryJobs200OkStatusEnum {
    Active = 'active',
    Cancelled = 'cancelled',
    Delivered = 'delivered',
    Paused = 'paused',
    Ready = 'ready',
    Reverted = 'reverted'
}

