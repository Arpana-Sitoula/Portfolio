import React from 'react'
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialBehance, SlSocialLinkedin, SlSocialInstagram,SlSocialYoutube } from "react-icons/sl";
const Footer = () => {
    return (
        <div className="center-div">
            <div className='footer'>
                <div className='footer__head'>Follow me</div>
                <div className='footer__links'>
                    <a className='socials ilight'><VscGithubAlt/></a>
                    <a className='socials ilight'><SlSocialBehance/></a>
                    <a className='socials ilight'><SlSocialLinkedin/></a>
                    <a className='socials ilight'><SlSocialInstagram/></a>
                    <a className='socials ilight'><SlSocialYoutube/></a>
                </div>
                <div className='footer__foot'><span>&#169;</span>{new Date().getFullYear()} React & SCSS Portfolio. NIRVANA</div>
            </div>
        </div>
    )
}

export default Footer