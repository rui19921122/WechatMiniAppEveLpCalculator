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


import * as runtime from '../runtime';
import {
    BadRequest,
    BadRequestFromJSON,
    BadRequestToJSON,
    ErrorLimited,
    ErrorLimitedFromJSON,
    ErrorLimitedToJSON,
    Forbidden,
    ForbiddenFromJSON,
    ForbiddenToJSON,
    GatewayTimeout,
    GatewayTimeoutFromJSON,
    GatewayTimeoutToJSON,
    GetCharactersCharacterIdOpportunities200Ok,
    GetCharactersCharacterIdOpportunities200OkFromJSON,
    GetCharactersCharacterIdOpportunities200OkToJSON,
    GetOpportunitiesGroupsGroupIdOk,
    GetOpportunitiesGroupsGroupIdOkFromJSON,
    GetOpportunitiesGroupsGroupIdOkToJSON,
    GetOpportunitiesTasksTaskIdOk,
    GetOpportunitiesTasksTaskIdOkFromJSON,
    GetOpportunitiesTasksTaskIdOkToJSON,
    InternalServerError,
    InternalServerErrorFromJSON,
    InternalServerErrorToJSON,
    ServiceUnavailable,
    ServiceUnavailableFromJSON,
    ServiceUnavailableToJSON,
    Unauthorized,
    UnauthorizedFromJSON,
    UnauthorizedToJSON,
} from '../models';

export interface GetCharactersCharacterIdOpportunitiesRequest {
    characterId: number;
    datasource?: GetCharactersCharacterIdOpportunitiesDatasourceEnum;
    ifNoneMatch?: string;
    token?: string;
}

export interface GetOpportunitiesGroupsRequest {
    datasource?: GetOpportunitiesGroupsDatasourceEnum;
    ifNoneMatch?: string;
}

export interface GetOpportunitiesGroupsGroupIdRequest {
    groupId: number;
    acceptLanguage?: GetOpportunitiesGroupsGroupIdAcceptLanguageEnum;
    datasource?: GetOpportunitiesGroupsGroupIdDatasourceEnum;
    ifNoneMatch?: string;
    language?: GetOpportunitiesGroupsGroupIdLanguageEnum;
}

export interface GetOpportunitiesTasksRequest {
    datasource?: GetOpportunitiesTasksDatasourceEnum;
    ifNoneMatch?: string;
}

export interface GetOpportunitiesTasksTaskIdRequest {
    taskId: number;
    datasource?: GetOpportunitiesTasksTaskIdDatasourceEnum;
    ifNoneMatch?: string;
}

/**
 * 
 */
export class OpportunitiesApi extends runtime.BaseAPI {

