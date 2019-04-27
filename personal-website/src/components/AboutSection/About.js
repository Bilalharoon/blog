import React from 'react';
import profilepic from '../../Assets/profile.jpg'
import './About.css'
import ScrollAnimation from 'react-animate-on-scroll'

const About = () => {
    return (
        <div className="container d-flex justify-content-center flex-column mt-5 scroll-here" id="section">
            <div className="row justify-content-center align-items-center ">
                <div className="col-sm">
                    <ScrollAnimation animateIn="rollIn">
                        <img className="img-fluid profile-pic"
                            src={profilepic} alt="" />
                    </ScrollAnimation>

                </div>
                <div className="col-sm d-flex align-items-center justify-content-center mt-5">
                    <ScrollAnimation animateIn="flipInX">
                        <p id="profile-text">Hello, World. My name is Bilal Haroon, I am a
                            15 years
                            old full stack developer, I love
                            creating software
                            and I specialize
                        in <em>ASP.NET Core</em> and <em>ReactJS</em></p>
                    </ScrollAnimation>

                </div>
            </div>

            <ScrollAnimation animateIn="slideInUp" delay={200}>
                <div className="row d-flex justify-content-center align-items-center mt-5">
                    <div className="col-sm">
                        <h1><a href="/blog-posts/0">Blog</a></h1>
                    </div>
                </div>
            </ScrollAnimation>

            <div className="row social-icons d-flex justify-content-around mt-5">

                <ScrollAnimation animateIn="slideInLeft" delay={400}>
                    <a href="https://github.com/Bilalharoon" target="_blank"><i className="fab fa-github"></i></a>
                </ScrollAnimation>
                <ScrollAnimation animateIn="slideInLeft" delay={400}>
                    <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
                </ScrollAnimation>
                <ScrollAnimation animateIn="slideInLeft" delay={400}>
                    <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
                </ScrollAnimation>


            </div>

        </div>

    )
}

export default About