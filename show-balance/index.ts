import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import {airdrop} from "../airdrop";

export const showBalance = async (publicKey: PublicKey) => {
  const connection = new Connection("http://localhost:8899", "confirmed");
  const response = await connection.getAccountInfo(publicKey);
  if (!response) {
    return 0; 
    console.log("requested account not found! please look for any errors.");
  }
  return response.lamports / LAMPORTS_PER_SOL;
};

showBalance(new PublicKey("H2CTBNHDFqa5KQ4MNNejS7msQ6DF95116jSkUvgfqUXj"));

(async () => {
  const publicKey = "H2CTBNHDFqa5KQ4MNNejS7msQ6DF95116jSkUvgfqUXj";
  const balance = await showBalance(new PublicKey(publicKey));
  console.log(`\nBalance for address: ${publicKey} is ${balance} SOL`);
  await airdrop(publicKey, 4);
  const updatedBalance = await showBalance(new PublicKey(publicKey));
  console.log(`\nBalance for address: ${publicKey} is ${updatedBalance} SOL`);
})();
// Path: show-balance\index.ts