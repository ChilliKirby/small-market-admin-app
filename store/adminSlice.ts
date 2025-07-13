import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AdminState {
    token: string | null;
};

const initialState: AdminState = {
    token: null,
};

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string | null>) => {
            state.token = action.payload;
        },
    }
});

export const { setToken } = adminSlice.actions;
export default adminSlice.reducer;