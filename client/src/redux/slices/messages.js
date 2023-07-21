import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axios } from '../../core';

export const fetchMessages = createAsyncThunk('messages/fetchMessages', async (id) => {
    const { data } = await axios.get(`/messages/${id}`);
    return data;
});

export const sendMessages = createAsyncThunk('messages/sendMessages', async (payload) => {
    const { dialog, text } = payload;
    const { data } = await axios.post('/messages', {
        "dialog": dialog,
        "text": text
    });
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
    reducers: {
        addMessage: (state, action) => {
            state.messages.data.push(action.payload)
        }
    },
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

export const { addMessage } = messagesSlice.actions;

export const messagesReducer = messagesSlice.reducer;
