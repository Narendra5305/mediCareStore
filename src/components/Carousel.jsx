import React, { useEffect, useState ,useRef } from "react";
import "../components/componentCss/Carousel.css"
import { useDispatch , useSelector } from "react-redux";
import { fetchProduct } from "../redux/slices/productSlice";
import ProductCard from "../components/ProductCard"


const Crousel1 = ()=>{

    const slides = [
        {
            image: "https://www.dermstore.com/images?url=https://static.thcdn.com/widgets/208-us/11/original-SITE_Sunday_Riley_Public_Sale_HP_Banner_1920x700-2-160111.png&format=webp&auto=avif&width=1920&fit=cover",
            title : "Eminance Organic Skin Care: Buy 2 or More, save 25%",
            p:"Discount Apllied at cart when you buy from brand"
        },
        {
            image: "https://www.dermstore.com/images?url=https://static.thcdn.com/widgets/208-us/29/original-SITE___Ingredient_Index___1920x700_%281%29-192029.png&format=webp&auto=avif&width=1920&fit=cover",
            title: "Power Pair: Niacinamide + Hyaluronic Acid",
            p : "An efficacious duo that work better together"
        },
        {
            image: "https://www.dermstore.com/images?url=https://static.thcdn.com/widgets/208-us/16/original-SITE___Ingredient_Index___1920x700_%282%29-192416.png&format=webp&auto=avif&width=1920&fit=cover",
            title: "Skin's Building Blocks",
            p:"Essential lipids that help maintain the skin's barrier, lock in moisture and protect against environmental damage."
        },

    ]

    const [currentIndex, setCurrentIndex] = useState(0);


    const handleNext = () =>{
        setCurrentIndex((prevInd) => (prevInd +1) % slides.length )
    }

    const handlePrev = () =>{
        setCurrentIndex((prevInd) => 
            prevInd=== 0 ? slides.length - 1 : prevInd - 1 
        )
    }



    return(
        <div className="crousal1">
            <div className="crousel1-child">
                <button onClick={handleNext} className="prev-btn">{"<"}</button>
                <img src={slides[currentIndex].image} alt="crousal one image" />
                <button onClick={handlePrev} className="next-btn">{">"}</button>

                <div className="textcontainder">
                    <div className="textcontainder-child">
                        <h1>{slides[currentIndex].title}</h1>
                        <p>{slides[currentIndex].p}</p>
                        <button >SHOP NOW</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


const Crousel2 =() =>{

    return(
        <div className="crousel2">
            <ul>
                <li>Skin Care</li>
                <li>Vitamin C</li>
                <li>Tools & Devices</li>
                <li>Makeup</li>
                <li>Retinol</li>
                <li>Free Gifts</li>
            </ul>
        </div>

    )
}



const Crousel3 =() =>{
    const dispatch = useDispatch();

    const carouselRef = useRef(null);
    
    const {products , loading , error} = useSelector((state) => state.products)

    useEffect(()=>{
        dispatch(fetchProduct({}))
    },[dispatch])


    const scrollLeft = () => {
        if (carouselRef.current) {
          carouselRef.current.scrollBy({ left: -250, behavior: "smooth" });
        }
      };
    
    const scrollRight = () => {
        if (carouselRef.current) {
          carouselRef.current.scrollBy({ left: 250, behavior: "smooth" });
        }
      };
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data</p>;

    return(
        <div className="crousel3">
            <div className="carousel-container">
                <button className="prev-btn" onClick={scrollLeft}>&#10094;</button>
                <div className="carousel" ref={carouselRef}>
                    {products?.map((product) => (
                    <div key={product._id} className="carousel-item">
                        <ProductCard product={product}/>
                    </div>
                    ))}
                </div>
                <button className="next-btn" onClick={scrollRight}>&#10095;</button>
            </div>
           
        </div>

    )
}






const Crousel4 = () =>{
    return(
        <div className="crousel4">
            <div className="crousel4-child">
                <img src="https://www.dermstore.com/images?url=https://static.thcdn.com/widgets/208-us/53/original-SITE___App_Exclusive_GWP___App_Disruptor_Banner_%28SHOP_NOW%29_-_Sunday_Riley_%282%29-191053.png&format=webp&auto=avif&width=1920&fit=cover" alt="crousel 4 image" /> 
            </div>
            
        </div>
    )
}







const Crousel6 = () =>{
    return(
        <div className="crousel6">
            <div className="crousel6-child">
                <img src="https://www.dermstore.com/images?url=https://static.thcdn.com/widgets/208-us/46/original-DoctorsAreIn-Desktop-1920x700_%281%29-145746.jpg&format=webp&auto=avif&width=1920&fit=cover" alt="doc image" /> 
            </div>
            
        </div>
    )
}


const Crousel = ()=>{
    return(
        <>
            <Crousel1/>
            <Crousel2/>
            <Crousel3/>
            <Crousel4/>
            <Crousel3/>
            <Crousel6/> 
        </>
    )
}

export default Crousel