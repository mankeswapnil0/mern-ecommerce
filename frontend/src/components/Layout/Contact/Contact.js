import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

function Contact() {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:mankeswapnil0@gmail.com" target="blank">
        <Button>Contact: mankeswapnil0@gmail.com</Button>
      </a>
    </div>
  );
}

export default Contact;
