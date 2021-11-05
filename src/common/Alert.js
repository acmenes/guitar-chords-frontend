import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

/** Presentational component for showing bootstrap-style alerts.
 *
 * { LoginForm, SignupForm, ProfileForm } -> Alert
 **/

 function AlertDismissible() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>You got an error!</Alert.Heading>
        <p>
          This is an error message!
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

// render(<AlertDismissible />);

export default AlertDismissible;
