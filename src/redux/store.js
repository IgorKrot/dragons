import { configureStore } from '@reduxjs/toolkit'
import rocket from './slices/dataForCaruselSlice'
import rockets from './slices/dataForDropListSLice'
import auth from './slices/dataAuth'


export const store = configureStore({
reducer: {
   rocket,
   rockets,
   auth,
},
})
