import Utils from "../../utilities";

const walletConnect = async (accountFromExt) => {
  if (typeof window.ethereum !== "undefined") {
    let account;
    if (accountFromExt?.length) {
      account = accountFromExt[0];
      return account;
    } else {
      const accounts = await window.ethereum.request({
        method: "wallet_requestPermissions",
        params: [
          {
            eth_accounts: {},
          },
        ],
      });
      if (accounts.length) {
        account = accounts?.[0]?.caveats[0]?.value[0];
        const getAddress = await window.ethereum.request({
          method: "eth_requestAccounts",
          params: [account, "latest"],
        });

        console.log(getAddress, "getAddress dropdown");
        Utils.Airdrop(account);
        return getAddress;
      }
    }
  } else {
    alert("Install MetaMask Extension");
    console.log("Install MetaMask Extension");
    return null;
  }
};

const walletDisconnect = () => {
  return null;
};

const metaMetaWallet = {
  walletConnect,
  walletDisconnect,
};

export default metaMetaWallet;
