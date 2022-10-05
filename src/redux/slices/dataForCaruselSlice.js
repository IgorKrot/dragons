import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

// const getDataFromLS = () => {
//    const data = localStorage.getItem("dragon");
//    const rocketFromLS = data ? JSON.parse(data) : false;
//    return rocketFromLS;
// };
// const rocketFromLS = getDataFromLS()

export const fetchDragon = createAsyncThunk("product/fetchDragonStatus", async() => {
   const { data } = await axios.get("https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f");
   // console.log(rocketFromLS);
   // if (rocketFromLS == false) {return data} else {return rocketFromLS};
   return data
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
   },
   [fetchDragon.pending]: (state) => {
      state.rocket = [];
      state.status = "Error";
   },
   }
});

export const { dataFromLs } = dataForCaruselSlice.actions;

export default dataForCaruselSlice.reducer;
