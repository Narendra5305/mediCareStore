import React from "react";
import "./componentCss/footer.css"


function Footer1(){
    return(
        <div className="footer1">
            <hr />
            <div className="footer1-child">
                <div className="footer1-child-1">

                    <div className="footer1-child-1-1">
                        <div className="footer1-child-1-1-content-1">
                            <img src="https://www.svgrepo.com/show/533200/mail-alt-3.svg" alt="mail logo" /> 
                            <p>Sign up to our newsletters and receive the latest exclusive discounts and deals</p>
                        </div>

                        <div className="footer1-child-1-1-content-2">
                            <button>SIGN ME UP</button>
                        </div>
                    </div>



                    <div className="footer1-child-1-2">
                        <div className="footer1-child-1-2-content">


                            <div className="footer1-child-1-2-content-1 footer1-child-1-2-contents-svg">
                                <p>Connect with us</p>
                            </div>



                            <div className="footer1-child-1-2-content-2 footer1-child-1-2-contents-svg">
                                <img src="https://www.svgrepo.com/show/512120/facebook-176.svg" alt="facebook-logo" />
                            </div>



                            <div className="footer1-child-1-2-content-3 footer1-child-1-2-contents-svg">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg" alt="x-logo" />
                            </div>



                            <div className="footer1-child-1-2-content-4 footer1-child-1-2-contents-svg">
                                <img src="https://www.svgrepo.com/show/521711/instagram.svg" alt="insta-logo" />
                            </div>



                            <div className="footer1-child-1-2-content-5 footer1-child-1-2-contents-svg">
                                <img src="https://www.svgrepo.com/show/506687/youtube-play.svg" alt="youtube-logo" />
                            </div>


                            <div className="footer1-child-1-2-content-6 footer1-child-1-2-contents-svg">
                                <img src="https://www.svgrepo.com/show/473806/tiktok.svg" alt="tiktok-logo" />
                            </div>


                            <div className="footer1-child-1-2-content-7 footer1-child-1-2-contents-svg">
                                <img src="https://www.svgrepo.com/show/512664/pinterest-180.svg" alt="pinterest-logo" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <hr />
        </div>
    )
}




function Footer2(){
    return(
        <div className="footer2">
            <div className="footer2-child">
                <div className="footer2-child-content-1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Dermstore_logo.svg/1200px-Dermstore_logo.svg.png" alt="dermstore-logo" />
                </div>


                <div className="footer2-child-content-2">
                    <div className="footer2-child-content-2-child">
                          
                        <ul>
                            <li>CUSTOMER SERVICE</li>
                            <li>HELP CENTER / FAQS</li>
                            <li>CONTACT US</li>
                            <li>RETURNS</li>
                            <li>SHIPPING INFORMATION</li>
                            <li>TRACK MY ORDER</li>
                        </ul>
                    

                    
                        <ul>
                            <li>MY ACCOUNT</li>
                            <li>MANAGE MY AUTO-REPLENISHMENTS</li>
                            <li>MY REWARDS</li>
                            <li>MY FAVORITES</li>
                            <li>REFER A FRIEND</li>
                            <li>ORDER HISTORY</li>
                        </ul>
                    

                    
                        <ul>
                            <li>COMPANY</li>
                            <li>ABOUT US</li>
                            <li>ASK AN EXPERT</li>
                            <li>DERMSTORE COLLECTIVE</li>
                            <li>KEY WORKERS DISCOUNT</li>
                            <li>STUDENT DISCOUNT</li>
                            <li>BUY NOW, PAY LATER</li>
                        </ul>
                    
                    
                        <ul>
                            <li>LEGAL</li>
                            <li>PRIVACY POLICY</li>
                            <li>SITE WIDE EXCLUSIONS</li>
                            <li>TERMS & CONDITIONS</li>
                            <li>MODERN SLAVERY STATEMENT</li>
                            <li>PRODUCT RECALL</li>
                            <li>ACCESSIBILITY</li>
                        </ul>
                    
                
                    </div>
                </div>
            </div>
        </div>
    )
}


function Footer3(){
    return(
        <div className="footer3">
            <div className="footer3-content">
                <div className="footer3-content-child">
                    <p>2025 The Hut.com Ltd t/a Dermstore.com</p>
                </div>
            </div>
        </div>
    )
}



const Footer = ()=>{
    return(
        <div id="footer">
            <Footer1/>
            <Footer2/>
            <Footer3/>
        </div>
    )
}


export default Footer