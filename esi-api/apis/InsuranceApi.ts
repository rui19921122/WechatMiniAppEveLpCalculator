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
    GetInsurancePrices200Ok,
    GetInsurancePrices200OkFromJSON,
    GetInsurancePrices200OkToJSON,
    InternalServerError,
    InternalServerErrorFromJSON,
    InternalServerErrorToJSON,
    ServiceUnavailable,
    ServiceUnavailableFromJSON,
    ServiceUnavailableToJSON,
} from '../models';

export interface GetInsurancePricesRequest {
    acceptLanguage?: GetInsurancePricesAcceptLanguageEnum;
    datasource?: GetInsurancePricesDatasourceEnum;
    ifNoneMatch?: string;
    language?: GetInsurancePricesLanguageEnum;
}

/**
 * 
 */
export class InsuranceApi extends runtime.BaseAPI {

    /**
     * Return available insurance levels for all ship types  --- Alternate route: `/dev/insurance/prices/`  Alternate route: `/legacy/insurance/prices/`  Alternate route: `/v1/insurance/prices/`  --- This route is cached for up to 3600 seconds
     * List insurance levels
     */
    async getInsurancePricesRaw(requestParameters: GetInsurancePricesRequest): Promise<runtime.ApiResponse<Array<GetInsurancePrices200Ok>>> {
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
            path: `/insurance/prices/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetInsurancePrices200OkFromJSON));
    }

    /**
     * Return available insurance levels for all ship types  --- Alternate route: `/dev/insurance/prices/`  Alternate route: `/legacy/insurance/prices/`  Alternate route: `/v1/insurance/prices/`  --- This route is cached for up to 3600 seconds
     * List insurance levels
     */
    async getInsurancePrices(requestParameters: GetInsurancePricesRequest): Promise<Array<GetInsurancePrices200Ok>> {
        const response = await this.getInsurancePricesRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetInsurancePricesAcceptLanguageEnum {
    EnUs = 'en-us',
    Zh = 'zh'
}
/**
    * @export
    * @enum {string}
    */
export enum GetInsurancePricesDatasourceEnum {
    Serenity = 'serenity'
}
/**
    * @export
    * @enum {string}
    */
export enum GetInsurancePricesLanguageEnum {
    EnUs = 'en-us',
    Zh = 'zh'
}
