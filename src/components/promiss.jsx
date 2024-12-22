import React, { useState } from "react";
import '../components/styles/promiss.css'

const Promiss = () => {



    const [index, setIndex] = useState(0)

    const handleClick = (id) => {
        setIndex(id)
    }


    return (
        <section className="promiss">
            <div className="promise-wrap">
                <div className="promise-left">
                    <h3>Sign up for discounts and promotions</h3>
                    <p>Register to receive the latest deals and updates via email.</p>
                    <form>
                        <input type="text" placeholder="Enter your Busniess Email" />
                        <button>SIGN UP</button>
                    </form>
                </div>
                <div className="promise-right">
                    <h4>Subscribe</h4>
                    <div className="subscribe-wrap">
                        <div className={index === 0 ? "single-subscribe unicque" : "single-subscribe"} onClick={() => handleClick(0)}>
                            <div className="month-days">
                                <h2>3</h2>
                                <span>MONTHS</span>
                            </div>
                            <p>Quarterly</p>
                        </div>
                        <div className={index === 1 ? "single-subscribe unicque" : "single-subscribe"} onClick={() => handleClick(1)}>
                            <div className="month-days">
                                <h2>6</h2>
                                <span>MONTHS</span>
                            </div>
                            <p>Half Year</p>
                        </div>
                        <div className={index === 2 ? "single-subscribe unicque" : "single-subscribe"} onClick={() => handleClick(2)}>
                            <div className="month-days">
                                <h2>12</h2>
                                <span>MONTHS</span>
                            </div>
                            <p>Annual Subscription</p>
                        </div>
                    </div>
                    <button>Subscribe Now</button>
                </div>
            </div>
        </section>
    )
}


export default Promiss