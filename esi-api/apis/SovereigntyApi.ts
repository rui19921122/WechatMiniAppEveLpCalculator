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
    GatewayTimeout,
    GatewayTimeoutFromJSON,
    GatewayTimeoutToJSON,
    GetSovereigntyCampaigns200Ok,
    GetSovereigntyCampaigns200OkFromJSON,
    GetSovereigntyCampaigns200OkToJSON,
    GetSovereigntyMap200Ok,
    GetSovereigntyMap200OkFromJSON,
    GetSovereigntyMap200OkToJSON,
    GetSovereigntyStructures200Ok,
    GetSovereigntyStructures200OkFromJSON,
    GetSovereigntyStructures200OkToJSON,
    InternalServerError,
    InternalServerErrorFromJSON,
    InternalServerErrorToJSON,
    ServiceUnavailable,
    ServiceUnavailableFromJSON,
    ServiceUnavailableToJSON,
} from '../models';

export interface GetSovereigntyCampaignsRequest {
    datasource?: GetSovereigntyCampaignsDatasourceEnum;
    ifNoneMatch?: string;
}

export interface GetSovereigntyMapRequest {
    datasource?: GetSovereigntyMapDatasourceEnum;
    ifNoneMatch?: string;
}

export interface GetSovereigntyStructuresRequest {
    datasource?: GetSovereigntyStructuresDatasourceEnum;
    ifNoneMatch?: string;
}

/**
 * 
 */
export class SovereigntyApi extends runtime.BaseAPI {

    /**
     * Shows sovereignty data for campaigns.  --- Alternate route: `/dev/sovereignty/campaigns/`  Alternate route: `/legacy/sovereignty/campaigns/`  Alternate route: `/v1/sovereignty/campaigns/`  --- This route is cached for up to 5 seconds
     * List sovereignty campaigns
     */
    async getSovereigntyCampaignsRaw(requestParameters: GetSovereigntyCampaignsRequest): Promise<runtime.ApiResponse<Array<GetSovereigntyCampaigns200Ok>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.datasource !== undefined) {
            queryParameters['datasource'] = requestParameters.datasource;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.ifNoneMatch !== undefined && requestParameters.ifNoneMatch !== null) {
            headerParameters['If-None-Match'] = String(requestParameters.ifNoneMatch);
        }

        const response = await this.request({
            path: `/sovereignty/campaigns/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetSovereigntyCampaigns200OkFromJSON));
    }

    /**
     * Shows sovereignty data for campaigns.  --- Alternate route: `/dev/sovereignty/campaigns/`  Alternate route: `/legacy/sovereignty/campaigns/`  Alternate route: `/v1/sovereignty/campaigns/`  --- This route is cached for up to 5 seconds
     * List sovereignty campaigns
     */
    async getSovereigntyCampaigns(requestParameters: GetSovereigntyCampaignsRequest): Promise<Array<GetSovereigntyCampaigns200Ok>> {
        const response = await this.getSovereigntyCampaignsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Shows sovereignty information for solar systems  --- Alternate route: `/dev/sovereignty/map/`  Alternate route: `/legacy/sovereignty/map/`  Alternate route: `/v1/sovereignty/map/`  --- This route is cached for up to 3600 seconds
     * List sovereignty of systems
     */
    async getSovereigntyMapRaw(requestParameters: GetSovereigntyMapRequest): Promise<runtime.ApiResponse<Array<GetSovereigntyMap200Ok>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.datasource !== undefined) {
            queryParameters['datasource'] = requestParameters.datasource;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.ifNoneMatch !== undefined && requestParameters.ifNoneMatch !== null) {
            headerParameters['If-None-Match'] = String(requestParameters.ifNoneMatch);
        }

        const response = await this.request({
            path: `/sovereignty/map/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetSovereigntyMap200OkFromJSON));
    }

    /**
     * Shows sovereignty information for solar systems  --- Alternate route: `/dev/sovereignty/map/`  Alternate route: `/legacy/sovereignty/map/`  Alternate route: `/v1/sovereignty/map/`  --- This route is cached for up to 3600 seconds
     * List sovereignty of systems
     */
    async getSovereigntyMap(requestParameters: GetSovereigntyMapRequest): Promise<Array<GetSovereigntyMap200Ok>> {
        const response = await this.getSovereigntyMapRaw(requestParameters);
        return await response.value();
    }

    /**
     * Shows sovereignty data for structures.  --- Alternate route: `/dev/sovereignty/structures/`  Alternate route: `/legacy/sovereignty/structures/`  Alternate route: `/v1/sovereignty/structures/`  --- This route is cached for up to 120 seconds
     * List sovereignty structures
     */
    async getSovereigntyStructuresRaw(requestParameters: GetSovereigntyStructuresRequest): Promise<runtime.ApiResponse<Array<GetSovereigntyStructures200Ok>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.datasource !== undefined) {
            queryParameters['datasource'] = requestParameters.datasource;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.ifNoneMatch !== undefined && requestParameters.ifNoneMatch !== null) {
            headerParameters['If-None-Match'] = String(requestParameters.ifNoneMatch);
        }

        const response = await this.request({
            path: `/sovereignty/structures/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetSovereigntyStructures200OkFromJSON));
    }

    /**
     * Shows sovereignty data for structures.  --- Alternate route: `/dev/sovereignty/structures/`  Alternate route: `/legacy/sovereignty/structures/`  Alternate route: `/v1/sovereignty/structures/`  --- This route is cached for up to 120 seconds
     * List sovereignty structures
     */
    async getSovereigntyStructures(requestParameters: GetSovereigntyStructuresRequest): Promise<Array<GetSovereigntyStructures200Ok>> {
        const response = await this.getSovereigntyStructuresRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetSovereigntyCampaignsDatasourceEnum {
    Serenity = 'serenity'
}
/**
    * @export
    * @enum {string}
    */
export enum GetSovereigntyMapDatasourceEnum {
    Serenity = 'serenity'
}
/**
    * @export
    * @enum {string}
    */
export enum GetSovereigntyStructuresDatasourceEnum {
    Serenity = 'serenity'
}
