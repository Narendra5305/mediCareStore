import "./componentCss/card.css"
import { useNavigate } from "react-router-dom";

const ProductCard =({product}) => {
    const navigate =useNavigate()
    return(
        <div  onClick={()=>navigate(`/productDetail/${product._id}`)} key={product._id} className="card">   
            <div><img src={product.images[0]} alt="" /></div>
            <div><h1>{product.product_name}</h1></div>
            <div><p>${product.one_time_price}:00</p></div> 
            <div><button >QUICK BUY</button></div>
        </div>
    )
}


export default ProductCard ;