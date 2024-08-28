import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialState = {
    user: {},
    openSidebar: false
}
const reducer = createSlice({
    name: 'reducer',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<any>) {
            return { ...state, user: action.payload }
        },
        setOpenSidebar(state) {
            return { ...state, openSidebar: !state.openSidebar }
        }
    }
})
export const { setUser, setOpenSidebar } = reducer.actions
export default reducer