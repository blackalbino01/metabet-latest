import { ethers } from "ethers";
import {
  BET_ADDRESS,
  PROVIDER,
  BET_ADDRESS2,
  PROVIDER2,
  METABET_ADDRESS,
  PRIVATE_KEY,
} from "./constants";
import MetabetMask from "./abis/MetabetMask.json";
import BEP20 from "./abis/ERC20.json";

const provider = new ethers.providers.JsonRpcProvider(PROVIDER);
const provider2 = new ethers.providers.JsonRpcProvider(PROVIDER2);
const connectedContract = new ethers.Contract(
  BET_ADDRESS,
  MetabetMask.abi,
  provider
);
const connectedContract2 = new ethers.Contract(
  BET_ADDRESS2,
  MetabetMask.abi,
  provider2
);

const EventOdd = async (id, win, token) => {
  if (token === "") {
    const Txn = await connectedContract2.getPoolTotalTeam(win, token, id);
    return Number(Txn.toString());
  }
  const Txn = await connectedContract.getPoolTotalTeam(win, token, id);
  return Number(Txn.toString());
};

const Airdrop = async (address) => {
  const signer = new ethers.Wallet(PRIVATE_KEY, provider);
  const contract = new ethers.Contract(METABET_ADDRESS, BEP20.abi, provider);

  const balance = Number(await contract.balanceOf(address));

  if(balance > 0){console.log("not eligible for airdrop"); return}
  await contract
    .connect(signer)
    .airdrop(address, ethers.utils.parseUnits("50"));
  return;
};

const MetabetBalance = async (address) => {
  const signer = new ethers.Wallet(PRIVATE_KEY, provider);
  const contract = new ethers.Contract(METABET_ADDRESS, BEP20.abi, provider);
  const balance = await contract.balanceOf(address);

  return Number(balance.toString()) / 1e18;
}

const FreeBetToken = async (address) => {
  const signer = new ethers.Wallet(PRIVATE_KEY, provider);
  const contract = new ethers.Contract(METABET_ADDRESS, BEP20.abi, provider);

  const balance = Number(await contract.balanceOf(address));
  await contract
    .connect(signer)
    .airdrop(address, ethers.utils.parseUnits("50"));
  alert("50 Metabet Token Airdropped Successfully!!!");
  return;
};

const PoolTotal = async (id, token) => {
  if (token === "") {
    const Txn = await connectedContract2.getPoolTotal(token, id);
    return Number(Txn.toString());
  }
  const Txn = await connectedContract.getPoolTotal(token, id);
  return Number(Txn.toString());
};

const PoolSize = async (id, token) => {

  if (token === "") {
    const Txn = await connectedContract2.getPoolSize(token, id);
    return Number(Txn.toString());
  }
  
  const Txn = await connectedContract.getPoolSize(token, id);
  return Number(Txn.toString());
}
  

const AllBets = async (id) => {
  const Txn = await connectedContract.getBets(id);
  return Txn;
};


const AllUserBets = async (user) => {
  const Txn = await connectedContract.getAllUserBets(user);
  return Txn;
};

const getTotalReturned = async (user, token) => {
  const Txn = await connectedContract.getTotalReturned(user, token);
  return Txn;
};

const userStatus = async (user, id) => {
  const Txn = await connectedContract.userPredictStatus(user, [id]);
  return Txn;
};

const Utils = {
  EventOdd,
  PoolSize,
  PoolTotal,
  AllBets,
  Airdrop,
  AllUserBets,
  FreeBetToken,
  MetabetBalance,
  getTotalReturned,
  userStatus
};

export default Utils;
