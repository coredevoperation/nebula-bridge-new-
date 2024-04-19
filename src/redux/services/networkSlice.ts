import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction  } from "@reduxjs/toolkit"

interface INetworkState {
    selectedNetwork: {
        chainId: string;
        name: string;
    }
} 

const initialState: INetworkState = {
    selectedNetwork: { chainId: "", name: "" }
}

const networkSlice = createSlice({
    name: "networkSlice",
    initialState,
    reducers: {
        getSelectedNetwork: (state, action: PayloadAction <INetworkState['selectedNetwork']>) => {
             const { chainId, name } = action.payload;
             
             state.selectedNetwork.chainId = chainId;
             state.selectedNetwork.name = name;
            
             console.log(chainId)
        }
    }
})

export const { getSelectedNetwork } =  networkSlice.actions;
export default networkSlice;