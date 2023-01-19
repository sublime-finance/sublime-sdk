/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';

import type { GovernanceTester } from '../GovernanceTester';

export class GovernanceTester__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_gov: string, _val: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<GovernanceTester> {
    return super.deploy(_gov, _val, overrides || {}) as Promise<GovernanceTester>;
  }
  getDeployTransaction(_gov: string, _val: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(_gov, _val, overrides || {});
  }
  attach(address: string): GovernanceTester {
    return super.attach(address) as GovernanceTester;
  }
  connect(signer: Signer): GovernanceTester__factory {
    return super.connect(signer) as GovernanceTester__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): GovernanceTester {
    return new Contract(address, _abi, signerOrProvider) as GovernanceTester;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_gov',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_val',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'governance',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'v',
        type: 'uint256',
      },
    ],
    name: 'valueUpdated',
    type: 'event',
  },
  {
    inputs: [],
    name: 'gov',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
    ],
    name: 'update',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'value',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b506040516101ef3803806101ef8339818101604052604081101561003357600080fd5b508051602090910151600080546001600160a01b0319166001600160a01b0390931692909217825560015561018190819061006e90396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806312d43a51146100465780633fa4f2451461006a57806382ab890a14610084575b600080fd5b61004e6100a3565b604080516001600160a01b039092168252519081900360200190f35b6100726100b2565b60408051918252519081900360200190f35b6100a16004803603602081101561009a57600080fd5b50356100b8565b005b6000546001600160a01b031681565b60015481565b6000546001600160a01b03163314610100576040805162461bcd60e51b815260206004820152600660248201526547543a4f473160d01b604482015290519081900360640190fd5b600181905560005460408051838152905133926001600160a01b0316917f1736b6648b1e227e5303acca50ca7c142032c67a4a45b8210cbae05e9e6358cc919081900360200190a35056fea264697066735822122033cf7f7ae8df5fd2aeffe30db69c18fd938c0d3bcd83b20a9be11363b181e60864736f6c63430007060033';