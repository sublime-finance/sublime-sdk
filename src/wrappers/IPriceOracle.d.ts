/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import { TypedEventFilter, TypedEvent, TypedListener } from './commons';

interface IPriceOracleInterface extends ethers.utils.Interface {
  functions: {
    'doesFeedExist(address,address)': FunctionFragment;
    'getLatestPrice(address,address)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'doesFeedExist', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'getLatestPrice', values: [string, string]): string;

  decodeFunctionResult(functionFragment: 'doesFeedExist', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getLatestPrice', data: BytesLike): Result;

  events: {
    'ChainlinkFeedUpdated(address,address)': EventFragment;
    'UniswapFeedUpdated(address,address,bytes32,address)': EventFragment;
    'UniswapPriceAveragingPeriodUpdated(uint32)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'ChainlinkFeedUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UniswapFeedUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UniswapPriceAveragingPeriodUpdated'): EventFragment;
}

export class IPriceOracle extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IPriceOracleInterface;

  functions: {
    doesFeedExist(token1: string, token2: string, overrides?: CallOverrides): Promise<[boolean] & { feedExists: boolean }>;

    'doesFeedExist(address,address)'(
      token1: string,
      token2: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { feedExists: boolean }>;

    getLatestPrice(
      num: string,
      den: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { price: BigNumber; decimals: BigNumber }>;

    'getLatestPrice(address,address)'(
      num: string,
      den: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { price: BigNumber; decimals: BigNumber }>;
  };

  doesFeedExist(token1: string, token2: string, overrides?: CallOverrides): Promise<boolean>;

  'doesFeedExist(address,address)'(token1: string, token2: string, overrides?: CallOverrides): Promise<boolean>;

  getLatestPrice(
    num: string,
    den: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { price: BigNumber; decimals: BigNumber }>;

  'getLatestPrice(address,address)'(
    num: string,
    den: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { price: BigNumber; decimals: BigNumber }>;

  callStatic: {
    doesFeedExist(token1: string, token2: string, overrides?: CallOverrides): Promise<boolean>;

    'doesFeedExist(address,address)'(token1: string, token2: string, overrides?: CallOverrides): Promise<boolean>;

    getLatestPrice(
      num: string,
      den: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { price: BigNumber; decimals: BigNumber }>;

    'getLatestPrice(address,address)'(
      num: string,
      den: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { price: BigNumber; decimals: BigNumber }>;
  };

  filters: {
    ChainlinkFeedUpdated(
      token: string | null,
      priceOracle: string | null
    ): TypedEventFilter<[string, string], { token: string; priceOracle: string }>;

    UniswapFeedUpdated(
      token1: string | null,
      token2: string | null,
      feedId: null,
      pool: string | null
    ): TypedEventFilter<[string, string, string, string], { token1: string; token2: string; feedId: string; pool: string }>;

    UniswapPriceAveragingPeriodUpdated(
      uniswapPriceAveragingPeriod: null
    ): TypedEventFilter<[number], { uniswapPriceAveragingPeriod: number }>;
  };

  estimateGas: {
    doesFeedExist(token1: string, token2: string, overrides?: CallOverrides): Promise<BigNumber>;

    'doesFeedExist(address,address)'(token1: string, token2: string, overrides?: CallOverrides): Promise<BigNumber>;

    getLatestPrice(num: string, den: string, overrides?: CallOverrides): Promise<BigNumber>;

    'getLatestPrice(address,address)'(num: string, den: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    doesFeedExist(token1: string, token2: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'doesFeedExist(address,address)'(token1: string, token2: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLatestPrice(num: string, den: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'getLatestPrice(address,address)'(num: string, den: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}