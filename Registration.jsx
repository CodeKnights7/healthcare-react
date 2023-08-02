import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import "../register.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, collection } from "firebase/firestore";

import { auth, db } from "../../firebase.config.js";

export default function Registration() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [userType, setUserType] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confrimPassword) {
      alert("Password does not match");
      return;
    }
    if (phone.length !== 10) {
      alert("Phone number not valid ");
    }
    if (password.length < 6) {
      alert("password atlest 6 letters ");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setDoc(doc(db, "users", user.uid), {
          name,
          email,
          phone,
          age,
          gender,
          userType,
        })
          .then(() => {
            if(userType==="doctor") navigate("/doctordashboard")
            else navigate("/dashboard")
            console.log("success user data added");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  const updateGender = (e) => {
    console.log(e.target.value);
    setGender(e.target.value);
  };
  return (
    <div className="master">
      <div className="container">
        <div className="title">Registrarion</div>
        <form onSubmit={handleSubmit}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Full Name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter the Name"
                required
              />
            </div>
            {/* <div className="input-box">
              <span className="details">User Name</span>
              <input type="text" placeholder="Enter the User Name" required />
            </div> */}
            <div className="input-box">
              <span className="details">Email</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter the Email"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Phone number</span>
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter the Phone number"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter the Password"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Confirm Password</span>
              <input
                type="password"
                value={confrimPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Enter the Password"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Age</span>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter the Age"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">UserType</span>
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                id=""
              >
                <option value="doctor">Doctor</option>
                <option value="user">user</option>
              </select>
            </div>
          </div>
          <div className="gender-details">
            <span className="gender-title">Gender</span>
            <div className="category">
              <label htmlFor="dot-1">
                <span className="dot one">
                  <input
                    type="radio"
                    onChange={updateGender}
                    checked={gender === "male"}
                    value="male"
                  />
                </span>
                <span className="gender">Male</span>
              </label>
              <label htmlFor="dot-2">
                <span className="dot two">
                  <input
                    type="radio"
                    onChange={updateGender}
                    checked={gender === "female"}
                    value="female"
                  />
                </span>
                <span className="gender">Female</span>
              </label>
              <label htmlFor="dot-3">
                <span className="dot three">
                  <input
                    type="radio"
                    onChange={updateGender}
                    checked={gender === "pefer not to say"}
                    value="pefer not to say"
                  />
                </span>
                <span className="gender">Prefer not to say</span>
              </label>
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}
