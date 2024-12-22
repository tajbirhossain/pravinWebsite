import React from "react";
import '../components/styles/industries.css'
import buyrep from '../images/buyrep.jpg'

import a from '../images/report-cover-small.jpg'
import { Link } from "react-router-dom";

const Singlebook = ({ title, price, rating }) => {
    return (
        <div className="single-book">
            <img src={buyrep} alt="" />
            <span className="single-book-title">{title}</span>
            <div className="price-box">
                {/* <span className="small-price">US $5,900</span> */}
                <span className="big-price">US ${price}</span>
                <div className="starRating">
                    <div className="ratingWrap" style={{ width: `${((100 * Number(rating)) / 5)}%` }}>
                        <span>★★★★★</span>
                    </div>
                    <div className="emptyRating">
                        <span>★★★★★</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Singlebook