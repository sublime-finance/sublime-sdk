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
  PayableOverrides,
  CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import { TypedEventFilter, TypedEvent, TypedListener } from './commons';

interface IWETHGatewayInterface extends ethers.utils.Interface {
  functions: {
    'depositETH(address,address,uint16)': FunctionFragment;
    'getAWETHAddress()': FunctionFragment;
    'getLendingPoolAddress()': FunctionFragment;
    'getWETHAddress()': FunctionFragment;
    'withdrawETH(uint256,address)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'depositETH', values: [string, string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'getAWETHAddress', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getLendingPoolAddress', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getWETHAddress', values?: undefined): string;
  encodeFunctionData(functionFragment: 'withdrawETH', values: [BigNumberish, string]): string;

  decodeFunctionResult(functionFragment: 'depositETH', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAWETHAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getLendingPoolAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getWETHAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawETH', data: BytesLike): Result;

  events: {};
}

export class IWETHGateway extends Contract {
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

  interface: IWETHGatewayInterface;

  functions: {
    depositETH(
      lendingPool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'depositETH(address,address,uint16)'(
      lendingPool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAWETHAddress(overrides?: CallOverrides): Promise<[string]>;

    'getAWETHAddress()'(overrides?: CallOverrides): Promise<[string]>;

    getLendingPoolAddress(overrides?: CallOverrides): Promise<[string]>;

    'getLendingPoolAddress()'(overrides?: CallOverrides): Promise<[string]>;

    getWETHAddress(overrides?: CallOverrides): Promise<[string]>;

    'getWETHAddress()'(overrides?: CallOverrides): Promise<[string]>;

    withdrawETH(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'withdrawETH(uint256,address)'(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  depositETH(
    lendingPool: string,
    onBehalfOf: string,
    referralCode: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'depositETH(address,address,uint16)'(
    lendingPool: string,
    onBehalfOf: string,
    referralCode: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAWETHAddress(overrides?: CallOverrides): Promise<string>;

  'getAWETHAddress()'(overrides?: CallOverrides): Promise<string>;

  getLendingPoolAddress(overrides?: CallOverrides): Promise<string>;

  'getLendingPoolAddress()'(overrides?: CallOverrides): Promise<string>;

  getWETHAddress(overrides?: CallOverrides): Promise<string>;

  'getWETHAddress()'(overrides?: CallOverrides): Promise<string>;

  withdrawETH(amount: BigNumberish, to: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'withdrawETH(uint256,address)'(
    amount: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    depositETH(lendingPool: string, onBehalfOf: string, referralCode: BigNumberish, overrides?: CallOverrides): Promise<void>;

    'depositETH(address,address,uint16)'(
      lendingPool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getAWETHAddress(overrides?: CallOverrides): Promise<string>;

    'getAWETHAddress()'(overrides?: CallOverrides): Promise<string>;

    getLendingPoolAddress(overrides?: CallOverrides): Promise<string>;

    'getLendingPoolAddress()'(overrides?: CallOverrides): Promise<string>;

    getWETHAddress(overrides?: CallOverrides): Promise<string>;

    'getWETHAddress()'(overrides?: CallOverrides): Promise<string>;

    withdrawETH(amount: BigNumberish, to: string, overrides?: CallOverrides): Promise<void>;

    'withdrawETH(uint256,address)'(amount: BigNumberish, to: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    depositETH(
      lendingPool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'depositETH(address,address,uint16)'(
      lendingPool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAWETHAddress(overrides?: CallOverrides): Promise<BigNumber>;

    'getAWETHAddress()'(overrides?: CallOverrides): Promise<BigNumber>;

    getLendingPoolAddress(overrides?: CallOverrides): Promise<BigNumber>;

    'getLendingPoolAddress()'(overrides?: CallOverrides): Promise<BigNumber>;

    getWETHAddress(overrides?: CallOverrides): Promise<BigNumber>;

    'getWETHAddress()'(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawETH(amount: BigNumberish, to: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'withdrawETH(uint256,address)'(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    depositETH(
      lendingPool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'depositETH(address,address,uint16)'(
      lendingPool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAWETHAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'getAWETHAddress()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLendingPoolAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'getLendingPoolAddress()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getWETHAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'getWETHAddress()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawETH(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'withdrawETH(uint256,address)'(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
