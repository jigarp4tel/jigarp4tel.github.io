import React from 'react';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <section className="about" id="about">
            <h3 className="section-title">About</h3>
            <Fade bottom cascade>
                <div className="about-description">
                    <p>Hello! I'm Jigar an aspiring fullstack developer from India currently based in Winnipeg, Canada.</p>
                    <p>
                        I’m technology geek and enthusiast who loves to solve problems and fix things with technology.
                        I’m interested in building apps and websites that look good, and make people's lives easier. I love learning new things, and solving problems!
                    </p>
                    <p>My previous work focused primarily on use of Java, Spring Boot , SQL and Unix. In recent years, I've been focused on programming, building a solid frontend stack and creating exciting projects that solve real-world problems.</p>
                    <p>In my spare time I'm either coding, playing games on my PC and playing or watching football (soccer)</p>
                    <p>Take a look at <span className="link" onClick={() => {
                        document.getElementById('projects').scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        })
                    }}><strong>my work</strong></span> below to see what I'm working on, and get in touch if you'd like to work together!</p>
                </div>
            </Fade>
        </section>
    )
}

export default About
