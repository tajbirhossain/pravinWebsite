import React from "react";
import '../components/styles/about.css'

import a from '../images/Clients-logo-images-final.jpg'


import b from '../images/group.png'
import c from '../images/chatting.png'
import d from '../images/world-wide-web.png'



const About = () => {
    return (
        <section className="about">
            <div className="aboutInside">
                <span>About Us</span>
                <p>Market and industry research and analysis to bring clients closer to their goals and visions in the best possible way.</p>
                <div className="about-wrap">
                    <div className="single-about">
                        <div className="worldd">
                            <img src={d} alt="" />
                        </div>
                        <h2 className="textMain">Global Expertise</h2>
                        <p>Extensive experience in conducting market research on a worldwide scale. A network of researchers and partners spanning diverse regions and markets.</p>
                    </div>
                    <div className="single-about">
                        <div className="worldd">
                            <img src={c} alt="" />
                        </div>
                        <h2 className="textMain">Industry Specialization Worldwide</h2>
                        <p>Specialized expertise across a wide range of industries and sectors on a global scale.
                            In-depth knowledge of industry-specific trends, challenges, and opportunities worldwide.</p>
                    </div>
                    <div className="single-about">
                        <div className="worldd">
                            <img src={b} alt="" />
                        </div>
                        <h2 className="textMain">Market Insights Across Borders</h2>
                        <p>Proven track record in providing actionable insights for businesses operating in various countries and regions.
                            Tailoring research methodologies to suit the unique characteristics of different markets.</p>
                    </div>
                </div>
                {/* <div className="about-btm">
                <h3>Our Clients</h3>
                <div className="payment">
                    <img src={a} alt="" />
                </div>
            </div> */}
            </div>
        </section>
    )
}

export default About