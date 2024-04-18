import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);

  const LoginUser = async () => {
    const response = await axios.post("https://transaction-backend-resb.onrender.com/login", {
      email,
      password,
    });
    console.log(response);
    localStorage.setItem("userId", response.data._id);
    router.push("/");
  };

  return (
    <div className="Main">
      <div className="container">
        <div className="loginC">
          <div className="login">
               
            <h1 className="wlcm">Welcome back</h1>
            <h3 className="wlcm_bck">
              Welcome back, please enter your details
            </h3>
            <div className="inputc">
              <input
                type="text"
                placeholder="Email"
                className="input"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input
                type="password"
                placeholder="Password"
                className="input"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <button className="login_btn" onClick={LoginUser}>
                login
              </button >
            </div>
            <div className="to_signup">
              <text> Dont have an account?</text>
              <a className="ancher" onClick={() => router.push("/signup")}>
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="blank"></div>
      </div>
    </div>
  );
};

export default Login;


