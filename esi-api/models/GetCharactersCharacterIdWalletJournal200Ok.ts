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
 * @interface GetCharactersCharacterIdWalletJournal200Ok
 */
export interface GetCharactersCharacterIdWalletJournal200Ok {
    /**
     * The amount of ISK given or taken from the wallet as a result of the given transaction. Positive when ISK is deposited into the wallet and negative when ISK is withdrawn
     * @type {number}
     * @memberof GetCharactersCharacterIdWalletJournal200Ok
     */
    amount?: number;
    /**
     * Wallet balance after transaction occurred
     * @type {number}
     * @memberof GetCharactersCharacterIdWalletJournal200Ok
     */
    balance?: number;
    /**
     * An ID that gives extra context to the particular transaction. Because of legacy reasons the context is completely different per ref_type and means different things. It is also possible to not have a context_id
     * @type {number}
     * @memberof GetCharactersCharacterIdWalletJournal200Ok
     */
    contextId?: number;
    /**
     * The type of the given context_id if present
     * @type {string}
     * @memberof GetCharactersCharacterIdWalletJournal200Ok
     */
    contextIdType?: GetCharactersCharacterIdWalletJournal200OkContextIdTypeEnum;
    /**
     * Date and time of transaction
     * @type {Date}
     * @memberof GetCharactersCharacterIdWalletJournal200Ok
     */
    date: Date;
    /**
     * The reason for the transaction, mirrors what is seen in the client
     * @type {string}
     * @memberof GetCharactersCharacterIdWalletJournal200Ok
     */
    description: string;
    /**
     * The id of the first party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name
     * @type {number}
     * @memberof GetCharactersCharacterIdWalletJournal200Ok
     */
    firstPartyId?: number;
    /**
     * Unique journal reference ID
     * @type {number}
     * @memberof GetCharactersCharacterIdWalletJournal200Ok
     */
    id: number;
    /**
     * The user stated reason for the transaction. Only applies to some ref_types
     * @type {string}
     * @memberof GetCharactersCharacterIdWalletJournal200Ok
     */
    reason?: string;
    /**
     * "The transaction type for the given. transaction. Different transaction types will populate different attributes."
     * @type {string}
     * @memberof GetCharactersCharacterIdWalletJournal200Ok
     */
    refType: GetCharactersCharacterIdWalletJournal200OkRefTypeEnum;
    /**
     * The id of the second party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name
     * @type {number}
     * @memberof GetCharactersCharacterIdWalletJournal200Ok
     */
    secondPartyId?: number;
    /**
     * Tax amount received. Only applies to tax related transactions
     * @type {number}
     * @memberof GetCharactersCharacterIdWalletJournal200Ok
     */
    tax?: number;
    /**
     * The corporation ID receiving any tax paid. Only applies to tax related transactions
     * @type {number}
     * @memberof GetCharactersCharacterIdWalletJournal200Ok
     */
    taxReceiverId?: number;
}

export function GetCharactersCharacterIdWalletJournal200OkFromJSON(json: any): GetCharactersCharacterIdWalletJournal200Ok {
    return GetCharactersCharacterIdWalletJournal200OkFromJSONTyped(json, false);
}

export function GetCharactersCharacterIdWalletJournal200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCharactersCharacterIdWalletJournal200Ok {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'balance': !exists(json, 'balance') ? undefined : json['balance'],
        'contextId': !exists(json, 'context_id') ? undefined : json['context_id'],
        'contextIdType': !exists(json, 'context_id_type') ? undefined : json['context_id_type'],
        'date': (new Date(json['date'])),
        'description': json['description'],
        'firstPartyId': !exists(json, 'first_party_id') ? undefined : json['first_party_id'],
        'id': json['id'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'refType': json['ref_type'],
        'secondPartyId': !exists(json, 'second_party_id') ? undefined : json['second_party_id'],
        'tax': !exists(json, 'tax') ? undefined : json['tax'],
        'taxReceiverId': !exists(json, 'tax_receiver_id') ? undefined : json['tax_receiver_id'],
    };
}

