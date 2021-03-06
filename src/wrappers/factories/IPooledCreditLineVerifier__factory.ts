/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';

import type { IPooledCreditLineVerifier } from '../IPooledCreditLineVerifier';

export class IPooledCreditLineVerifier__factory {
  static connect(address: string, signerOrProvider: Signer | Provider): IPooledCreditLineVerifier {
    return new Contract(address, _abi, signerOrProvider) as IPooledCreditLineVerifier;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'isUser',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
