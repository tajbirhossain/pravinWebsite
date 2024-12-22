import React, { useEffect, useState } from "react";
import '../components/styles/header.css'

import a from '../images/mail.png'
import b from '../images/phone.png'

import l from '../images/logo-white.svg'

import i from '../images/down-arrow.png'
import { Link, useNavigate } from "react-router-dom";


import m from '../images/menu.png'
import se from '../images/search.png'
import d from '../images/dots.png'

import absoluteLogo from '../images/absolute-new-logo-1.png'
import axios from "axios";

const Header = ({ isOnPlace, handleSearch, inpVal, handleSetVal }) => {

    const [headtop, setHeadtop] = useState(false)
    const [forms, setForms] = useState(true)
    const [storeCat, setStoreCat] = useState([])

    const [nav, setNav] = useState(false)

    const navigate = useNavigate()


    useEffect(() => {
        axios.get(process.env.REACT_APP_ALL_CATEGORIES_API).then(res => {
            //console.log(res.data);
            setStoreCat(res.data)
        })
    }, [])


    const threedot = () => {
        setHeadtop(prev => !prev)
        setForms(true)
        setNav(false)
    }



    const froms = () => {
        setForms(prev => !prev)
        setHeadtop(false)
        setNav(false)
    }


    const nabbars = () => {
        setNav(prev => !prev)
        setForms(true)
        setHeadtop(false)
    }


    const handleGoAndSearch = (e) => {
        e.preventDefault()
        inpVal && navigate(`/search?title=${inpVal}`)
    }






    return (
        <header className="bgMain">
            <div className="header-top-container">
                <div className="header-top" style={{ right: headtop ? "0px" : "-320px" }}>
                    <div className="header-top-inside">
                        <a href="mailto:sales@absolutemarketresearch.com">
                            <div className="single-contactlist">
                                <img src={a} alt="" />
                                <p>sales@absolutemarketresearch.com</p>
                            </div>
                        </a>
                        <a href="tel:+1 415 799 9002">
                            <div className="single-contactlist">
                                <img src={b} alt="" />
                                <p>+1 415 799 9002 (International)</p>
                            </div>
                        </a>
                    </div>
                    <div className="list-container" style={{ left: nav ? "0px" : "-251px" }}>
                        <nav>
                            <ul className="first-list">
                                <li><Link to={"/"}>Home</Link></li>
                                <li><Link to={"/all-report"}>All Reports</Link></li>
                                <li className="main-listsss"><Link>All Sectors <img className="fhdfnr" src={i} alt="" /></Link>
                                    <ul className="header-category">
                                        {
                                            storeCat.map((val, i) => {
                                                const removedSpaceName = val.categoryName.replaceAll(" ", "-")
                                                return <li key={i}><Link to={`/category/${removedSpaceName}`}>{val.categoryNameWithReportCount}</Link></li>
                                            })
                                        }
                                    </ul>
                                    {/* <div className="links-container">
                                        <div className="box-links">
                                            <h5><Link to={"/category/chemical-material"}>Chemicals & Materials</Link></h5>
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
                                    </div> */}
                                </li>
                                <li><Link to={"/about-us"}>About Us</Link></li>
                                <li><Link to={"/contact-us"}>Contact Us</Link></li>
                                <li><Link to={"/privacy-policy"}>Privacy Policy</Link></li>
                                {/* <li><Link to={"/"}>Report Library</Link></li> */}
                                {/* <li><Link to={"/"}>Who Trust Us</Link></li> */}
                                {/* <li><Link className="animation" to={"/"}>Datafeature</Link></li> */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="header-btn">
                <div className="header-btn-inside">
                    <img className="mune" src={m} alt="" onClick={nabbars} />
                    <Link to={"/"}>
                        <img className="companny" src={absoluteLogo} alt="" />
                    </Link>
                    {/* <Link className="headerLogo" to={"/"}>
                        <h2>Absolute</h2>
                        <span>Market Research</span>
                    </Link> */}
                    <div className="header-right">
                        <div className="header-forms" style={{ display: forms ? "none" : "block" }}>
                            <form onSubmit={isOnPlace ? handleSearch : handleGoAndSearch}>
                                <input type="text" placeholder="Search Query" value={inpVal} onChange={handleSetVal} />
                                <button>SEARCH</button>
                            </form>
                        </div>
                        <div className="header-forms fsfs">
                            <form onSubmit={isOnPlace ? handleSearch : handleGoAndSearch}>
                                <input type="text" placeholder="Search Query" value={inpVal} onChange={handleSetVal} />
                                <button className="textMain">SEARCH</button>
                            </form>
                        </div>
                    </div>
                    <div className="shoutkhut">
                        <img className="munee" src={se} alt="" onClick={froms} />
                        <img className="mune" src={d} alt="" onClick={threedot} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header