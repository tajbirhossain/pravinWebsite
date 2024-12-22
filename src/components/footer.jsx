import React from "react";
import '../components/styles/footer.css'

import a from '../images/pin.png'
import e from '../images/phone.png'
import f from '../images/mail.png'



import b from '../images/facebook-app-symbol.png'
import c from '../images/twitter.png'
import d from '../images/linkedin.png'


import p from '../images/paymentgateway_02_wb.png'
import { Link } from "react-router-dom";
import paymentSelect from '../images/payment-select.jpeg'

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-wrap">
                    <div className="footerWrapInside">
                        <div className="single-footer">
                            <div className="single-contact">
                                <img src={a} alt="" />
                                <p>5665 W. Wilshire Blvd, Los Angeles, CA 90036, United States</p>
                            </div>
                            <a href="tel:+1 415 799 9002">
                                <div className="single-contact">
                                    <img src={e} alt="" />
                                    <p>+1 415 799 9002 (International)</p>
                                </div>
                            </a>
                            <a href="mailto:sales@absolutemarketresearch.com">
                                <div className="single-contact">
                                    <img src={f} alt="" />
                                    <p>sales@absolutemarketresearch.com</p>
                                </div>
                            </a>
                            <div className="social-list">
                                <ul>
                                    {/* <li><Link to={"/"}><img src={b} alt="" /></Link></li> */}
                                    <li><a href="https://twitter.com/Absoluteoutlook"><img src={c} alt="" /></a></li>
                                    <li><a href="https://www.linkedin.com/company/absolute-market-research-insight/"><img src={d} alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="single-footer">
                            <h3>Find Help</h3>
                            <ul className="cont-list">
                                <li><Link to={"/contact-us"}>Contact Us</Link></li>
                                <li><Link to={"/contact-us"}>How to Order</Link></li>
                                <li><Link to={"/privacy-policy"}>Privacy Policy</Link></li>
                            </ul>
                            {/* <h3 className="unic">Legal</h3>
                        <ul className="cont-list">
                            <li><Link to={"/"}>Privacy Policy</Link></li>
                            <li><Link to={"/"}>Refund Policy</Link></li>
                            <li><Link to={"/"}>Frequently Asked Questions</Link></li>
                            <li><Link to={"/"}>Terms and Conditions</Link></li>
                        </ul> */}
                        </div>
                        <div className="single-footer">
                            <h3>Explore</h3>
                            <ul className="cont-list">
                                <li><Link to={"/about-us"}>About Us</Link></li>
                                <li><Link to={"/"}>All Reports</Link></li>
                                <li><Link to={"/"}>All Sectors</Link></li>
                                {/* <li><Link to={"/"}>Infographics</Link></li>
                            <li><Link to={"/"}>Statistics and Facts</Link></li>
                            <li><Link to={"/"}>Companies</Link></li>
                            <li><Link to={"/"}>Report Library</Link></li> */}
                            </ul>
                        </div>
                        <div className="single-footer footo">
                            <h3>Secured Payment Options</h3>
                            <div className="payments">
                                <img src={paymentSelect} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-btn">
                <div className="footerBtnInside">
                    <p>© 2024 <Link to={"/"}>Absolute Market Research.</Link> All Rights Reserved.</p>

                    <span id="siteseal"><script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=DQI3b5mks4XjZxuVfg0uKklU2lxNzY95SdURMttqHBjzQSeqJc4ipKz3SLyv"></script></span>
                </div>
            </div>
        </footer>
    )
}


export default Footer