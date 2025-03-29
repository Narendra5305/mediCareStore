import React , {useState } from "react";

import "./pagesCss/signin.css"
import { useNavigate } from "react-router";
import axios from "axios";




const Signin  = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const navigate = useNavigate();

    const handleSubmit =async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("https://demstorebackend.onrender.com/users/signin", {email ,password});
          alert("User login successfully!");
          setEmail("")
          setPassword("")
          navigate("/")
        } catch (error) {
          console.error("Error signin user:", error.response?.data || error.message);
          alert("Failed to signin user.");
        }
    };

    return(
        <div className="signin">
            <div className="signin-child">
                <div className="signin-child-cont-1">
                    <div className="signin-child-cont-1-child">
                        
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Dermstore_logo.svg/1200px-Dermstore_logo.svg.png" alt="image-logo" />
                        
                        <h2>LOGIN HERE</h2>

                        <form className="singin-form" onSubmit={handleSubmit}>
                            <label >Email Address*</label>
                            <input type="email" placeholder="Enter your email" value={email}  onChange={(e) => setEmail(e.target.value)} required/>

                            <label>Password</label>
                            <input type="text" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                            <button type="submit">SIGN IN</button>

                            
                        </form>

                        <div className="signUp-link">
                            <a onClick={()=>navigate("/signup")}>New Here? Sign up today!</a>
                        </div>

                    </div>
                </div>

                <div className="signin-child-cont-2">
                    <img src="https://www.dermstore.com/images?url=https://static.thcdn.com/design-assets/dermstore/components/Account%20Image/modelshottest.jpg&format=webp&auto=avif&width=1920&crop=1920,1120,smart" alt="sigin-image" />
                </div>
            </div>
        </div>
    )
}


export default Signin ;