import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "../store";

export interface UserState {
    name: string,
    age: number
}

const initialState: UserState = {
    name: 'Plz register account-!',
    age: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            console.log("user action ===== ", action);
            state.name = action.payload.name
            state.age = action.payload.age
        }
    }
})

export const { setUser } = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer