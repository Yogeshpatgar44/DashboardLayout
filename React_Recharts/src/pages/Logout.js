import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const hasLoggedOut = useRef(false); 

  useEffect(() => {
    if (!hasLoggedOut.current) {
      hasLoggedOut.current = true; 
      localStorage.removeItem("isAuthenticated"); 
      setIsAuthenticated(false);
      alert("You have been logged out!");
      navigate("/login");
    }
  }, [navigate, setIsAuthenticated]);

  return null;
};

export default Logout;



