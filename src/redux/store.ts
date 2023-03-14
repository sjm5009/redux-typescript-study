import { configureStore } from '@reduxjs/toolkit'
import bankReducer from './slice/bankSlice'
import userSlice from './slice/userSlice'

export const store = configureStore({
        reducer: {
            bank: bankReducer,
            user: userSlice
        },
    })

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch