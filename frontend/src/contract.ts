import { openContractCall } from '@stacks/connect';

const contractAddress = "YOUR_CONTRACT_ADDRESS";
const contractName = "token-sender";

export const depositTokens = async (amount: number) => {
  await openContractCall({
    contractAddress,
    contractName,
    functionName: 'deposit',
    functionArgs: [amount]
  });
};

export const sendTokens = async (to: string, amount: number) => {
  await openContractCall({
    contractAddress,
    contractName,
    functionName: 'send-tokens',
    functionArgs: [to, amount]
  });
};
