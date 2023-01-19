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

interface VerificationInterface extends ethers.utils.Interface {
  functions: {
    'activationDelay()': FunctionFragment;
    'addVerifier(address)': FunctionFragment;
    'cancelAddressLinkingRequest(address)': FunctionFragment;
    'initialize(address,uint256)': FunctionFragment;
    'isUser(address,address)': FunctionFragment;
    'linkAddress(address)': FunctionFragment;
    'linkedAddresses(address)': FunctionFragment;
    'masterAddresses(address,address)': FunctionFragment;
    'owner()': FunctionFragment;
    'pendingLinkAddresses(address,address)': FunctionFragment;
    'registerMasterAddress(address,bool)': FunctionFragment;
    'removeVerifier(address)': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'requestAddressLinking(address)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'unlinkAddress(address)': FunctionFragment;
    'unregisterMasterAddress(address,address)': FunctionFragment;
    'updateActivationDelay(uint256)': FunctionFragment;
    'verifiers(address)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'activationDelay', values?: undefined): string;
  encodeFunctionData(functionFragment: 'addVerifier', values: [string]): string;
  encodeFunctionData(functionFragment: 'cancelAddressLinkingRequest', values: [string]): string;
  encodeFunctionData(functionFragment: 'initialize', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'isUser', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'linkAddress', values: [string]): string;
  encodeFunctionData(functionFragment: 'linkedAddresses', values: [string]): string;
  encodeFunctionData(functionFragment: 'masterAddresses', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pendingLinkAddresses', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'registerMasterAddress', values: [string, boolean]): string;
  encodeFunctionData(functionFragment: 'removeVerifier', values: [string]): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'requestAddressLinking', values: [string]): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
  encodeFunctionData(functionFragment: 'unlinkAddress', values: [string]): string;
  encodeFunctionData(functionFragment: 'unregisterMasterAddress', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'updateActivationDelay', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'verifiers', values: [string]): string;

  decodeFunctionResult(functionFragment: 'activationDelay', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addVerifier', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'cancelAddressLinkingRequest', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isUser', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'linkAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'linkedAddresses', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'masterAddresses', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pendingLinkAddresses', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'registerMasterAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'removeVerifier', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'requestAddressLinking', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'unlinkAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'unregisterMasterAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateActivationDelay', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'verifiers', data: BytesLike): Result;

  events: {
    'ActivationDelayUpdated(uint256)': EventFragment;
    'AddressLinked(address,address,uint256)': EventFragment;
    'AddressLinkingRequestCancelled(address,address)': EventFragment;
    'AddressLinkingRequested(address,address)': EventFragment;
    'AddressUnlinked(address,address)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'UserRegistered(address,address,uint256)': EventFragment;
    'UserUnregistered(address,address,address)': EventFragment;
    'VerifierAdded(address)': EventFragment;
    'VerifierRemoved(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'ActivationDelayUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AddressLinked'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AddressLinkingRequestCancelled'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AddressLinkingRequested'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AddressUnlinked'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UserRegistered'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UserUnregistered'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'VerifierAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'VerifierRemoved'): EventFragment;
}

export class Verification extends Contract {
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

  interface: VerificationInterface;

  functions: {
    activationDelay(overrides?: CallOverrides): Promise<[BigNumber]>;

    'activationDelay()'(overrides?: CallOverrides): Promise<[BigNumber]>;

    addVerifier(_verifier: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'addVerifier(address)'(_verifier: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    cancelAddressLinkingRequest(
      _linkedAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'cancelAddressLinkingRequest(address)'(
      _linkedAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _admin: string,
      _activationDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'initialize(address,uint256)'(
      _admin: string,
      _activationDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isUser(_user: string, _verifier: string, overrides?: CallOverrides): Promise<[boolean]>;

    'isUser(address,address)'(_user: string, _verifier: string, overrides?: CallOverrides): Promise<[boolean]>;

    linkAddress(_masterAddress: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'linkAddress(address)'(
      _masterAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    linkedAddresses(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { activatesAt: BigNumber; masterAddress: string }>;

    'linkedAddresses(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { activatesAt: BigNumber; masterAddress: string }>;

    masterAddresses(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    'masterAddresses(address,address)'(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    'owner()'(overrides?: CallOverrides): Promise<[string]>;

    pendingLinkAddresses(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[boolean]>;

    'pendingLinkAddresses(address,address)'(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[boolean]>;

    registerMasterAddress(
      _masterAddress: string,
      _isMasterLinked: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'registerMasterAddress(address,bool)'(
      _masterAddress: string,
      _isMasterLinked: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeVerifier(_verifier: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'removeVerifier(address)'(_verifier: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'renounceOwnership()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    requestAddressLinking(
      _linkedAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'requestAddressLinking(address)'(
      _linkedAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unlinkAddress(_linkedAddress: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'unlinkAddress(address)'(
      _linkedAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unregisterMasterAddress(
      _masterAddress: string,
      _verifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'unregisterMasterAddress(address,address)'(
      _masterAddress: string,
      _verifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateActivationDelay(
      _activationDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'updateActivationDelay(uint256)'(
      _activationDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    verifiers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    'verifiers(address)'(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
  };

  activationDelay(overrides?: CallOverrides): Promise<BigNumber>;

  'activationDelay()'(overrides?: CallOverrides): Promise<BigNumber>;

  addVerifier(_verifier: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'addVerifier(address)'(_verifier: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  cancelAddressLinkingRequest(
    _linkedAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'cancelAddressLinkingRequest(address)'(
    _linkedAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _admin: string,
    _activationDelay: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'initialize(address,uint256)'(
    _admin: string,
    _activationDelay: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isUser(_user: string, _verifier: string, overrides?: CallOverrides): Promise<boolean>;

  'isUser(address,address)'(_user: string, _verifier: string, overrides?: CallOverrides): Promise<boolean>;

  linkAddress(_masterAddress: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'linkAddress(address)'(_masterAddress: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  linkedAddresses(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string] & { activatesAt: BigNumber; masterAddress: string }>;

  'linkedAddresses(address)'(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string] & { activatesAt: BigNumber; masterAddress: string }>;

  masterAddresses(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

  'masterAddresses(address,address)'(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  'owner()'(overrides?: CallOverrides): Promise<string>;

  pendingLinkAddresses(arg0: string, arg1: string, overrides?: CallOverrides): Promise<boolean>;

  'pendingLinkAddresses(address,address)'(arg0: string, arg1: string, overrides?: CallOverrides): Promise<boolean>;

  registerMasterAddress(
    _masterAddress: string,
    _isMasterLinked: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'registerMasterAddress(address,bool)'(
    _masterAddress: string,
    _isMasterLinked: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeVerifier(_verifier: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'removeVerifier(address)'(_verifier: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'renounceOwnership()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  requestAddressLinking(_linkedAddress: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'requestAddressLinking(address)'(
    _linkedAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'transferOwnership(address)'(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  unlinkAddress(_linkedAddress: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'unlinkAddress(address)'(
    _linkedAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unregisterMasterAddress(
    _masterAddress: string,
    _verifier: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'unregisterMasterAddress(address,address)'(
    _masterAddress: string,
    _verifier: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateActivationDelay(
    _activationDelay: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'updateActivationDelay(uint256)'(
    _activationDelay: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  verifiers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  'verifiers(address)'(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    activationDelay(overrides?: CallOverrides): Promise<BigNumber>;

    'activationDelay()'(overrides?: CallOverrides): Promise<BigNumber>;

    addVerifier(_verifier: string, overrides?: CallOverrides): Promise<void>;

    'addVerifier(address)'(_verifier: string, overrides?: CallOverrides): Promise<void>;

    cancelAddressLinkingRequest(_linkedAddress: string, overrides?: CallOverrides): Promise<void>;

    'cancelAddressLinkingRequest(address)'(_linkedAddress: string, overrides?: CallOverrides): Promise<void>;

    initialize(_admin: string, _activationDelay: BigNumberish, overrides?: CallOverrides): Promise<void>;

    'initialize(address,uint256)'(_admin: string, _activationDelay: BigNumberish, overrides?: CallOverrides): Promise<void>;

    isUser(_user: string, _verifier: string, overrides?: CallOverrides): Promise<boolean>;

    'isUser(address,address)'(_user: string, _verifier: string, overrides?: CallOverrides): Promise<boolean>;

    linkAddress(_masterAddress: string, overrides?: CallOverrides): Promise<void>;

    'linkAddress(address)'(_masterAddress: string, overrides?: CallOverrides): Promise<void>;

    linkedAddresses(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { activatesAt: BigNumber; masterAddress: string }>;

    'linkedAddresses(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { activatesAt: BigNumber; masterAddress: string }>;

    masterAddresses(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

    'masterAddresses(address,address)'(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    'owner()'(overrides?: CallOverrides): Promise<string>;

    pendingLinkAddresses(arg0: string, arg1: string, overrides?: CallOverrides): Promise<boolean>;

    'pendingLinkAddresses(address,address)'(arg0: string, arg1: string, overrides?: CallOverrides): Promise<boolean>;

    registerMasterAddress(_masterAddress: string, _isMasterLinked: boolean, overrides?: CallOverrides): Promise<void>;

    'registerMasterAddress(address,bool)'(_masterAddress: string, _isMasterLinked: boolean, overrides?: CallOverrides): Promise<void>;

    removeVerifier(_verifier: string, overrides?: CallOverrides): Promise<void>;

    'removeVerifier(address)'(_verifier: string, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    'renounceOwnership()'(overrides?: CallOverrides): Promise<void>;

    requestAddressLinking(_linkedAddress: string, overrides?: CallOverrides): Promise<void>;

    'requestAddressLinking(address)'(_linkedAddress: string, overrides?: CallOverrides): Promise<void>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    'transferOwnership(address)'(newOwner: string, overrides?: CallOverrides): Promise<void>;

    unlinkAddress(_linkedAddress: string, overrides?: CallOverrides): Promise<void>;

    'unlinkAddress(address)'(_linkedAddress: string, overrides?: CallOverrides): Promise<void>;

    unregisterMasterAddress(_masterAddress: string, _verifier: string, overrides?: CallOverrides): Promise<void>;

    'unregisterMasterAddress(address,address)'(_masterAddress: string, _verifier: string, overrides?: CallOverrides): Promise<void>;

    updateActivationDelay(_activationDelay: BigNumberish, overrides?: CallOverrides): Promise<void>;

    'updateActivationDelay(uint256)'(_activationDelay: BigNumberish, overrides?: CallOverrides): Promise<void>;

    verifiers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    'verifiers(address)'(arg0: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    ActivationDelayUpdated(activationDelay: null): TypedEventFilter<[BigNumber], { activationDelay: BigNumber }>;

    AddressLinked(
      linkedAddress: string | null,
      masterAddress: string | null,
      activatesAt: null
    ): TypedEventFilter<[string, string, BigNumber], { linkedAddress: string; masterAddress: string; activatesAt: BigNumber }>;

    AddressLinkingRequestCancelled(
      linkedAddress: string | null,
      masterAddress: string | null
    ): TypedEventFilter<[string, string], { linkedAddress: string; masterAddress: string }>;

    AddressLinkingRequested(
      linkedAddress: string | null,
      masterAddress: string | null
    ): TypedEventFilter<[string, string], { linkedAddress: string; masterAddress: string }>;

    AddressUnlinked(
      linkedAddress: string | null,
      masterAddress: string | null
    ): TypedEventFilter<[string, string], { linkedAddress: string; masterAddress: string }>;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<[string, string], { previousOwner: string; newOwner: string }>;

    UserRegistered(
      masterAddress: string | null,
      verifier: string | null,
      activatesAt: null
    ): TypedEventFilter<[string, string, BigNumber], { masterAddress: string; verifier: string; activatesAt: BigNumber }>;

    UserUnregistered(
      masterAddress: string | null,
      verifier: string | null,
      unregisteredBy: string | null
    ): TypedEventFilter<[string, string, string], { masterAddress: string; verifier: string; unregisteredBy: string }>;

    VerifierAdded(verifier: string | null): TypedEventFilter<[string], { verifier: string }>;

    VerifierRemoved(verifier: string | null): TypedEventFilter<[string], { verifier: string }>;
  };

  estimateGas: {
    activationDelay(overrides?: CallOverrides): Promise<BigNumber>;

    'activationDelay()'(overrides?: CallOverrides): Promise<BigNumber>;

    addVerifier(_verifier: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'addVerifier(address)'(_verifier: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    cancelAddressLinkingRequest(_linkedAddress: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'cancelAddressLinkingRequest(address)'(
      _linkedAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _admin: string,
      _activationDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'initialize(address,uint256)'(
      _admin: string,
      _activationDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isUser(_user: string, _verifier: string, overrides?: CallOverrides): Promise<BigNumber>;

    'isUser(address,address)'(_user: string, _verifier: string, overrides?: CallOverrides): Promise<BigNumber>;

    linkAddress(_masterAddress: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'linkAddress(address)'(_masterAddress: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    linkedAddresses(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    'linkedAddresses(address)'(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    masterAddresses(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

    'masterAddresses(address,address)'(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    'owner()'(overrides?: CallOverrides): Promise<BigNumber>;

    pendingLinkAddresses(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

    'pendingLinkAddresses(address,address)'(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

    registerMasterAddress(
      _masterAddress: string,
      _isMasterLinked: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'registerMasterAddress(address,bool)'(
      _masterAddress: string,
      _isMasterLinked: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeVerifier(_verifier: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'removeVerifier(address)'(_verifier: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'renounceOwnership()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    requestAddressLinking(_linkedAddress: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'requestAddressLinking(address)'(
      _linkedAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'transferOwnership(address)'(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    unlinkAddress(_linkedAddress: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'unlinkAddress(address)'(_linkedAddress: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    unregisterMasterAddress(
      _masterAddress: string,
      _verifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'unregisterMasterAddress(address,address)'(
      _masterAddress: string,
      _verifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateActivationDelay(_activationDelay: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'updateActivationDelay(uint256)'(
      _activationDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    verifiers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    'verifiers(address)'(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    activationDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'activationDelay()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addVerifier(_verifier: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    'addVerifier(address)'(_verifier: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    cancelAddressLinkingRequest(
      _linkedAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'cancelAddressLinkingRequest(address)'(
      _linkedAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _admin: string,
      _activationDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'initialize(address,uint256)'(
      _admin: string,
      _activationDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isUser(_user: string, _verifier: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'isUser(address,address)'(_user: string, _verifier: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    linkAddress(_masterAddress: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    'linkAddress(address)'(
      _masterAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    linkedAddresses(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'linkedAddresses(address)'(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    masterAddresses(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'masterAddresses(address,address)'(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'owner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingLinkAddresses(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'pendingLinkAddresses(address,address)'(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerMasterAddress(
      _masterAddress: string,
      _isMasterLinked: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'registerMasterAddress(address,bool)'(
      _masterAddress: string,
      _isMasterLinked: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeVerifier(_verifier: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    'removeVerifier(address)'(
      _verifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    'renounceOwnership()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    requestAddressLinking(
      _linkedAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'requestAddressLinking(address)'(
      _linkedAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unlinkAddress(_linkedAddress: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    'unlinkAddress(address)'(
      _linkedAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unregisterMasterAddress(
      _masterAddress: string,
      _verifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'unregisterMasterAddress(address,address)'(
      _masterAddress: string,
      _verifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateActivationDelay(
      _activationDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'updateActivationDelay(uint256)'(
      _activationDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    verifiers(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'verifiers(address)'(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}