import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css";
import Link from '@material-ui/core/Link';
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
        <Link href='https://www.instagram.com/_b3ing_zaheer_/' target="_blank"><InstagramIcon/></Link>
        <Link href='https://www.linkedin.com/in/zaheerkhan-mokashi/' target="_blank"><LinkedInIcon/></Link>
        <Link href='https://github.com/Bugger0' target="_blank"><GitHubIcon/></Link>
        <EmailIcon/>
          </div>
            <p>
              &copy; 2022 zk.com  
            </p>
      
    </div>
  )
}

export default Footer