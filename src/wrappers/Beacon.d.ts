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

interface BeaconInterface extends ethers.utils.Interface {
  functions: {
    'changeImpl(address)': FunctionFragment;
    'impl()': FunctionFragment;
    'implementation()': FunctionFragment;
    'owner()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'changeImpl', values: [string]): string;
  encodeFunctionData(functionFragment: 'impl', values?: undefined): string;
  encodeFunctionData(functionFragment: 'implementation', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;

  decodeFunctionResult(functionFragment: 'changeImpl', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'impl', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'implementation', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;

  events: {
    'OwnershipTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}

export class Beacon extends Contract {
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

  interface: BeaconInterface;

  functions: {
    changeImpl(_newImpl: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'changeImpl(address)'(_newImpl: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    impl(overrides?: CallOverrides): Promise<[string]>;

    'impl()'(overrides?: CallOverrides): Promise<[string]>;

    implementation(overrides?: CallOverrides): Promise<[string]>;

    'implementation()'(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    'owner()'(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'renounceOwnership()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    transferOwnership(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  changeImpl(_newImpl: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'changeImpl(address)'(_newImpl: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  impl(overrides?: CallOverrides): Promise<string>;

  'impl()'(overrides?: CallOverrides): Promise<string>;

  implementation(overrides?: CallOverrides): Promise<string>;

  'implementation()'(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  'owner()'(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'renounceOwnership()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  transferOwnership(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'transferOwnership(address)'(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  callStatic: {
    changeImpl(_newImpl: string, overrides?: CallOverrides): Promise<void>;

    'changeImpl(address)'(_newImpl: string, overrides?: CallOverrides): Promise<void>;

    impl(overrides?: CallOverrides): Promise<string>;

    'impl()'(overrides?: CallOverrides): Promise<string>;

    implementation(overrides?: CallOverrides): Promise<string>;

    'implementation()'(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    'owner()'(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    'renounceOwnership()'(overrides?: CallOverrides): Promise<void>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    'transferOwnership(address)'(newOwner: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<[string, string], { previousOwner: string; newOwner: string }>;
  };

  estimateGas: {
    changeImpl(_newImpl: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'changeImpl(address)'(_newImpl: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    impl(overrides?: CallOverrides): Promise<BigNumber>;

    'impl()'(overrides?: CallOverrides): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    'implementation()'(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    'owner()'(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'renounceOwnership()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    transferOwnership(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'transferOwnership(address)'(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;
  };

  populateTransaction: {
    changeImpl(_newImpl: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    'changeImpl(address)'(_newImpl: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    impl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'impl()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'implementation()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'owner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    'renounceOwnership()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    transferOwnership(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}