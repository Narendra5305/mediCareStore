import React,{useState} from "react";
import axios from "axios";
import "./pagesCss/signup.css"
import { useNavigate } from "react-router";


const SignUp  = () =>{

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        phone: "",
        role: "user",
      });
    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("https://demstorebackend.onrender.com/users/signup", formData);
          alert("User created successfully!");
          setFormData({ name: "", email: "", password: "", address: "", phone: "", role: "user" });
        } catch (error) {
          console.error("Error creating user:", error.response?.data || error.message);
          alert("Failed to create user.");
        }
      };
    


    return(
        <div className="signup">
            <div className="signup-child">
                <div className="signup-child-cont-1">
                    <div className="signup-child-cont-1-child">

                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Dermstore_logo.svg/1200px-Dermstore_logo.svg.png" alt="image-logo" />
                        
                        <h2>Create an account</h2>

                        <form className="signup-form" onSubmit={handleSubmit}>
                            <label >Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required  />

                            <label >Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required  />


                            <label >Password</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} required  />

                            <label >Address</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange}  />


                            <label >Phone</label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange}  />

                        

                            <button type="submit">SIGN UP</button>

                            
                        </form>

                        <div className="signup-link">
                            <a onClick={()=> navigate("/signin")}>Already got an account? Log in here</a>
                        </div>

                    </div>
                </div>

                <div className="signup-child-cont-2">
                    <img src="https://www.dermstore.com/images?url=https://static.thcdn.com/design-assets/dermstore/components/Account%20Image/modelshottest.jpg&format=webp&auto=avif&width=1920&crop=1920,1120,smart" alt="sigin-image" />
                </div>
            </div>
        </div>
    )
}


export default SignUp ;