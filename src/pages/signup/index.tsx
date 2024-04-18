import { useRouter } from "next/router";
import { ChangeEventHandler, useState } from "react";
import axios from "axios";

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(name, email, password);

  const signUp = async () => {
    const result = await axios.post(
      "https://transaction-backend-resb.onrender.com/signup",
      {
        name,
        email,
        password,
      }
    );
    console.log(result);
    if (result.status === 200) router.push("/login");
  };

  const handleName: ChangeEventHandler<HTMLInputElement> = (e) => {
    const nameCheck = e.target.value;
    if (nameCheck.length < 3) {
      setNameErr("Name must be more than 3 characters");
    } else {
      setNameErr("");
    }
    setName(nameCheck);
  };

  const handlePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    const passwordCheck = e.target.value;
    if (passwordCheck.length < 8) {
      setPasswordErr("Password must be more than 8 characters");
    } else {
      setPasswordErr("");
    }
    setPassword(passwordCheck);
  };

  const handleEmail: ChangeEventHandler<HTMLInputElement> = (e) => {
    const emailCheck = e.target.value;
      if (!emailCheck.includes("@")) {
      setEmailErr("Please make an valid email");
    } else {
      setEmailErr("");
    }
    setEmail(emailCheck);
  };
  return (
    <div className="Main">
      <div className="container">
        <div className="loginC">
          <div className="login">
            <h1 className="wlcm">Create Geld Account</h1>
            <h3 className="wlcm bck">
              Sing up below to create your Wallet Account
            </h3>
            <div className="inputc">
              <input
                type="text"
                placeholder="username"
                className="input"
                onChange={handleName}
              />
              {nameErr && (<span style={{ color: "red", fontFamily: "sans-serif" }}>{nameErr}</span>)}
              <input
                type="text"
                placeholder="Email"
                className="input"
                onChange={handleEmail}
              />
              {emailErr && (<span style={{ color: "red", fontFamily: "sans-serif" }}>{emailErr}</span>
              )}
              <input
                type="password"
                placeholder="Password"
                className="input"
                onChange={handlePassword}
              />
              {passwordErr && <span style={{ color: 'red', fontFamily: 'sans-serif' }}>{passwordErr}</span>}
              <input
                placeholder="Repeat-Password"
                className="input"
                type="password"
              ></input>
              <button className="sgnup" onClick={signUp}>
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
