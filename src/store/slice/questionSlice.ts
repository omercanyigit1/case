import type { Slice } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { InitialState } from '@/store/types'
import axios from 'axios';
import { API_URL } from '@/utils/constants';

export const getQuestions = createAsyncThunk(
  "questionList/getQuestions", 
  async () => {
    try {
      const response = await axios.get(`${API_URL}/questions`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
});

const initialState: InitialState = {
  isLoading: false,
  isError: false,
  questions: null
}

export const questionSlice: Slice<InitialState> = createSlice({
  name: 'questionSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    })
      .addCase(getQuestions.fulfilled, (state, action) => {
        state.questions = action.payload;
        state.isLoading = false;
        state.isError = false
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false;
      })
  }
})

export const questionSliceReducer = questionSlice.reducer