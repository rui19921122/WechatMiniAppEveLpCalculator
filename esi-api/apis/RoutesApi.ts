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
    GetRouteOriginDestinationNotFound,
    GetRouteOriginDestinationNotFoundFromJSON,
    GetRouteOriginDestinationNotFoundToJSON,
    InternalServerError,
    InternalServerErrorFromJSON,
    InternalServerErrorToJSON,
    ServiceUnavailable,
    ServiceUnavailableFromJSON,
    ServiceUnavailableToJSON,
} from '../models';

export interface GetRouteOriginDestinationRequest {
    destination: number;
    origin: number;
    avoid?: Array<number>;
    connections?: Array<Array<number>>;
    datasource?: GetRouteOriginDestinationDatasourceEnum;
    flag?: GetRouteOriginDestinationFlagEnum;
    ifNoneMatch?: string;
}

/**
 * 
 */
export class RoutesApi extends runtime.BaseAPI {

    /**
     * Get the systems between origin and destination  --- Alternate route: `/dev/route/{origin}/{destination}/`  Alternate route: `/legacy/route/{origin}/{destination}/`  Alternate route: `/v1/route/{origin}/{destination}/`  --- This route is cached for up to 86400 seconds
     * Get route
     */
    async getRouteOriginDestinationRaw(requestParameters: GetRouteOriginDestinationRequest): Promise<runtime.ApiResponse<Array<number>>> {
        if (requestParameters.destination === null || requestParameters.destination === undefined) {
            throw new runtime.RequiredError('destination','Required parameter requestParameters.destination was null or undefined when calling getRouteOriginDestination.');
        }

        if (requestParameters.origin === null || requestParameters.origin === undefined) {
            throw new runtime.RequiredError('origin','Required parameter requestParameters.origin was null or undefined when calling getRouteOriginDestination.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.avoid) {
            queryParameters['avoid'] = requestParameters.avoid.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.connections) {
            queryParameters['connections'] = requestParameters.connections.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.datasource !== undefined) {
            queryParameters['datasource'] = requestParameters.datasource;
        }

        if (requestParameters.flag !== undefined) {
            queryParameters['flag'] = requestParameters.flag;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.ifNoneMatch !== undefined && requestParameters.ifNoneMatch !== null) {
            headerParameters['If-None-Match'] = String(requestParameters.ifNoneMatch);
        }

        const response = await this.request({
            path: `/route/{origin}/{destination}/`.replace(`{${"destination"}}`, encodeURIComponent(String(requestParameters.destination))).replace(`{${"origin"}}`, encodeURIComponent(String(requestParameters.origin))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get the systems between origin and destination  --- Alternate route: `/dev/route/{origin}/{destination}/`  Alternate route: `/legacy/route/{origin}/{destination}/`  Alternate route: `/v1/route/{origin}/{destination}/`  --- This route is cached for up to 86400 seconds
     * Get route
     */
    async getRouteOriginDestination(requestParameters: GetRouteOriginDestinationRequest): Promise<Array<number>> {
        const response = await this.getRouteOriginDestinationRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetRouteOriginDestinationDatasourceEnum {
    Serenity = 'serenity'
}
/**
    * @export
    * @enum {string}
    */
export enum GetRouteOriginDestinationFlagEnum {
    Shortest = 'shortest',
    Secure = 'secure',
    Insecure = 'insecure'
}