import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Category {
    _id: string,
    color: string,
    icon: string,
    name: string,
    slug: string
}
interface CategoriesState {
    categories: Category[],
}

const initialState: CategoriesState = {
    categories: []
}

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories: (state, action: PayloadAction<CategoriesState>) => {
            state.categories = action.payload.categories
        }
    }
})

export const {setCategories} = categorySlice.actions;
export default categorySlice.reducer;