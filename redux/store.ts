import { configureStore, } from '@reduxjs/toolkit'
import userReducer from './features/reducer'

const store = configureStore({
    reducer: {
        user: userReducer as any
    }
})
