import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    categories: []
}

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload.categories
        }
    }
})

export const {setCategories} = categorySlice.actions;
export default categorySlice.reducer;