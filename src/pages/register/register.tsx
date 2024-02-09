import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>React World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ipsum culpa a doloremque tempora quibusdam,
            odit incidunt facere repudiandae unde est repellendus accusantium. Iure dignissimos, beatae blanditiis quas
            accusantium velit!
          </p>
          <span>Don't you have a account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
