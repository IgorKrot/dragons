import React from "react";
import { render, screen} from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import Home from "../pages/Home"
import Account from "../pages/Account"
import Auth from "../pages/Auth"
import rocket from "../redux/slices/dataForCaruselSlice"
import rockets from "../redux/slices/dataForDropListSLice"
import auth from "../redux/slices/dataAuth"
import {BrowserRouter} from 'react-router-dom'



const renderRedux = (
   component,
   {initialState, store = configureStore( {reducer: {
      rocket,
      rockets,
      auth,
   }}, 
   initialState)} = {}
) => {
   return {
      ...render(<Provider store={store}>
                  <BrowserRouter>{component}</BrowserRouter>
               </Provider>),
      store,
   };
};

test("render Home carousel", async () => {
   await renderRedux(<Home />);
   const productrender = screen.findByTestId('Dragon')
   expect(productrender).toBeInTheDocument;
   });
   
test("render Home list", async () => {
   await renderRedux(<Account />);
   const productrender = screen.findByTestId('Account')
   expect(productrender).toBeInTheDocument;
   });

test("render Auth", async () => {
   await renderRedux(<Auth />);
   const productrender = screen.findByTestId('login/Reg')
   expect(productrender).toBeInTheDocument;
   });