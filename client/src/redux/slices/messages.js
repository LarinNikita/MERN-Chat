import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axios } from '../../axios';

export const fetchMessages = createAsyncThunk('user/fetchMessages', async (id) => {
    // const { data } = await axios.get(`/messages?dialog=${id}`);
    const { data } = await axios.get(`/messages/${id}`);
    return data;
});

const initialState = {
    messages: {
        data: [],
        status: 'loaded'
    },
};

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchMessages.pending]: (state) => {
            state.messages.data = [];
            state.messages.status = 'loading';
        },
        [fetchMessages.fulfilled]: (state, action) => {
            state.messages.data = action.payload;
            state.messages.status = 'loaded';
        },
        [fetchMessages.rejected]: (state) => {
            state.messages.data = [];
            state.messages.status = 'error';
        },
    },
});

export const messagesReducer = messagesSlice.reducer;
