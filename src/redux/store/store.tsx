import { configureStore } from "@reduxjs/toolkit"; 
import walletSlice from "../services/walletSlice";
import networkSlice from "../services/networkSlice";

export const store = configureStore({
    reducer: {
        wallet: walletSlice.reducer,
        network: networkSlice.reducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch