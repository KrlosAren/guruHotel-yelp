import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getData from '../utils/getData';

export const fetchSearch = createAsyncThunk(
  'users/fetchData',
  async (query) => {
    const response = await getData(query);
    return response.data.search;
  }
);

// slice
const slice = createSlice({
  name: 'users',
  initialState: {
    total: null,
    results: [],
    views: [],
    error: false,
    isError: false,
    isLoading: false,
  },
  reducers: {
    saveView: (state, { payload }) => ({
      ...state,
      views: [...state.views, payload],
    }),
    setError: (state, { payload }) => ({
      ...state,
      error: payload,
      isError: true,
    }),
    emptyErrors: (state, { payload }) => ({
      ...state,
      error: payload,
      isError: false,
      total: null,
    }),
  },
  extraReducers: {
    [fetchSearch.pending]: (state) => ({
      ...state,
      isLoading: true,
      isError: false,
    }),
    [fetchSearch.fulfilled]: (state, { payload }) => ({
      ...state,
      total: payload.total,
      results: [...payload.business],
      isLoading: false,
      error: false,
    }),
    [fetchSearch.rejected]: (state, action) => ({
      ...state,
      isError: true,
      error: action.error.message,
      isLoading: false,
    }),
  },
});

export default slice.reducer;

// actions
export const { saveView, setError, emptyErrors } = slice.actions;
