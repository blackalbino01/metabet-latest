import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
  address: null,
};

export const walletSlice = createSlice({
  name: "Connect Wallet",
  initialState,
  reducers: {
    ConnectWallet: (state) => {
      state.value = true;
    },
    DisconnectWallet: (state) => {
      state.value = false;
      state.address = null;
    },
    AddAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { ConnectWallet, DisconnectWallet, AddAddress } =
  walletSlice.actions;
export const Walled = (state) => state;

export default walletSlice.reducer;
