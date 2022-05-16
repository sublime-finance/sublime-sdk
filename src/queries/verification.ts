import { query } from '../utils/subgraph';
import axios from 'axios';
import { UserTwitterDetails } from 'types/Types';

const sublimeVerifierUrl = 'https://sublime-twitter-fetch-userinfobyid.saxenism.workers.dev/?twitterID=';

export async function getTwitterId(url, address: string): Promise<any[]> {
  // TODO: Update queries to use graphql variables instead
  // TODO: Support pagination for the case when number of tokens goes above 1000 😅

  address = address.toLowerCase();
  const queryData = JSON.stringify({
    query: `{
  userProfiles(where : {id : "${address}"}) {
    userMetadataPerVerifier {
      id
      metadata
    }
  }
}
`,
  });

  const data = await query(url, queryData);
  // return data.userProfiles;
  if (data.userProfiles.length > 0) {
    return data.userProfiles[0].userMetadataPerVerifier;
  } else {
    return [];
  }
}

export async function getUserMetadata(url, address: string): Promise<any[]> {
  // TODO: Update queries to use graphql variables instead
  // TODO: Support pagination for the case when number of tokens goes above 1000 😅

  address = address.toLowerCase();
  const queryData = JSON.stringify({
    query: `{
  userProfiles(where : {id : "${address}"}) {
    userMetadataPerVerifier {
      id,
      verifier,
      metadata,
      verifiedBy{
        id
        status
      }
    }
  }
}
`,
  });

  const data = await query(url, queryData);
  // return data.userProfiles;
  if (data.userProfiles.length > 0) {
    return data.userProfiles[0].userMetadataPerVerifier;
  } else {
    return [];
  }
}

export default async function twitterDp(twtID: string): Promise<UserTwitterDetails> {
  try {
    const response = await axios.get(sublimeVerifierUrl + twtID);
    const data = JSON.parse(response.data);
    return {
      profilePic: data.profilePic,
      name: data.name,
      twitterId: data.twitterId,
      tweetId: twtID,
    };
  } catch (ex) {
    console.log(ex);
    return {
      profilePic: undefined,
      name: undefined,
      twitterId: undefined,
      tweetId: twtID,
    };
  }
}
// twitterDp('a tweet id').then(console.log);