export function GetCharactersCharacterIdWalletJournal200OkToJSON(value?: GetCharactersCharacterIdWalletJournal200Ok | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'balance': value.balance,
        'context_id': value.contextId,
        'context_id_type': value.contextIdType,
        'date': (value.date.toISOString()),
        'description': value.description,
        'first_party_id': value.firstPartyId,
        'id': value.id,
        'reason': value.reason,
        'ref_type': value.refType,
        'second_party_id': value.secondPartyId,
        'tax': value.tax,
        'tax_receiver_id': value.taxReceiverId,
    };
}

/**
* @export
* @enum {string}
*/
export enum GetCharactersCharacterIdWalletJournal200OkContextIdTypeEnum {
    StructureId = 'structure_id',
    StationId = 'station_id',
    MarketTransactionId = 'market_transaction_id',
    CharacterId = 'character_id',
    CorporationId = 'corporation_id',
    AllianceId = 'alliance_id',
    EveSystem = 'eve_system',
    IndustryJobId = 'industry_job_id',
    ContractId = 'contract_id',
    PlanetId = 'planet_id',
    SystemId = 'system_id',
    TypeId = 'type_id'
}
/**
* @export
* @enum {string}
*/
export enum GetCharactersCharacterIdWalletJournal200OkRefTypeEnum {
    AccelerationGateFee = 'acceleration_gate_fee',
    AdvertisementListingFee = 'advertisement_listing_fee',
    AgentDonation = 'agent_donation',
    AgentLocationServices = 'agent_location_services',
    AgentMiscellaneous = 'agent_miscellaneous',
    AgentMissionCollateralPaid = 'agent_mission_collateral_paid',
    AgentMissionCollateralRefunded = 'agent_mission_collateral_refunded',
    AgentMissionReward = 'agent_mission_reward',
    AgentMissionRewardCorporationTax = 'agent_mission_reward_corporation_tax',
    AgentMissionTimeBonusReward = 'agent_mission_time_bonus_reward',
    AgentMissionTimeBonusRewardCorporationTax = 'agent_mission_time_bonus_reward_corporation_tax',
    AgentSecurityServices = 'agent_security_services',
    AgentServicesRendered = 'agent_services_rendered',
    AgentsPreward = 'agents_preward',
    AllianceMaintainanceFee = 'alliance_maintainance_fee',
    AllianceRegistrationFee = 'alliance_registration_fee',
    AssetSafetyRecoveryTax = 'asset_safety_recovery_tax',
    Bounty = 'bounty',
    BountyPrize = 'bounty_prize',
    BountyPrizeCorporationTax = 'bounty_prize_corporation_tax',
    BountyPrizes = 'bounty_prizes',
    BountyReimbursement = 'bounty_reimbursement',
    BountySurcharge = 'bounty_surcharge',
    BrokersFee = 'brokers_fee',
    CloneActivation = 'clone_activation',
    CloneTransfer = 'clone_transfer',
    ContrabandFine = 'contraband_fine',
    ContractAuctionBid = 'contract_auction_bid',
    ContractAuctionBidCorp = 'contract_auction_bid_corp',
    ContractAuctionBidRefund = 'contract_auction_bid_refund',
    ContractAuctionSold = 'contract_auction_sold',
    ContractBrokersFee = 'contract_brokers_fee',
    ContractBrokersFeeCorp = 'contract_brokers_fee_corp',
    ContractCollateral = 'contract_collateral',
    ContractCollateralDepositedCorp = 'contract_collateral_deposited_corp',
    ContractCollateralPayout = 'contract_collateral_payout',
    ContractCollateralRefund = 'contract_collateral_refund',
    ContractDeposit = 'contract_deposit',
    ContractDepositCorp = 'contract_deposit_corp',
    ContractDepositRefund = 'contract_deposit_refund',
    ContractDepositSalesTax = 'contract_deposit_sales_tax',
    ContractPrice = 'contract_price',
    ContractPricePaymentCorp = 'contract_price_payment_corp',
    ContractReversal = 'contract_reversal',
    ContractReward = 'contract_reward',
    ContractRewardDeposited = 'contract_reward_deposited',
    ContractRewardDepositedCorp = 'contract_reward_deposited_corp',
    ContractRewardRefund = 'contract_reward_refund',
    ContractSalesTax = 'contract_sales_tax',
    Copying = 'copying',
    CorporateRewardPayout = 'corporate_reward_payout',
    CorporateRewardTax = 'corporate_reward_tax',
    CorporationAccountWithdrawal = 'corporation_account_withdrawal',
    CorporationBulkPayment = 'corporation_bulk_payment',
    CorporationDividendPayment = 'corporation_dividend_payment',
    CorporationLiquidation = 'corporation_liquidation',
    CorporationLogoChangeCost = 'corporation_logo_change_cost',
    CorporationPayment = 'corporation_payment',
    CorporationRegistrationFee = 'corporation_registration_fee',
    CourierMissionEscrow = 'courier_mission_escrow',
    Cspa = 'cspa',
    Cspaofflinerefund = 'cspaofflinerefund',
    DatacoreFee = 'datacore_fee',
    DnaModificationFee = 'dna_modification_fee',
    DockingFee = 'docking_fee',
    DuelWagerEscrow = 'duel_wager_escrow',
    DuelWagerPayment = 'duel_wager_payment',
    DuelWagerRefund = 'duel_wager_refund',
    FactorySlotRentalFee = 'factory_slot_rental_fee',
    GmCashTransfer = 'gm_cash_transfer',
    IndustryJobTax = 'industry_job_tax',
    InfrastructureHubMaintenance = 'infrastructure_hub_maintenance',
    Inheritance = 'inheritance',
    Insurance = 'insurance',
    ItemTraderPayment = 'item_trader_payment',
    JumpCloneActivationFee = 'jump_clone_activation_fee',
    JumpCloneInstallationFee = 'jump_clone_installation_fee',
    KillRightFee = 'kill_right_fee',
    LpStore = 'lp_store',
    Manufacturing = 'manufacturing',
    MarketEscrow = 'market_escrow',
    MarketFinePaid = 'market_fine_paid',
    MarketTransaction = 'market_transaction',
    MedalCreation = 'medal_creation',
    MedalIssued = 'medal_issued',
    MissionCompletion = 'mission_completion',
    MissionCost = 'mission_cost',
    MissionExpiration = 'mission_expiration',
    MissionReward = 'mission_reward',
    OfficeRentalFee = 'office_rental_fee',
    OperationBonus = 'operation_bonus',
    OpportunityReward = 'opportunity_reward',
    PlanetaryConstruction = 'planetary_construction',
    PlanetaryExportTax = 'planetary_export_tax',
    PlanetaryImportTax = 'planetary_import_tax',
    PlayerDonation = 'player_donation',
    PlayerTrading = 'player_trading',
    ProjectDiscoveryReward = 'project_discovery_reward',
    ProjectDiscoveryTax = 'project_discovery_tax',
    Reaction = 'reaction',
    ReleaseOfImpoundedProperty = 'release_of_impounded_property',
    RepairBill = 'repair_bill',
    ReprocessingTax = 'reprocessing_tax',
    ResearchingMaterialProductivity = 'researching_material_productivity',
    ResearchingTechnology = 'researching_technology',
    ResearchingTimeProductivity = 'researching_time_productivity',
    ResourceWarsReward = 'resource_wars_reward',
    ReverseEngineering = 'reverse_engineering',
    SecurityProcessingFee = 'security_processing_fee',
    Shares = 'shares',
    SkillPurchase = 'skill_purchase',
    SovereignityBill = 'sovereignity_bill',
    StorePurchase = 'store_purchase',
    StorePurchaseRefund = 'store_purchase_refund',
    StructureGateJump = 'structure_gate_jump',
    TransactionTax = 'transaction_tax',
    UpkeepAdjustmentFee = 'upkeep_adjustment_fee',
    WarAllyContract = 'war_ally_contract',
    WarFee = 'war_fee',
    WarFeeSurrender = 'war_fee_surrender'
}


