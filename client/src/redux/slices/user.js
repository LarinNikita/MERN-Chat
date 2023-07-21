import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axios } from '../../core';

export const fetchMe = createAsyncThunk('user/fetchMe', async () => {
    const { data } = await axios.get('/user/me');
    return data;
});

export const fetchLogin = createAsyncThunk('user/fetchLogin', async (params) => {
    const { data } = await axios.post('/user/login', params);
    return data;
});

export const fetchRegister = createAsyncThunk('user/fetchRegister', async (params) => {
    const { data } = await axios.post('/user/registration', params);
    return data;
});

export const fetchVerify = createAsyncThunk('user/fetchVerify', async (hash) => {
    const { data } = await axios.get(`/user/verify?hash=${hash}`);
    return data;
});

const initialState = {
    data: null,
    status: 'loading',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
        },
    },
    extraReducers: {
        // Авторизация
        [fetchLogin.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchLogin.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
        },
        [fetchLogin.rejected]: (state) => {
            state.status = 'error';
            state.data = null;
        },

        // Проверка авторизации
        [fetchMe.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchMe.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
        },
        [fetchMe.rejected]: (state) => {
            state.status = 'error';
            state.data = null;
        },

        // Регистрация
        [fetchRegister.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchRegister.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
        },
        [fetchRegister.rejected]: (state) => {
            state.status = 'error';
            state.data = null;
        },
    },
});

export const selectIsAuth = (state) => Boolean(state.user.data);

export const userReducer = userSlice.reducer;

export const { logout } = userSlice.actions;