import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchDragons = createAsyncThunk("product/fetchDragonsStatus", async() => {
   const { data } = await axios.get("https://api.spacexdata.com/v4/dragons");
   return data
})

const initialState = {
   rockets: [],
   status: "Loading",
};

const dataForDropListSLice = createSlice({
   name: "rockets",
   initialState,

   reducers: {
   },
   extraReducers: {
   [fetchDragons.pending]: (state) => {
      state.rockets = [];
      state.status = "Loading";
   },
   [fetchDragons.fulfilled]: (state, action) => {
      state.rockets = action.payload;
      state.status = "Success";
   },
   [fetchDragons.pending]: (state) => {
      state.rockets = [];
      state.status = "Error";
   },
   }
});

export const { } = dataForDropListSLice.actions;

export default dataForDropListSLice.reducer;
