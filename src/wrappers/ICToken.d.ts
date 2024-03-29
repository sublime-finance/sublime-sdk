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
  Overrides,
  CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import { TypedEventFilter, TypedEvent, TypedListener } from './commons';

interface ICTokenInterface extends ethers.utils.Interface {
  functions: {
    'balanceOfUnderlying(address)': FunctionFragment;
    'comptroller()': FunctionFragment;
    'exchangeRateCurrent()': FunctionFragment;
    'getCash()': FunctionFragment;
    'mint(uint256)': FunctionFragment;
    'redeem(uint256)': FunctionFragment;
    'supplyRatePerBlock()': FunctionFragment;
    'underlying()': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'balanceOfUnderlying', values: [string]): string;
  encodeFunctionData(functionFragment: 'comptroller', values?: undefined): string;
  encodeFunctionData(functionFragment: 'exchangeRateCurrent', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getCash', values?: undefined): string;
  encodeFunctionData(functionFragment: 'mint', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'redeem', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'supplyRatePerBlock', values?: undefined): string;
  encodeFunctionData(functionFragment: 'underlying', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'balanceOfUnderlying', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'comptroller', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'exchangeRateCurrent', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getCash', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'redeem', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'supplyRatePerBlock', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'underlying', data: BytesLike): Result;

  events: {};
}

export class ICToken extends Contract {
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

  interface: ICTokenInterface;

  functions: {
    balanceOfUnderlying(account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'balanceOfUnderlying(address)'(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    comptroller(overrides?: CallOverrides): Promise<[string]>;

    'comptroller()'(overrides?: CallOverrides): Promise<[string]>;

    exchangeRateCurrent(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'exchangeRateCurrent()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    getCash(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'getCash()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    mint(mintAmount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'mint(uint256)'(mintAmount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    redeem(redeemTokens: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'redeem(uint256)'(
      redeemTokens: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supplyRatePerBlock(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'supplyRatePerBlock()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    underlying(overrides?: CallOverrides): Promise<[string]>;

    'underlying()'(overrides?: CallOverrides): Promise<[string]>;
  };

  balanceOfUnderlying(account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'balanceOfUnderlying(address)'(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  comptroller(overrides?: CallOverrides): Promise<string>;

  'comptroller()'(overrides?: CallOverrides): Promise<string>;

  exchangeRateCurrent(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'exchangeRateCurrent()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  getCash(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'getCash()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  mint(mintAmount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'mint(uint256)'(mintAmount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  redeem(redeemTokens: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'redeem(uint256)'(redeemTokens: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  supplyRatePerBlock(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'supplyRatePerBlock()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  underlying(overrides?: CallOverrides): Promise<string>;

  'underlying()'(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    balanceOfUnderlying(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    'balanceOfUnderlying(address)'(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    comptroller(overrides?: CallOverrides): Promise<string>;

    'comptroller()'(overrides?: CallOverrides): Promise<string>;

    exchangeRateCurrent(overrides?: CallOverrides): Promise<BigNumber>;

    'exchangeRateCurrent()'(overrides?: CallOverrides): Promise<BigNumber>;

    getCash(overrides?: CallOverrides): Promise<BigNumber>;

    'getCash()'(overrides?: CallOverrides): Promise<BigNumber>;

    mint(mintAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    'mint(uint256)'(mintAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    redeem(redeemTokens: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    'redeem(uint256)'(redeemTokens: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    supplyRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    'supplyRatePerBlock()'(overrides?: CallOverrides): Promise<BigNumber>;

    underlying(overrides?: CallOverrides): Promise<string>;

    'underlying()'(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    balanceOfUnderlying(account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'balanceOfUnderlying(address)'(account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    comptroller(overrides?: CallOverrides): Promise<BigNumber>;

    'comptroller()'(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeRateCurrent(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'exchangeRateCurrent()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    getCash(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'getCash()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    mint(mintAmount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'mint(uint256)'(mintAmount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    redeem(redeemTokens: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'redeem(uint256)'(redeemTokens: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    supplyRatePerBlock(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'supplyRatePerBlock()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    underlying(overrides?: CallOverrides): Promise<BigNumber>;

    'underlying()'(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOfUnderlying(account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    'balanceOfUnderlying(address)'(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    comptroller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'comptroller()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exchangeRateCurrent(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    'exchangeRateCurrent()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    getCash(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    'getCash()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    mint(mintAmount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    'mint(uint256)'(mintAmount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    redeem(redeemTokens: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    'redeem(uint256)'(
      redeemTokens: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supplyRatePerBlock(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    'supplyRatePerBlock()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'underlying()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
