import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

export const airdrop = async (address: string, amount: number) => {
  try {
    const publicKey = new PublicKey(address);
    const connection = new Connection("http://localhost:8899", "confirmed");
    const signature = await connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL);
    await connection.confirmTransaction(signature);
    console.log(`\nAirdrop successful for address: ${address} of ${amount} SOL`);
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

//airdrop("H2CTBNHDFqa5KQ4MNNejS7msQ6DF95116jSkUvgfqUXj", 4);
