import React, { useState } from "react";
import "../login.css";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config.js";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nativate = useNavigate();

  function userAuthentication(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        if(user.providerData[1]==="doctor"){
          nativate("/doctordashboard")
        }else{
          nativate("/dashboard")
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  return (
    <div className="loginmaster">
      <div className="first">
        <h2 className="uname">Login</h2>
        <form onSubmit={userAuthentication} action="#">
          <div className="Userdetail">
            <div className="Inputbox">
              <span className="details">Username</span>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter the Username"
                required
              />
            </div>
            <div className="Inputbox">
              <span className="details">Password</span>
              <input
                type="password"
                placeholder="Enter the Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="loginbutton">
              <button>Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
