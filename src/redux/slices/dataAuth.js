import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {registration, login} from "../../http/userAPI"

export const dataAuth = createAsyncThunk("auth/dataAuthStatus", async(params, {dispatch}) => {
   const {email, password, isAuth} = params;
   try {
      let data;
      if (isAuth) {
         data = await login(email, password);
         dispatch(setIsAuth(true))
         console.log(data);
         return data
      } else {
         data = await registration(email, password);
         dispatch(setIsAuth(true))
         console.log(data);
         return data
      }
   } catch (e) {
      alert(e.response.data.message)
   }
})

const initialState = {
   user: {},
   isAuth: false,
   email: "",
   password: "",
   status: "Loading",
};

const dataAuthSlice = createSlice({
   name: "auth",
   initialState,

   reducers: {
      setEmail: (state, action) => {
         state.email = action.payload;
      },
      setPassword: (state, action) => {
         state.password = action.payload;
      },
      setIsAuth: (state, action) => {
         state.password = action.payload;
      },
      setUser: (state, action) => {
         state.password = action.payload;
      },
   },
   extraReducers: {
   [dataAuth.pending]: (state) => {
      state.status = "Loading";
   },
   [dataAuth.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = "Success";
   },
   [dataAuth.pending]: (state) => {
      state.status = "Error";
   },
   }
});

export const { setEmail, setPassword, setIsAuth, setUser } = dataAuthSlice.actions;

export default dataAuthSlice.reducer;
