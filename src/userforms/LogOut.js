import React from "react";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

function LogOut({ logout }) {
  useEffect(() => {
    logout();
  }, []);
  <Alert>
  This is an alert—check it out!
  </Alert>
  return <Redirect to="/" />;
}

export default LogOut;