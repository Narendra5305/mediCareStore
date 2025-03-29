import { configureStore } from "@reduxjs/toolkit";

import ProductReducer  from "./slices/productSlice"


const store = configureStore({
    reducer:{
        products : ProductReducer
    }
})


export default store ;