import React , {useEffect, useState} from "react";

import { useParams } from "react-router-dom";

import { useDispatch , useSelector } from "react-redux";
import { fetchProduct } from "../redux/slices/productSlice";
import ProductCard from "../components/ProductCard"

import "./pagesCss/productList.css"



const ProductList =() =>{
    

    
    const dispatch = useDispatch();

    const {products , loading , error} = useSelector((state) => state.products)


    const [category , setCategory] = useState("")
    const [offer , setOffer] = useState("")
    const [brand , setBrand] = useState("")
    const [sort , setSort] = useState("")
    const [page , setPage] = useState(1)

    
    
    useEffect(()=>{  
        
        dispatch(fetchProduct({ category,brand , sort, page }))
        
    },[dispatch ,page , brand,category,sort ])




    const handlePrev =() =>{
        setPage((state)=>state-1)
    }

    const handleNext =() =>{
        setPage((state)=>state+1)
    }



   

    if (loading){
        return(
            <h1>Loading......</h1>
        )
    }

    if (error){
        return(
            <h1>Error on fetching products</h1>
        )
    }

    

    return(
        <div id="productList">
           
            <div className="filter">
                <div className="filter-child">
                    <div className="filter-child-1">
                        <select name="Filter By Brand" onClick={(e)=>{setBrand(e.target.value)}}  >
                            <option value="BABOR">Babor</option>
                            <option value="Act+Acre">Act+Acre</option>
                            <option value="UNITE Hair">UNITE Hair</option>
                        </select>
                    </div>



                    <div className="filter-child-1">
                        <select name="Filter By Category" onClick={(e)=>{setCategory(e.target.value)}} >
                            <option value="skin care">Skin care</option>
                            <option value="hair care">Hair care</option>
                            <option value="UNITE Hair">UNITE Hair</option>
                        </select>
                    </div>



                    <div className="filter-child-1">
                        <select name="Filter By Price" id="" onClick={(e)=>{setSort(e.target.value)}}>
                            <option value="asc">Low To High</option>
                            <option value="desc">High To Low</option>
                            
                        </select>
                    </div>
                </div>
            </div>

            <h2>Product List</h2>

            <div className="productList-child">
                
                <div className="product-cards">
                    {products.map((product)=>(
                        <ProductCard product={product } />
                    ))}
                </div>
                
            </div>
            <div className="filter-2">
                <div className="filter-2-child">
                    <button disabled={page===1}  onClick={handlePrev}>{"<"}</button> Page {page} <button disabled={products.length===0} onClick={handleNext}>{">"}</button>
                </div>
            </div>
        </div>
    )
}

export default ProductList ;