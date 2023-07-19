import React from 'react'
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialBehance, SlSocialLinkedin, SlSocialInstagram,SlSocialYoutube } from "react-icons/sl";
const Footer = ({theme}) => {
    return (
        <div className="center-div">
            <div className='footer'>
                <div className='footer__head'>Follow me</div>
                <div className='footer__links'>
                    <a className={`socials i${theme}`}><VscGithubAlt/></a>
                    <a className={`socials i${theme}`}><SlSocialBehance/></a>
                    <a className={`socials i${theme}`}><SlSocialLinkedin/></a>
                    <a className={`socials i${theme}`}><SlSocialInstagram/></a>
                    <a className={`socials i${theme}`}><SlSocialYoutube/></a>
                </div>
                <div className='footer__foot'><span>&#169;</span>{new Date().getFullYear()} React & SCSS Portfolio. ARPANA</div>
            </div>
        </div>
    )
}

export default Footer