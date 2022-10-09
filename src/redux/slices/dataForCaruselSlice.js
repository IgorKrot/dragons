import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const fetchDragon = createAsyncThunk("product/fetchDragonStatus", async() => {
   const dataFromLS = localStorage.getItem("dragon");
   if(dataFromLS) {const data = await JSON.parse(dataFromLS);
   return data
   } else {
   const {data} = await axios.get("https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f");
   return data
   }
})


const initialState = {
   rocket: [],
   status: "Loading",
};

const dataForCaruselSlice = createSlice({
   name: "rocket",
   initialState,

   reducers: {
   },
   extraReducers: {
   [fetchDragon.pending]: (state) => {
      state.rocket = [];
      state.status = "Loading";
   },
   [fetchDragon.fulfilled]: (state, action) => {
      state.rocket = action.payload;
      state.status = "Success";
      const dataForLS = JSON.stringify(state.rocket);
      localStorage.setItem("dragon", dataForLS);
   },
   [fetchDragon.pending]: (state) => {
      state.rocket = [];
      state.status = "Error";
   },
   }
});

export const { dataFromLs } = dataForCaruselSlice.actions;

export default dataForCaruselSlice.reducer;