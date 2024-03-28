import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(name, email, password);

  const login = async () => {
    const result = await axios.post("http://localhost:8080/signup", {
      name,
      email,
      password,
    });
    console.log(result);
    if (result.statusText === "OK") router.push("/login");
  };

  return (
    <div className="Main">
      <div className="container">
        <div className="loginC">
          <div className="login">
            <h1 className="wlcm">Create Geld Account</h1>
            <h3 className="wlcm bck">
              Sing up bellow to create your Wallet Account
            </h3>
            <div className="inputc">
              <input
                type="text"
                placeholder="Name"
                className="input"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                className="input"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="input"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <input
                type="password"
                placeholder="Repeat-Password"
                className="input"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <button className="sgnup" onClick={login}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="blank"></div>
      </div>
    </div>
  );
};

export default SignUp;
