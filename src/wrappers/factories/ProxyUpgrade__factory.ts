/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';

import type { ProxyUpgrade } from '../ProxyUpgrade';

export class ProxyUpgrade__factory {
  static connect(address: string, signerOrProvider: Signer | Provider): ProxyUpgrade {
    return new Contract(address, _abi, signerOrProvider) as ProxyUpgrade;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
