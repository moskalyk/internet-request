import Internet, { ArgumentSchema } from './index';

const ApiKey = '';

(async () => {
  console.log('Running API Tests...');

  // Test for GetEtherBalance
  try {
    const requestPayload: ArgumentSchema = { 
        chainID: 'mainnet',
        accountAddress: '' 
    }

    const result = await Internet.request('GetEtherBalance', requestPayload, ApiKey);
    console.log('GetEtherBalance Response:', result);
  } catch (error) {
    console.error('GetEtherBalance Test Failed:', error);
  }

  // Test for SubscribeEvents
//   try {
//     const requestPayload = {
//       accounts: [''],
//       contractAddresses: [''],
//       events: ['Transfer(address indexed from, address indexed to, uint256 indexed tokenId)', 'Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)'],
//       tokenIDs: ['0'],
//     };

//     const result = await Call.request('SubscribeEvents', requestPayload, apiKey);
//     console.log('SubscribeEvents Response:', result);

//     if (result && result.subscriptionId) {
//       console.log('SubscribeEvents Test Passed');
//     } else {
//       console.error('SubscribeEvents Test Failed: Unexpected response format', result);
//     }
//   } catch (error) {
//     console.error('SubscribeEvents Test Failed:', error);
//   }
})();
