import React from "react";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";

function LogOut({ logout }) {
  useEffect(() => {
    logout();
  }, []);
  return <Redirect to="/" />;
}

export default LogOut;