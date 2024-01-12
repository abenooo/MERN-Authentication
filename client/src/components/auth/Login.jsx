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
    [e.target.name]:e.target.value,
  });
  return <div>Login</div>;
};

export default Login;
