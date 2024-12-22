import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import '../components/styles/industries.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import a from '../images/report-cover-small.jpg'
import { Link, NavLink } from "react-router-dom";
import Singlebook from "./Singlebook";
import axios from "axios";
import SingleReportItem from "./SingleReportItem";

const Industries = ({ storeSearch }) => {
    const [storeRep, setStoreRep] = useState([])
    const [storeRepRefer, setStoreRepRefer] = useState([])
    const [preLoad, setPreLoad] = useState(true)
    const [bigLoad, setBigLoad] = useState(false)
    const [storeCat, setStoreCat] = useState([])

    useEffect(() => {
        axios.get(process.env.REACT_APP_REPORTS_HOME_PAGE_API).then(res => {
            //console.log(res.data);
            // setStoreRep(res.data.reports)
            setStoreRep(res.data)
            setStoreRepRefer(res.data)
            setPreLoad(false)
        }).catch(err => {
            console.log(err);
        })

        axios.get(process.env.REACT_APP_ALL_CATEGORIES_API).then(res => {
            //console.log(res.data);
            setStoreCat(res.data)
        })
    }, [])

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    const handleCategory = e => {
        const callReports = () => {
            setBigLoad(true)
            axios.get(`${process.env.REACT_APP_GET_REPORTS_BY_CATEGORY_API}=${e.target.value}`).then(res => {
                console.log(res);
                setStoreRep(res.data)
                setBigLoad(false)
            }).catch(err => {
                console.log(err);
                setBigLoad(false)
            })
        }
        e.target.value !== "all industry" ? callReports() : setStoreRep(storeRepRefer)
    }


    const mapConf = storeSearch.length > 0 ? storeSearch : storeRep


    return (
        <section className="industries">
            <div className="industriesInside">
                <div className="industries-top">
                    <h2>All Report list</h2>
                    <select name="selectCategory" id="selectCategory" onChange={e => handleCategory(e)}>
                        <option value="all industry">All Industry</option>
                        {
                            storeCat.map((val, i) => {
                                return <option value={val.categoryName} key={i}>{val.categoryNameWithReportCount}</option>
                            })
                        }
                    </select>
                </div>
                <div className="industries-btn">
                    <div className="preloading" style={{ display: preLoad ? "block" : "none" }}>
                        <h2>Loading...</h2>
                    </div>
                    {
                        mapConf.slice(0, 5).map((val, i) => {
                            return (
                                <SingleReportItem val={val} i={i} />
                            )
                        })
                    }
                    <button className="loadMoreRep bgMain"><Link to={'/all-report'}>View More Reports</Link></button>
                </div>
                {
                    bigLoad && <div className="bigLoad"><h2>Please wait...</h2></div>
                }
            </div>
        </section>
    )
}

export default Industries