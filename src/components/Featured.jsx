import React from "react";
import '../components/styles/featured.css'
import a from '../images/Entrepreneur_logo.png'
import b from '../images/Shopify_Logo.png'
import c from '../images/business-insider.png'
import d from '../images/cnbc.png'
import e from '../images/hubspot.png'

const Featured = () => {
    return (
        <section className="featured">
            <h3>Featured On</h3>
            <div className="images-wrap">
                <div className="images">
                    <img src={e} alt="" />
                </div>
                <div className="images">
                    <img src={a} alt="" />
                </div>
                <div className="images">
                    <img src={c} alt="" />
                </div>
                <div className="images">
                    <img src={b} alt="" />
                </div>
                <div className="images">
                    <img src={d} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Featured