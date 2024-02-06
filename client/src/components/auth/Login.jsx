import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const onChange = (e) => ({
    ...formData,
    [e.target.name]: e.target.value,
  });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("logged");
  };
  return (
    <>
      <h1>
      
        <p>Log in to your account</p>
      </h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <input 
          type="email"
          placeholder="Please enter your email address"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          required
          />
           <input 
          type="password"
          placeholder="Please enter your password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          minLength={4}
          />
        </div>

      </form>
    </>
  );
};

export default Login;
