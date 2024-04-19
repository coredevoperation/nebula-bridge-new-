import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import { RootState, AppDispatch } from "../store/store"; 


interface IState {
     user: string,
     isConnected: boolean;
}

const initialState: IState = { 
     user: "",
     isConnected: false 
}

export const connectWallet = createAsyncThunk<
     string, // return value types
     string, // first arg type,
     // and below is a thunkApi types, check their docs to see more properties
     {
          state: RootState,
          dispatch: AppDispatch,
          rejectValue: string
     }
     >("wallet/connect", async(method: string, thunkApi) => {

     if(typeof window != "undefined") {
          // @ts-ignore
          const eth = window.ethereum!;
          const wallet = await eth.request({ method, params: [
               { 'chainId': 1 }
          ] })

          console.log(wallet)
          return wallet[0];
     } else {
          thunkApi.rejectWithValue("something wrong")
     }

})

export const disconnectWallet = createAsyncThunk<
     boolean, 
     string,
     {
          state: RootState,
          dispatch: AppDispatch,
          rejectValue: string
     }
     >("wallet/disconnect", (method: string) => {

          try {
               if(typeof window != "undefined") {
                    // @ts-ignore
                    const eth = window.ethereum;
                    const result = eth.request({
                         method,
                         params: [
                              { 'eth_accounts': {} }
                         ],
                    })

                    console.log(result)
               }

          } catch(err) {
               console.log(err)
          }

          return true;
} )


export const walletSlice = createSlice({
     name: "walletSlice",
     initialState,
     reducers: {},
     extraReducers: (builder) => {
          builder.addCase(connectWallet.pending, (state, action) => {
               state.isConnected = false;
          }),
          builder.addCase(connectWallet.fulfilled, (state, action) => {
               state.isConnected = true;
               const userWallet: string = action.payload;
               
              if(state.isConnected) {
               //    @ts-ignore
                  const userData = JSON.parse(localStorage.getItem("user-wallet"));
                  state.user =  userData ? userData.wallet : "";
                  console.log(userData)
              }
          }),
           builder.addCase(connectWallet.rejected, (state, action) => {
               state.isConnected = false;
          }),

          builder.addCase(disconnectWallet.pending, (state, action) => {
               state.isConnected = true;
          }),
          builder.addCase(disconnectWallet.fulfilled, (state, action) => {
               state.isConnected = false;
              
          }),
           builder.addCase(disconnectWallet.rejected, (state, action) => {
               state.isConnected = false;
          })
     }
})

export default walletSlice;