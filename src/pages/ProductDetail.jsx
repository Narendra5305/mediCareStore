import React ,{useEffect, useState , useContext} from "react";
import { useParams } from "react-router";

import { useDispatch , useSelector } from "react-redux";
import { fetchProduct } from "../redux/slices/productSlice";

import { CartContext } from "../contextCart/cartContextApi";


import "./pagesCss/productDetail.css"



const ProductDetail = ()=>{
    const {id} = useParams();


    const dispatch = useDispatch();

    const { cart, addToCart} = useContext(CartContext)

    const [productDetail , setProductDetail] = useState(null);
    
    const {products , loading , error} = useSelector((state) => state.products)

    

    useEffect(()=>{  
        if (products.length===0){
            dispatch(fetchProduct({}))  
        }
    },[dispatch, products ])


    useEffect(()=>{
        const product = products.filter((product)=>product._id===id)
        setProductDetail(product)
    },[products,id])



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
        <div className="productDetail">
            {productDetail!==null ? 

                <div className="product-detail-cont">

                    <div className="product-detail-cont-child-1">
                        <img src={productDetail[0].images[0]} alt="product-image" />
                    </div>


                    <div className="product-detail-cont-child-2">
                        <div className="title-name">
                            <h2>{productDetail[0].brand_name}</h2> 
                            <p>{productDetail[0].product_name}</p>
                        </div>

                        <div className="title-detail">
                            <p>{productDetail[0].description}</p>
                        </div>
                        

                        <div className="onetime-price">
                            <p>{`$ ${productDetail[0].one_time_price} One Time Purchase`}</p>
                        </div>


                        <div className="auto-price">
                            <p>{`$ ${productDetail[0].auto_replenish_price} Auto-Replenish`}</p>
                        </div>


                        <div className="key-ingrediants">
                            <h2>Key Ingrediants</h2>
                            <p>{productDetail[0].key_ingredients}</p>
                        </div>


                        <div className="return-policy">
                            <h3>Return Policy</h3> 
                            <p>{productDetail[0].returns_policy}</p>
                        </div>
                        
                        <div className="add-to-cart">
                            <button onClick={() => addToCart(productDetail)}>ADD TO CART</button>
                        </div>
                    </div>
                    
                </div>
            
            : <h2>product not available</h2>
            }
        </div>
        
    )
}

export default ProductDetail ;