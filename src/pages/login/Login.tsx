import "./login.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { useContext } from "react";

const Login = () => {
  const { setCurrentUserToken } = useContext(AuthContext);
  function handleLogin(el) {
    el.preventDefault();
    setCurrentUserToken(el.target["username"].value + el.target["password"].value);
  }
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ipsum culpa a doloremque tempora quibusdam,
            odit incidunt facere repudiandae unde est repellendus accusantium. Iure dignissimos, beatae blanditiis quas
            accusantium velit!
          </p>
          <span>Don't you have a account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>

        <div className="right">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
