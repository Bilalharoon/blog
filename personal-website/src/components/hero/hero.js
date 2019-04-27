import React from 'react'
import arrow from '../../Assets/arrow.png'
import './hero.css'

const Hero = (props) => {
    return (
        <div className="hero-image container-fluid">

            <h1>Bilal Haroon</h1>
            <img id="arrow" src={arrow} onClick={clickHandler} className="img-fluid" alt="" />
        </div>
    )
}

const clickHandler = () => {
    document.querySelector(".scroll-here").scrollIntoView({ behavior: "smooth" })
}

export default Hero