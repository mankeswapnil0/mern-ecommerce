import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function About() {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>
        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://media.licdn.com/dms/image/C4D03AQEF1XYXmix47A/profile-displayphoto-shrink_100_100/0/1664209361993?e=1683158400&v=beta&t=LMaf0ysuUDQprDhMeR2Q5vJDkBZvswWFKaPST1VCC3U"
              alt="Founder"
            />

            <Typography>Swapnil Manke</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample Ecommerce Website made by @SwapnilManke.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">My Socials</Typography>
            <a href="https://www.linkedin.com/in/swapnil-manke-3aa8821a1/" target="blank">
              <LinkedInIcon className="linkedInSvg" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="blank"
            >
              <InstagramIcon className="instagramSvg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
