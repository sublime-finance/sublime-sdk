/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';

import type { IRepayment } from '../IRepayment';

export class IRepayment__factory {
  static connect(address: string, signerOrProvider: Signer | Provider): IRepayment {
    return new Contract(address, _abi, signerOrProvider) as IRepayment;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'gracePenaltyRate',
        type: 'uint256',
      },
    ],
    name: 'GracePenaltyRateUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'poolID',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'repayAmount',
        type: 'uint256',
      },
    ],
    name: 'GracePenaltyRepaid',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'gracePeriodFraction',
        type: 'uint256',
      },
    ],
    name: 'GracePeriodFractionUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'poolID',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'repayAmount',
        type: 'uint256',
      },
    ],
    name: 'InterestRepaid',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'poolID',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'repayAmount',
        type: 'uint256',
      },
    ],
    name: 'InterestRepaymentComplete',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'poolFactory',
        type: 'address',
      },
    ],
    name: 'PoolFactoryUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'poolID',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'repayAmount',
        type: 'uint256',
      },
    ],
    name: 'PrincipalRepaid',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_poolID',
        type: 'address',
      },
    ],
    name: 'didBorrowerDefault',
    outputs: [
      {
        internalType: 'bool',
        name: 'isBorrowerDefaulter',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'poolID',
        type: 'address',
      },
    ],
    name: 'getCurrentLoanInterval',
    outputs: [
      {
        internalType: 'uint256',
        name: 'scaledCurrentInterval',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getGracePeriodFraction',
    outputs: [
      {
        internalType: 'uint256',
        name: 'gracePeriod',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'poolID',
        type: 'address',
      },
    ],
    name: 'getInterestCalculationVars',
    outputs: [
      {
        internalType: 'uint256',
        name: 'loanDurationCovered',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'interestPerSecond',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_poolID',
        type: 'address',
      },
    ],
    name: 'getNextInstalmentDeadline',
    outputs: [
      {
        internalType: 'uint256',
        name: 'nextInstalmentDeadlineTimestamp',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'poolID',
        type: 'address',
      },
    ],
    name: 'getTotalRepaidAmount',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amountRepaid',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'numberOfTotalRepayments',
        type: 'uint64',
      },
      {
        internalType: 'uint256',
        name: 'repaymentInterval',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'borrowRate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'loanStartTime',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'lentAsset',
        type: 'address',
      },
    ],
    name: 'initializeRepayment',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
