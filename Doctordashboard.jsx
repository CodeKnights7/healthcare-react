import React from "react";
import "../doctordashboard.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const nativate = useNavigate();
  
}
export default function Doctordashboard() {
  return (
    <>
      <img src="https://thumbs.dreamstime.com/b/medicine-healthcare-concept-doctor-stethoscope-clinic-close-up-global-125171698.jpg" />
      <button>Hello</button>
    </>
  );
}
