import React from 'react'
import Fade from 'react-reveal/Fade';
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";



const Hero = () => {
    return (
        <section className="hero">
            <Fade bottom >
                <div>
                    <span className="hero-span">Hello! my name is</span>
                    <h1>Jigar Patel</h1>
                    <h2>Software Developer</h2>
                </div>
                <div className="social">
                    <a href="https://github.com/jigarp4tel" target="_blank" rel="noreferrer"><FaGithub className="social-icon" /></a>
                    <a href="https://www.linkedin.com/in/jigarp4tel" target="_blank" rel="noreferrer"><FaLinkedinIn className="social-icon" /></a>
                    <a href="https://twitter.com/jigarp4tel" target="_blank" rel="noreferrer"><FaTwitter className="social-icon" /></a>
                </div>
            </Fade>
        </section>
    )
}

export default Hero
