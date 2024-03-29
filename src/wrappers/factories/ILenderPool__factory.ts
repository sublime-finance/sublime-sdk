/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';

import type { ILenderPool } from '../ILenderPool';

export class ILenderPool__factory {
  static connect(address: string, signerOrProvider: Signer | Provider): ILenderPool {
    return new Contract(address, _abi, signerOrProvider) as ILenderPool;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'lenderAddress',
        type: 'address',
      },
    ],
    name: 'LiquidityWithdrawn',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_sharesBorrowed',
        type: 'uint256',
      },
    ],
    name: 'borrowed',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_verifier',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_strategy',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_borrowLimit',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minBorrowAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_collectionPeriod',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_areTokensTransferable',
        type: 'bool',
      },
    ],
    name: 'create',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_sharesRepaid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_interestShares',
        type: 'uint256',
      },
    ],
    name: 'repaid',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
    ],
    name: 'requestCancelled',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
    ],
    name: 'start',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
    ],
    name: 'terminate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
