import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkdInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";
import { Router } from "react-router-dom";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
          <LinkdInIcon />
        </div>
        <p>&copy; 2022 jayentechpizza.com</p>


    
    </div>
  );
}

export default Footer;