import fetch from 'node-fetch';

export interface ArgumentSchema {
  chainID: string;

  // For GetEtherBalance
  accountAddress?: string;

  // For Events
  events?: Array<string>;
  contractAddresses?: Array<string>;
  accounts?: Array<string>;
  tokenIDs?: Array<string>;
}

class Internet {
  private baseURL = 'https://{chainID}-indexer.sequence.app/rpc/Indexer';

  async request(path: string, requestSchema: ArgumentSchema, apiKey: string) {
    // Replace {chainID} in the baseURL with the actual chainID from the requestSchema
    const url = `${this.baseURL.replace('{chainID}', requestSchema.chainID)}/${path}`;
    let body = {};

    if (requestSchema.accountAddress) {
      // Case for GetEtherBalance
      body = {
        accountAddress: requestSchema.accountAddress,
      };
    } else {
      // Case for SubscribeEvents
      body = {
        filter: {
          accounts: requestSchema.accounts || [],
          contractAddresses: requestSchema.contractAddresses || [],
          events: requestSchema.events || [],
          tokenIDs: requestSchema.tokenIDs || [],
        },
      };
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Access-Key': apiKey,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Request failed:', error);
      throw error;
    }
  }
}

export default new Internet();
