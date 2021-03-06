/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';

import type { DeployUtils } from '../DeployUtils';

export class DeployUtils__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<DeployUtils> {
    return super.deploy(overrides || {}) as Promise<DeployUtils>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DeployUtils {
    return super.attach(address) as DeployUtils;
  }
  connect(signer: Signer): DeployUtils__factory {
    return super.connect(signer) as DeployUtils__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DeployUtils {
    return new Contract(address, _abi, signerOrProvider) as DeployUtils;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'log',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'log_address',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'log_bytes',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'log_bytes32',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'int256',
        name: '',
        type: 'int256',
      },
    ],
    name: 'log_int',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'key',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'val',
        type: 'address',
      },
    ],
    name: 'log_named_address',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'key',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'val',
        type: 'bytes',
      },
    ],
    name: 'log_named_bytes',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'key',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'val',
        type: 'bytes32',
      },
    ],
    name: 'log_named_bytes32',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'key',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'val',
        type: 'int256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'decimals',
        type: 'uint256',
      },
    ],
    name: 'log_named_decimal_int',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'key',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'val',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'decimals',
        type: 'uint256',
      },
    ],
    name: 'log_named_decimal_uint',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'key',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'val',
        type: 'int256',
      },
    ],
    name: 'log_named_int',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'key',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'val',
        type: 'string',
      },
    ],
    name: 'log_named_string',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'key',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'val',
        type: 'uint256',
      },
    ],
    name: 'log_named_uint',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'log_string',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'log_uint',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'logs',
    type: 'event',
  },
  {
    inputs: [],
    name: 'IS_TEST',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'failed',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040526000805460ff19166001179055348015601c57600080fd5b5060a48061002b6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063ba414fa6146037578063fa7626d4146051575b600080fd5b603d6057565b604080519115158252519081900360200190f35b603d6065565b600054610100900460ff1681565b60005460ff168156fea2646970667358221220635ee008f6b6c448c2a967d025883dbb7270073312fb26a0945d3b049624b90364736f6c63430007060033';
