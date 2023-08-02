import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function () {
  const [name, setName] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setName(user.displayName);
      } else {
        setName(false);
      }
    });
  }, []);

  return (
    <>
      <nav>
        <span className="head">
          <img src="https://thumbs.dreamstime.com/b/patient-consultation-to-doctor-health-care-concept-medical-team-healthy-application-flat-vector-illustration-modern-character-140354299.jpg" />
          <h2>Health Care</h2>
        </span>

        <span className="detail">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {!name ? (
              <>
                <li>
                  <Link to="/signup">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/boa">Book an appointment</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
              <Link to="/about">Prescription</Link>
            </li>
              </>
            )}
  
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
          {name && (
            <>
              <span className="logname">{name}</span>
              <Link to="/logout" className="logoutbutn">Logout</Link>
            </>
          )}
          
        </span>
      </nav>
    </>
  );
}
