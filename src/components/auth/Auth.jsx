import React from "react";
import { useAuth } from "../context/CardContextProvider";
import "./Auth.css";
const Auth = () => {
  const {
    handleRegister,
    user,
    setUser,
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    handleLogOut,
    handleLogin,
  } = useAuth();
  return (
    <div className="form">
      {/* <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister} variant="contained">
        Register
      </button> */}
      {/* <form> */}
      <h2>Login Here</h2>
      <div className="cont">
        <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <label for="">Email:</label>
        </div>

        <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password:</label>
        </div>
        <button onClick={handleLogin}> Log In</button>
      </div>

      <div className="register">
        <p>
          Don't have an account ? <a href="">register</a>
        </p>
      </div>
      {/* </form> */}
    </div>
  );
};

export default Auth;
