import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Registration from "./components/Registration";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashbord";
import Footer from "./components/Footer";
import Doctordashboard from "./components/Doctordashboard";

import { signOut } from 'firebase/auth'

import { auth } from '../firebase.config'
import Bookanappoint from "./components/Bookanappoint";

function UserLogOut() {
  const navigate = useNavigate()
  signOut(auth)
    .then(() => {
      console.log("user logout");
      navigate("/login")
    })
    .catch((error) => {
      // An error happened.
    });
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/signup" Component={Registration} />
        <Route path="/login" Component={Login} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/doctordashboard" Component={Doctordashboard} />
        <Route path="/logout" Component={UserLogOut} />
        <Route path="/boa" Component={Bookanappoint} />
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
