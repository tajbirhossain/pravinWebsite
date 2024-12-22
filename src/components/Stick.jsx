import React, { useEffect, useState } from "react";
import '../components/styles/stick.css'
import s from '../images/logo-dark.svg'

import i from '../images/down-arrow.png'
import { Link } from "react-router-dom";


const Stick = () => {
    const [scroollposition, setScrollposition] = useState(true)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 90) {
                setScrollposition(false)
            } else {
                setScrollposition(true)
            }
        })
    }, [])
    return (
        <div className="header-btn whiyer" style={{ top: scroollposition ? "-250px" : "0px" }}>
            <img className="companny" src={s} alt="" />
            <div className="header-right">
                <div className="list-container">
                    <nav>
                        <ul className="first-list kjhgfgd">
                            <li><Link to={"/"}>All Reports</Link></li>
                            <li className="main-listsss"><Link to={"/"}>All Sectors <img src={i} alt="" /></Link>
                                <div className="links-container">
                                    <div className="box-links">
                                        <h5><Link to={"/"}>Chemicals & Materials</Link></h5>
                                        <ul className="all-links">
                                            <li><Link to={"/"}>Advanced Materials</Link></li>
                                            <li><Link to={"/"}>Bulk Chemicals</Link></li>
                                            <li><Link to={"/"}>Coatings | Paints and Additives</Link></li>
                                            <li><Link to={"/"}>Composites</Link></li>
                                            <li><Link to={"/"}>Renewable | Speciality chemicals</Link></li>
                                            <li><Link to={"/"}>Advanced Materials</Link></li>
                                        </ul>
                                    </div>
                                    <div className="box-links">
                                        <h5><Link to={"/"}>Consumer Goods</Link></h5>
                                        <ul className="all-links">
                                            <li><Link to={"/"}>Baby Products</Link></li>
                                            <li><Link to={"/"}>Consumer Electronics</Link></li>
                                            <li><Link to={"/"}>Consumer Packaging</Link></li>
                                            <li><Link to={"/"}>Cosmetics & Personal Care</Link></li>
                                            <li><Link to={"/"}>Homecare & Decor</Link></li>
                                            <li><Link to={"/"}>Luxury & premium products</Link></li>
                                        </ul>
                                    </div>
                                    <div className="box-links">
                                        <h5><Link to={"/"}>Energy and Power</Link></h5>
                                        <ul className="all-links">
                                            <li><Link to={"/"}>Advanced Materials</Link></li>
                                            <li><Link to={"/"}>Bulk Chemicals</Link></li>
                                            <li><Link to={"/"}>Coatings | Paints and Additives</Link></li>
                                            <li><Link to={"/"}>Composites</Link></li>
                                            <li><Link to={"/"}>Renewable | Speciality chemicals</Link></li>
                                            <li><Link to={"/"}>Advanced Materials</Link></li>
                                        </ul>
                                    </div>
                                    <div className="box-links">
                                        <h5><Link to={"/"}>Life Science</Link></h5>
                                        <ul className="all-links">
                                            <li><Link to={"/"}>Baby Products</Link></li>
                                            <li><Link to={"/"}>Consumer Electronics</Link></li>
                                            <li><Link to={"/"}>Consumer Packaging</Link></li>
                                            <li><Link to={"/"}>Cosmetics & Personal Care</Link></li>
                                            <li><Link to={"/"}>Homecare & Decor</Link></li>
                                            <li><Link to={"/"}>Luxury & premium products</Link></li>
                                        </ul>
                                    </div>
                                    <div className="box-links">
                                        <h5><Link to={"/"}>Food and Beverage</Link></h5>
                                        <ul className="all-links">
                                            <li><Link to={"/"}>Baby Products</Link></li>
                                            <li><Link to={"/"}>Consumer Electronics</Link></li>
                                            <li><Link to={"/"}>Consumer Packaging</Link></li>
                                            <li><Link to={"/"}>Cosmetics & Personal Care</Link></li>
                                            <li><Link to={"/"}>Homecare & Decor</Link></li>
                                            <li><Link to={"/"}>Luxury & premium products</Link></li>
                                        </ul>
                                    </div>
                                    <div className="box-links">
                                        <h5><Link to={"/"}>Automotive and Transportation</Link></h5>
                                        <ul className="all-links">
                                            <li><Link to={"/"}>Advanced Materials</Link></li>
                                            <li><Link to={"/"}>Bulk Chemicals</Link></li>
                                            <li><Link to={"/"}>Coatings | Paints and Additives</Link></li>
                                            <li><Link to={"/"}>Composites</Link></li>
                                            <li><Link to={"/"}>Renewable | Speciality chemicals</Link></li>
                                            <li><Link to={"/"}>Advanced Materials</Link></li>
                                        </ul>
                                    </div>
                                    <div className="box-links">
                                        <h5><Link to={"/"}>Information and Communications Technology</Link></h5>
                                        <ul className="all-links">
                                            <li><Link to={"/"}>Baby Products</Link></li>
                                            <li><Link to={"/"}>Consumer Electronics</Link></li>
                                            <li><Link to={"/"}>Consumer Packaging</Link></li>
                                            <li><Link to={"/"}>Cosmetics & Personal Care</Link></li>
                                            <li><Link to={"/"}>Homecare & Decor</Link></li>
                                            <li><Link to={"/"}>Luxury & premium products</Link></li>
                                        </ul>
                                    </div>
                                    <div className="box-links">
                                        <h5><Link to={"/"}>Semiconductor and Electronics</Link></h5>
                                        <ul className="all-links">
                                            <li><Link to={"/"}>Advanced Materials</Link></li>
                                            <li><Link to={"/"}>Bulk Chemicals</Link></li>
                                            <li><Link to={"/"}>Coatings | Paints and Additives</Link></li>
                                            <li><Link to={"/"}>Composites</Link></li>
                                            <li><Link to={"/"}>Renewable | Speciality chemicals</Link></li>
                                            <li><Link to={"/"}>Advanced Materials</Link></li>
                                        </ul>
                                    </div>
                                    <div className="box-links">
                                        <h5><Link to={"/"}>Building and Construction</Link></h5>
                                        <ul className="all-links">
                                            <li><Link to={"/"}>Baby Products</Link></li>
                                            <li><Link to={"/"}>Consumer Electronics</Link></li>
                                            <li><Link to={"/"}>Consumer Packaging</Link></li>
                                            <li><Link to={"/"}>Cosmetics & Personal Care</Link></li>
                                            <li><Link to={"/"}>Homecare & Decor</Link></li>
                                            <li><Link to={"/"}>Luxury & premium products</Link></li>
                                        </ul>
                                    </div>
                                    <div className="box-links">
                                        <h5><Link to={"/"}>Manufacturing</Link></h5>
                                        <ul className="all-links">
                                            <li><Link to={"/"}>Baby Products</Link></li>
                                            <li><Link to={"/"}>Consumer Electronics</Link></li>
                                            <li><Link to={"/"}>Consumer Packaging</Link></li>
                                            <li><Link to={"/"}>Cosmetics & Personal Care</Link></li>
                                            <li><Link to={"/"}>Homecare & Decor</Link></li>
                                            <li><Link to={"/"}>Luxury & premium products</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li><Link to={"/"}>Report Library</Link></li>
                            <li><Link to={"/"}>Who Trust Us</Link></li>
                            <li><Link to={"/"}>Datafeature</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Stick