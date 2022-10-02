import { configureStore } from '@reduxjs/toolkit'
import rocket from './slices/dataForCaruselSlice'
import rockets from './slices/dataForDropListSLice'


export const store = configureStore({
reducer: {
   rocket,
   rockets,
},
})
