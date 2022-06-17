import { ChainlinkInternalMap } from '../types/Types';

const rinkebyMapping: ChainlinkInternalMap[] = [
  {
    tokenAddress: '0xc778417e063141139fce010982780140aa0cd5ab',
    feedAddress: '0x8A753747A1Fa494EC906cE90E9f37563A8AF630e',
  },
  {
    feedAddress: '0x2bA49Aaa16E6afD2a993473cfB70Fa8559B523cF',
    tokenAddress: '0x6a9865ade2b6207daac49f8bcba9705deb0b0e6d',
  },
];
const kovanMapping: ChainlinkInternalMap[] = [];
const mainnetMapping: ChainlinkInternalMap[] = [];

export const feedData: ChainlinkInternalMap[] = [...rinkebyMapping, ...kovanMapping, ...mainnetMapping].map((a) => {
  return {
    tokenAddress: a.tokenAddress.toLowerCase(),
    feedAddress: a.feedAddress.toLowerCase(),
  };
});
