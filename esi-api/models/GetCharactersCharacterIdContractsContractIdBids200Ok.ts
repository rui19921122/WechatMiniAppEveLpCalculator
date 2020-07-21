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
 * @interface GetCharactersCharacterIdContractsContractIdBids200Ok
 */
export interface GetCharactersCharacterIdContractsContractIdBids200Ok {
    /**
     * The amount bid, in ISK
     * @type {number}
     * @memberof GetCharactersCharacterIdContractsContractIdBids200Ok
     */
    amount: number;
    /**
     * Unique ID for the bid
     * @type {number}
     * @memberof GetCharactersCharacterIdContractsContractIdBids200Ok
     */
    bidId: number;
    /**
     * Character ID of the bidder
     * @type {number}
     * @memberof GetCharactersCharacterIdContractsContractIdBids200Ok
     */
    bidderId: number;
    /**
     * Datetime when the bid was placed
     * @type {Date}
     * @memberof GetCharactersCharacterIdContractsContractIdBids200Ok
     */
    dateBid: Date;
}

export function GetCharactersCharacterIdContractsContractIdBids200OkFromJSON(json: any): GetCharactersCharacterIdContractsContractIdBids200Ok {
    return GetCharactersCharacterIdContractsContractIdBids200OkFromJSONTyped(json, false);
}

export function GetCharactersCharacterIdContractsContractIdBids200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCharactersCharacterIdContractsContractIdBids200Ok {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'bidId': json['bid_id'],
        'bidderId': json['bidder_id'],
        'dateBid': (new Date(json['date_bid'])),
    };
}

export function GetCharactersCharacterIdContractsContractIdBids200OkToJSON(value?: GetCharactersCharacterIdContractsContractIdBids200Ok | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'bid_id': value.bidId,
        'bidder_id': value.bidderId,
        'date_bid': (value.dateBid.toISOString()),
    };
}


