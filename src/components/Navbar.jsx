import React,{useState} from "react";
import './componentCss/navbar.css'
import { useNavigate } from "react-router";


function NavBar1(){
    return(
        <div className="navbar1">
            <div className="navbar1-child">
                <h1>SAVE 25% ON EMINENCE ORGANIC SKIN CARE WHEN YOU BUY 2 OR MORE PRODUCTS.</h1>
            </div>
        </div>
    )
}

function NavBar2(){
    const navigate =useNavigate()

    return(
        <div className="navbar2">

            <div className="navbar2-child">


                <div className="navbar2-child-1">
                    <div className="navbar2-child-1-child">
                        <input type="text" className="navbar2-child-1-input" placeholder="SEARCH"/>
                        <img src="https://www.svgrepo.com/show/532555/search.svg" alt="searchsvg"  className="navbar2-child-1-svg"/>
                    </div>
                </div>



                <div onClick={()=>{navigate("/")}} className="navbar2-child-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Dermstore_logo.svg/1200px-Dermstore_logo.svg.png" alt="dermalogo" />
                </div>





                <div className="navbar2-child-3">
                    <div className="navbar2-child-3-child">
                        <div className="navbar2-child-3-child-1">
                            <a href="" className="navbar2-child-3-child-1-anchor">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/054/474/619/small/usa-flag-simple-illustration-for-independence-day-or-election-png.png" alt="usalogo" />
                                <p>USD</p>
                            </a>
                        </div>


                        <div onClick={()=>navigate("/signin")} className="navbar2-child-3-child-2">
                            <a href=""  className="navbar2-child-3-child-2-anchor">
                                <img src="https://www.svgrepo.com/show/473980/profile.svg" alt="signin-profile-svg" />
                                <p>Sign In</p>
                            </a>
                        </div>


                        <div onClick={()=>navigate("/cart")} className="navbar2-child-3-child-3">
                            <a href=""  className="navbar2-child-3-child-3-anchor">
                                <img src="https://www.svgrepo.com/show/505321/cart-1.svg" alt="cart-svg" />
                                <p>Cart</p>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}


const menuData = {
    "BRANDS": ["BABOR", "Beauty ORA", "BIOEFFECT", "Briogeo"],
    "BY CATEGORY": ["SKIN CARE",  "HAIR CARE" , "MAKEUP"  , "TOOLS & DEVICES" , "BODY CARE" , "FRAGRANCE"  ,"TRAVEL SIZE" ],
    "BESTSELLERS": ["SHOP BY CATEGORY" , "Skin Care", "Sunscreen" ,"Hair Care", "Makeup" , "Tools & Devices " ,"Body Care"],
    "SUNSCREEN": ["SHOP BY CATEGORY" , "Face Sunscreen" ," Body Sunscreen"  , "Eye & Lip Sunscreen" , "Moisturizers with SPF" ,"Tinted Sunscreen" ,"Makeup with SPF" ,"UV Hair Protection"],
    "SALE & OFFERS": ["SHOP BY % OFF" , "Save 20%"  ," Save 25%" , "Save 30%"],
    "EXCLUSIVES": ["BEAUTYFIX" ,"BEST OF DERMSTORE KITS"  , ,"EXCLUSIVES" , "DERMSTORE COLLECTION"],
    "DISCOVER":["DISCOVER DERMSTORE" , "Skin Goals"],
    "NEW":["SHOP BY CATEGORY" , "Skin Care", "Sunscreen" ,"Hair Care", "Makeup" ],
    "BLOG":["WHAT TO BUY" , "HOW TO INGREDIENT INDEX" ,"BEAUTY REVIEWS" , "TRENDING BEAUTY" , "SUNSCREEN GUIDE"],
    "TEXT AN EXPERT":["SHOP BY SERVICE" , "Ask an Expert" , "Build a Routine" , "Auto-Replenishment" ],    
     
};





function  NavBar3(){
    

    const [openMenu, setOpenMenu] = useState(null);

    const navigate = useNavigate()

    const handleFilter =(e , item ,menuItem)=>{ 
        navigate("/product") 
    }


    return(
        <div className="navbar-3">
            <ul className="nav-list">
                {Object.keys(menuData).map((menuItem, index) => (
                <li
                    key={index}
                    className="nav-item"
                    onMouseEnter={() => setOpenMenu(menuItem)}
                    onMouseLeave={() => setOpenMenu(null)}
                    
                >
                    <button className="nav-button">{menuItem}</button>

                    
                    {openMenu === menuItem && (

                    <div className="mega-menu">
                        {Array.isArray(menuData[menuItem]) ? (
                        <ul className="single-column">
                            {menuData[menuItem].map((item, idx) => (
                            <li onClick={(e)=>handleFilter(e , item ,menuItem)} key={idx}>{item}</li>

                            ))}
                        </ul>
                        ) : (
                        menuData[menuItem].map((category, idx) => (
                            <div className="menu-column" key={idx}>
                            <h3>{category.title}</h3>
                            <ul>
                                {category.items.map((item, i) => (
                                <li key={i}>{item}</li>
                                ))}
                            </ul>
                            </div>
                        ))
                        )}
                    </div>
                    )}
                </li>
                ))}
            </ul>
        </div>
    )
}







function  NavBar4(){
    return(
        <div className="navbar-4">
            <div className="navbar-4-childs">
                <div className="navbar-4-child-1 navbar-4-child">
                    <img src="https://www.svgrepo.com/show/389573/vehicle-truck-farm-transportation.svg" alt="vehicle logo" />
                    <p>FREE US Shipping $50+ </p>
                </div>


                <div className="navbar-4-child-2 navbar-4-child">
                    <img src="https://www.svgrepo.com/show/520990/tick.svg" alt="correct svg" />
                    <p>Ask an Expert</p>
                </div>


                <div className="navbar-4-child-3 navbar-4-child">
                    <img src="https://www.svgrepo.com/show/533119/mobile.svg" alt="mobile svg" />
                    <p>15% off first App Order</p>
                </div>


                <div className="navbar-4-child-4 navbar-4-child">
                    <img src="https://www.svgrepo.com/show/533050/gift-card.svg" alt="Reward svg" />
                    <p>Dermstore Rewards</p>
                </div>
            </div>
        </div>
    )
}









const NavBar = ()=>{
    return(
        <div id="navbar">
            <NavBar1/>
            <NavBar2/>
            <NavBar3/>
            <NavBar4/>
        </div>
        
    )
}

export default NavBar