    /**
     * Return a list of tasks finished by a character  --- Alternate route: `/dev/characters/{character_id}/opportunities/`  Alternate route: `/legacy/characters/{character_id}/opportunities/`  Alternate route: `/v1/characters/{character_id}/opportunities/`  --- This route is cached for up to 3600 seconds
     * Get a character\'s completed tasks
     */
    async getCharactersCharacterIdOpportunitiesRaw(requestParameters: GetCharactersCharacterIdOpportunitiesRequest): Promise<runtime.ApiResponse<Array<GetCharactersCharacterIdOpportunities200Ok>>> {
        if (requestParameters.characterId === null || requestParameters.characterId === undefined) {
            throw new runtime.RequiredError('characterId','Required parameter requestParameters.characterId was null or undefined when calling getCharactersCharacterIdOpportunities.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.datasource !== undefined) {
            queryParameters['datasource'] = requestParameters.datasource;
        }

        if (requestParameters.token !== undefined) {
            queryParameters['token'] = requestParameters.token;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.ifNoneMatch !== undefined && requestParameters.ifNoneMatch !== null) {
            headerParameters['If-None-Match'] = String(requestParameters.ifNoneMatch);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("evesso", ["esi-characters.read_opportunities.v1"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/characters/{character_id}/opportunities/`.replace(`{${"character_id"}}`, encodeURIComponent(String(requestParameters.characterId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetCharactersCharacterIdOpportunities200OkFromJSON));
    }

    /**
     * Return a list of tasks finished by a character  --- Alternate route: `/dev/characters/{character_id}/opportunities/`  Alternate route: `/legacy/characters/{character_id}/opportunities/`  Alternate route: `/v1/characters/{character_id}/opportunities/`  --- This route is cached for up to 3600 seconds
     * Get a character\'s completed tasks
     */
    async getCharactersCharacterIdOpportunities(requestParameters: GetCharactersCharacterIdOpportunitiesRequest): Promise<Array<GetCharactersCharacterIdOpportunities200Ok>> {
        const response = await this.getCharactersCharacterIdOpportunitiesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Return a list of opportunities groups  --- Alternate route: `/dev/opportunities/groups/`  Alternate route: `/legacy/opportunities/groups/`  Alternate route: `/v1/opportunities/groups/`  --- This route expires daily at 11:05
     * Get opportunities groups
     */
    async getOpportunitiesGroupsRaw(requestParameters: GetOpportunitiesGroupsRequest): Promise<runtime.ApiResponse<Array<number>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.datasource !== undefined) {
            queryParameters['datasource'] = requestParameters.datasource;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.ifNoneMatch !== undefined && requestParameters.ifNoneMatch !== null) {
            headerParameters['If-None-Match'] = String(requestParameters.ifNoneMatch);
        }

        const response = await this.request({
            path: `/opportunities/groups/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Return a list of opportunities groups  --- Alternate route: `/dev/opportunities/groups/`  Alternate route: `/legacy/opportunities/groups/`  Alternate route: `/v1/opportunities/groups/`  --- This route expires daily at 11:05
     * Get opportunities groups
     */
    async getOpportunitiesGroups(requestParameters: GetOpportunitiesGroupsRequest): Promise<Array<number>> {
        const response = await this.getOpportunitiesGroupsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Return information of an opportunities group  --- Alternate route: `/dev/opportunities/groups/{group_id}/`  Alternate route: `/legacy/opportunities/groups/{group_id}/`  Alternate route: `/v1/opportunities/groups/{group_id}/`  --- This route expires daily at 11:05
     * Get opportunities group
     */
    async getOpportunitiesGroupsGroupIdRaw(requestParameters: GetOpportunitiesGroupsGroupIdRequest): Promise<runtime.ApiResponse<GetOpportunitiesGroupsGroupIdOk>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling getOpportunitiesGroupsGroupId.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.datasource !== undefined) {
            queryParameters['datasource'] = requestParameters.datasource;
        }

        if (requestParameters.language !== undefined) {
            queryParameters['language'] = requestParameters.language;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        if (requestParameters.ifNoneMatch !== undefined && requestParameters.ifNoneMatch !== null) {
            headerParameters['If-None-Match'] = String(requestParameters.ifNoneMatch);
        }

        const response = await this.request({
            path: `/opportunities/groups/{group_id}/`.replace(`{${"group_id"}}`, encodeURIComponent(String(requestParameters.groupId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetOpportunitiesGroupsGroupIdOkFromJSON(jsonValue));
    }

    /**
     * Return information of an opportunities group  --- Alternate route: `/dev/opportunities/groups/{group_id}/`  Alternate route: `/legacy/opportunities/groups/{group_id}/`  Alternate route: `/v1/opportunities/groups/{group_id}/`  --- This route expires daily at 11:05
     * Get opportunities group
     */
    async getOpportunitiesGroupsGroupId(requestParameters: GetOpportunitiesGroupsGroupIdRequest): Promise<GetOpportunitiesGroupsGroupIdOk> {
        const response = await this.getOpportunitiesGroupsGroupIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Return a list of opportunities tasks  --- Alternate route: `/dev/opportunities/tasks/`  Alternate route: `/legacy/opportunities/tasks/`  Alternate route: `/v1/opportunities/tasks/`  --- This route expires daily at 11:05
     * Get opportunities tasks
     */
    async getOpportunitiesTasksRaw(requestParameters: GetOpportunitiesTasksRequest): Promise<runtime.ApiResponse<Array<number>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.datasource !== undefined) {
            queryParameters['datasource'] = requestParameters.datasource;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.ifNoneMatch !== undefined && requestParameters.ifNoneMatch !== null) {
            headerParameters['If-None-Match'] = String(requestParameters.ifNoneMatch);
        }

        const response = await this.request({
            path: `/opportunities/tasks/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Return a list of opportunities tasks  --- Alternate route: `/dev/opportunities/tasks/`  Alternate route: `/legacy/opportunities/tasks/`  Alternate route: `/v1/opportunities/tasks/`  --- This route expires daily at 11:05
     * Get opportunities tasks
     */
    async getOpportunitiesTasks(requestParameters: GetOpportunitiesTasksRequest): Promise<Array<number>> {
        const response = await this.getOpportunitiesTasksRaw(requestParameters);
        return await response.value();
    }

    /**
     * Return information of an opportunities task  --- Alternate route: `/dev/opportunities/tasks/{task_id}/`  Alternate route: `/legacy/opportunities/tasks/{task_id}/`  Alternate route: `/v1/opportunities/tasks/{task_id}/`  --- This route expires daily at 11:05
     * Get opportunities task
     */
    async getOpportunitiesTasksTaskIdRaw(requestParameters: GetOpportunitiesTasksTaskIdRequest): Promise<runtime.ApiResponse<GetOpportunitiesTasksTaskIdOk>> {
        if (requestParameters.taskId === null || requestParameters.taskId === undefined) {
            throw new runtime.RequiredError('taskId','Required parameter requestParameters.taskId was null or undefined when calling getOpportunitiesTasksTaskId.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.datasource !== undefined) {
            queryParameters['datasource'] = requestParameters.datasource;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.ifNoneMatch !== undefined && requestParameters.ifNoneMatch !== null) {
            headerParameters['If-None-Match'] = String(requestParameters.ifNoneMatch);
        }

        const response = await this.request({
            path: `/opportunities/tasks/{task_id}/`.replace(`{${"task_id"}}`, encodeURIComponent(String(requestParameters.taskId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetOpportunitiesTasksTaskIdOkFromJSON(jsonValue));
    }

    /**
     * Return information of an opportunities task  --- Alternate route: `/dev/opportunities/tasks/{task_id}/`  Alternate route: `/legacy/opportunities/tasks/{task_id}/`  Alternate route: `/v1/opportunities/tasks/{task_id}/`  --- This route expires daily at 11:05
     * Get opportunities task
     */
    async getOpportunitiesTasksTaskId(requestParameters: GetOpportunitiesTasksTaskIdRequest): Promise<GetOpportunitiesTasksTaskIdOk> {
        const response = await this.getOpportunitiesTasksTaskIdRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetCharactersCharacterIdOpportunitiesDatasourceEnum {
    Serenity = 'serenity'
}
/**
    * @export
    * @enum {string}
    */
export enum GetOpportunitiesGroupsDatasourceEnum {
    Serenity = 'serenity'
}
/**
    * @export
    * @enum {string}
    */
export enum GetOpportunitiesGroupsGroupIdAcceptLanguageEnum {
    EnUs = 'en-us',
    Zh = 'zh'
}
/**
    * @export
    * @enum {string}
    */
export enum GetOpportunitiesGroupsGroupIdDatasourceEnum {
    Serenity = 'serenity'
}
/**
    * @export
    * @enum {string}
    */
export enum GetOpportunitiesGroupsGroupIdLanguageEnum {
    EnUs = 'en-us',
    Zh = 'zh'
}
/**
    * @export
    * @enum {string}
    */
export enum GetOpportunitiesTasksDatasourceEnum {
    Serenity = 'serenity'
}
/**
    * @export
    * @enum {string}
    */
export enum GetOpportunitiesTasksTaskIdDatasourceEnum {
    Serenity = 'serenity'
}
