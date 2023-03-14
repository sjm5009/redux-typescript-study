import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface BankState {
    amount: number
}

const initialState: BankState = {
    amount: 0
}

export const bankSlice = createSlice({
    name: 'bank',
    initialState,
    reducers: {
        deposit: (state, action: PayloadAction<number>) => {
            state.amount += action.payload
        },
        withdraw: (state, action: PayloadAction<number>) => {
            state.amount -= action.payload
        },
        bankrupt: (state) => {
            state.amount = 0
        }
    }
})

export const { deposit, withdraw, bankrupt } = bankSlice.actions

export const selectBank = (state: RootState) => state.bank.amount

export default bankSlice.reducer