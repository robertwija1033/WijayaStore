import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [fillLogin, setFillLogin] = useState([{ Email: "" }, { Password: "" }]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFillLogin({ ...fillLogin, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fillLogin.Email || !fillLogin.Password) {
      return;
    } else {
      navigate("/home");
    }
  };

  return (
    <>
      <div className="container-login">
        <div className="login">
          <h2>Login</h2>
        </div>
        <div className="container-user">
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <i className="fas fa-at"></i>
              <input
                type="email"
                required="required"
                value={fillLogin.Email}
                onChange={handleChange}
                name="Email"
              />
              <span>Email Address</span>
            </div>
            <div className="input-box">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                required="required"
                value={fillLogin.Password}
                onChange={handleChange}
                name="Password"
              />
              <span>Password</span>
            </div>
            <div className="input-box">
              <input type="submit" value="Login" />
              <Link to={"/Register"}>Not have an Account?</Link>
            </div>
          </form>
        </div>
        <div className="sakura">
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
          <img src="https://th.bing.com/th/id/R.9775d7336a43cdc1d9cf9d42ac063775?rik=EMtQTrKltg9YLA&riu=http%3a%2f%2fwww.outworldz.com%2flib%2fRene+Free+Lighting+System%2fRenes+Free+Lighting+System%2ftextures%2fstar.png&ehk=X39Kqn14cdqVecqcbofSDMhqqjfwChYlRUg5BvdPPSM%3d&risl=&pid=ImgRaw&r=0" />
        </div>
      </div>
    </>
  );
};

export default Login;
