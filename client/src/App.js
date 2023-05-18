import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingScreen from "./Screens/BookingScreen";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import LandingScreen from "./Screens/LandingScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingScreen />}></Route>
          <Route exact path="/book/:roomid/:fromDate/:toDate" element={<BookingScreen />}></Route>
          <Route exact path="/login" element={<LoginScreen />}></Route>
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
