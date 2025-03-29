import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("product/fetch" , async({category = "", offer = "", brand = "", sort = "asc", page = 1})=>{
    const response = await axios.get("https://demstorebackend.onrender.com/products",{
        params : { category, offer, brand, sort, page }

    })
    return response.data.Product ;
    
} )



const productSlice = createSlice({
    name:"prodcuts" ,
    initialState:{products:[] , loading:false , error:null},
    extraReducers:(builder) =>{
        builder
        .addCase(fetchProduct.pending , (state) => {state.loading = true})
        .addCase(fetchProduct.fulfilled ,(state , action)=>{
            state.loading =false ;
            state.products = action.payload;
        })
        .addCase(fetchProduct.rejected , (state)=>{
            state.loading = false ;
            state.error = "Failed to fetch the products"
        })
    }
})



export default productSlice.reducer ;