import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
    const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token"); 

  return isAuthenticated ? element : navigate("/login") ;
};

export default PrivateRoute;
