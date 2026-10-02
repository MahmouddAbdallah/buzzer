import { configureStore, } from '@reduxjs/toolkit'
import userReducer from './features/reducer'

const store = configureStore({
    reducer: {
        user: userReducer as any
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export default store
