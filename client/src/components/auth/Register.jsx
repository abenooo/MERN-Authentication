import React, { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpw: "",
  });

  const { name, email, password, confirmpw } = formData;
  // onchange handler configurted to handle change for all fiedls
  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  // onsubmit
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmpw) {
      console.log("Password don't match");
    } else {
      console.log(formData);
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={name}
            required
            onChange={(e) => {
              onChange(e);
            }}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            required
            onChange={(e) => {
              onChange(e);
            }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            minLength='4'
            onChange={(e) => {
              onChange(e);
            }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="confirm password"
            name="confirmpw"
            value={confirmpw}
            minLength='4'
            onChange={(e) => {
              onChange(e);
            }}
          />
        </div>
        {/* button */}
        <div>
          <p>Already have an account? <Link to='/login'>Login
          </Link></p>
          <input type="submit" value='Register'/>
        </div>
      </form>
    </div>
  );
};

export default Register;
