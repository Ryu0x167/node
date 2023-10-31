// @generated by protoc-gen-es v1.3.0 with parameter "target=dts"
// @generated from file emissions/query.proto (package zetachain.zetacore.emissions, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Params } from "./params_pb.js";

/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message zetachain.zetacore.emissions.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.emissions.QueryParamsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;

  static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from message zetachain.zetacore.emissions.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params holds all the parameters of this module.
   *
   * @generated from field: zetachain.zetacore.emissions.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.emissions.QueryParamsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;

  static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}

/**
 * @generated from message zetachain.zetacore.emissions.QueryListPoolAddressesRequest
 */
export declare class QueryListPoolAddressesRequest extends Message<QueryListPoolAddressesRequest> {
  constructor(data?: PartialMessage<QueryListPoolAddressesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.emissions.QueryListPoolAddressesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryListPoolAddressesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryListPoolAddressesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryListPoolAddressesRequest;

  static equals(a: QueryListPoolAddressesRequest | PlainMessage<QueryListPoolAddressesRequest> | undefined, b: QueryListPoolAddressesRequest | PlainMessage<QueryListPoolAddressesRequest> | undefined): boolean;
}

/**
 * @generated from message zetachain.zetacore.emissions.QueryListPoolAddressesResponse
 */
export declare class QueryListPoolAddressesResponse extends Message<QueryListPoolAddressesResponse> {
  /**
   * @generated from field: string undistributed_observer_balances_address = 1;
   */
  undistributedObserverBalancesAddress: string;

  /**
   * @generated from field: string undistributed_tss_balances_address = 2;
   */
  undistributedTssBalancesAddress: string;

  /**
   * @generated from field: string emission_module_address = 3;
   */
  emissionModuleAddress: string;

  constructor(data?: PartialMessage<QueryListPoolAddressesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.emissions.QueryListPoolAddressesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryListPoolAddressesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryListPoolAddressesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryListPoolAddressesResponse;

  static equals(a: QueryListPoolAddressesResponse | PlainMessage<QueryListPoolAddressesResponse> | undefined, b: QueryListPoolAddressesResponse | PlainMessage<QueryListPoolAddressesResponse> | undefined): boolean;
}

/**
 * @generated from message zetachain.zetacore.emissions.QueryGetEmissionsFactorsRequest
 */
export declare class QueryGetEmissionsFactorsRequest extends Message<QueryGetEmissionsFactorsRequest> {
  constructor(data?: PartialMessage<QueryGetEmissionsFactorsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.emissions.QueryGetEmissionsFactorsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetEmissionsFactorsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetEmissionsFactorsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetEmissionsFactorsRequest;

  static equals(a: QueryGetEmissionsFactorsRequest | PlainMessage<QueryGetEmissionsFactorsRequest> | undefined, b: QueryGetEmissionsFactorsRequest | PlainMessage<QueryGetEmissionsFactorsRequest> | undefined): boolean;
}

/**
 * @generated from message zetachain.zetacore.emissions.QueryGetEmissionsFactorsResponse
 */
export declare class QueryGetEmissionsFactorsResponse extends Message<QueryGetEmissionsFactorsResponse> {
  /**
   * @generated from field: string reservesFactor = 1;
   */
  reservesFactor: string;

  /**
   * @generated from field: string bondFactor = 2;
   */
  bondFactor: string;

  /**
   * @generated from field: string durationFactor = 3;
   */
  durationFactor: string;

  constructor(data?: PartialMessage<QueryGetEmissionsFactorsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.emissions.QueryGetEmissionsFactorsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetEmissionsFactorsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetEmissionsFactorsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetEmissionsFactorsResponse;

  static equals(a: QueryGetEmissionsFactorsResponse | PlainMessage<QueryGetEmissionsFactorsResponse> | undefined, b: QueryGetEmissionsFactorsResponse | PlainMessage<QueryGetEmissionsFactorsResponse> | undefined): boolean;
}

/**
 * @generated from message zetachain.zetacore.emissions.QueryShowAvailableEmissionsRequest
 */
export declare class QueryShowAvailableEmissionsRequest extends Message<QueryShowAvailableEmissionsRequest> {
  /**
   * @generated from field: string address = 1;
   */
  address: string;

  constructor(data?: PartialMessage<QueryShowAvailableEmissionsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.emissions.QueryShowAvailableEmissionsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryShowAvailableEmissionsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryShowAvailableEmissionsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryShowAvailableEmissionsRequest;

  static equals(a: QueryShowAvailableEmissionsRequest | PlainMessage<QueryShowAvailableEmissionsRequest> | undefined, b: QueryShowAvailableEmissionsRequest | PlainMessage<QueryShowAvailableEmissionsRequest> | undefined): boolean;
}

/**
 * @generated from message zetachain.zetacore.emissions.QueryShowAvailableEmissionsResponse
 */
export declare class QueryShowAvailableEmissionsResponse extends Message<QueryShowAvailableEmissionsResponse> {
  /**
   * @generated from field: string amount = 1;
   */
  amount: string;

  constructor(data?: PartialMessage<QueryShowAvailableEmissionsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.emissions.QueryShowAvailableEmissionsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryShowAvailableEmissionsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryShowAvailableEmissionsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryShowAvailableEmissionsResponse;

  static equals(a: QueryShowAvailableEmissionsResponse | PlainMessage<QueryShowAvailableEmissionsResponse> | undefined, b: QueryShowAvailableEmissionsResponse | PlainMessage<QueryShowAvailableEmissionsResponse> | undefined): boolean;
}

