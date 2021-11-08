import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Home from "./Home";
import LogIn from "./userforms/LogIn";
import SignUp from "./userforms/SignUp";
import UserProfile from "./profiles/UserProfile";
import NavBar from "./navbar/NavBar";
import GuitarChord from "./chords/GuitarChord";

it("renders without crashing", function() {
  render(<App />);
});

it("renders the home page", function(){
  render(<Home />);
});

it("renders the login page", function(){
  render(<LogIn />);
})

it("renders the signup page", function(){
  render(<SignUp />);
});