import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AdminState {
    name: string | '';
    token: string | '';
};

const initialState: AdminState = {
    name:  '',
    token: '',
};

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<AdminState>) => {
            state.name = action.payload.name;
            state.token = action.payload.token;
        },
    }
});

export const { setUser } = adminSlice.actions;
export default adminSlice.reducer;