import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css"; // Import CSS

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user)); // Store as an object
    alert("Registration Successful! Please log in.");
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <p>
        Already have an account?{" "}
        <button onClick={() => navigate("/login")}>Login</button>
      </p>
    </div>
  );
};

export default Register;
