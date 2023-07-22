import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axios } from '../../core';

export const fetchDialogs = createAsyncThunk('dialogs/fetchDialogs', async () => {
    const { data } = await axios.get('/dialogs');
    return data;
});

export const createDialog = createAsyncThunk('dialogs/createDialogs', async (payload) => {
    const { data } = await axios.post('/dialogs', payload);
    return data;
});

const initialState = {
    dialogs: {
        data: [],
        status: 'loading'
    },
    currentDialogId: null
};

const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {
        setCurrentDialogId: (state, action) => {
            state.currentDialogId = action.payload;
        }
    },
    extraReducers: {
        [fetchDialogs.pending]: (state) => {
            state.dialogs.data = [];
            state.dialogs.status = 'loading';
        },
        [fetchDialogs.fulfilled]: (state, action) => {
            state.dialogs.data = action.payload;
            state.dialogs.status = 'loaded';
        },
        [fetchDialogs.rejected]: (state) => {
            state.dialogs.data = [];
            state.dialogs.status = 'error';
        },
    },
});

export const { setCurrentDialogId } = dialogsSlice.actions;

export const dialogsReducer = dialogsSlice.reducer;
