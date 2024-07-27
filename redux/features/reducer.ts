import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const userReducer = createSlice({
    name: 'user',
    initialState: {
        user: {}
    },
    reducers: {
        setUser(state, action: PayloadAction<any>) {
            return { ...state, user: action.payload }
        }
    }
})
export const { setUser } = userReducer.actions
export default userReducer