import React from 'react'

const Hero = () => {
  return (
    <>
    <div class="herosection">
        <div class="background">
            <img src="./src/assets/hero-section-img.jpg" alt="hero-section-img"/>
        </div>
        <div class="left">
            <div class="left-content-1">
                <p>PROFESSIONAL FITNESS COACH</p>
                <h1><span>Transform with</span> <br/> a Fitness Expert</h1>
            </div>
            <div class="left-content-2">
                <p>We will develop for you a unique nutrition program for weight <br/> loss and positive tone of the whole body</p>
                <button class="btn">Get Now</button>
            </div>
        </div>
        <div class="right">

        </div>
        <div className="go-top">
            <a href="navbar.jsx"></a>
        </div>
    </div>
    
    </>
  )
}

export default Hero