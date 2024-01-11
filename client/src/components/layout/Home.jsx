import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section>
      <div>
        <div>
          <h1>Professional Developemnt</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            minima rerum culpa vitae quos distinctio voluptatum iste accusantium
            facere in sequi illum dignissimos consequuntur? Facere dicta nobis
            sint nesciunt corrupti.
          </p>

          <div>
            <Link to="/register.html">Register</Link>
            <Link to="/login.html">Login</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
