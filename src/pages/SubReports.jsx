import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import { Link, NavLink, useLocation } from 'react-router-dom';
import leftArrow from '../images/left-arrow.png'
import rightArrow from '../images/right-arrow.png'
import '../components/styles/subReports.css'
import Header from '../components/Header'
import Footer from '../components/footer'
import SingleReportItem from '../components/SingleReportItem';


import autoMobileImg from '../images/Absolute Icons/cogwheels_3312804_Automobile.png'
import autoMotiveImg from '../images/Absolute Icons/electric-car_3899398_Automotive.png'
import chemicalImg from '../images/Absolute Icons/oil_2082579_chemicals.png'
import electronicsImg from '../images/Absolute Icons/cpu_7058541_electronics.png'
import energyImg from '../images/Absolute Icons/green-energy_2511541.png'
import equipmentImg from '../images/Absolute Icons/toolbox_1657068_equipments.png'
import instrumentImg from '../images/Absolute Icons/amperemeter_6153178_instrumentation.png'
import pharmaImg from '../images/Absolute Icons/drugs_2800970_pharma.png'
import consumerImg from '../images/Absolute Icons/consumer_goods.png'
import foodImg from '../images/Absolute Icons/food-drink.png'
import machineImg from '../images/Absolute Icons/machine.png'
import materialImg from '../images/Absolute Icons/material.png'
import medicalImg from '../images/Absolute Icons/medical_care.png'
import medicalDeviceImg from '../images/Absolute Icons/medicaldevices.png'
import pharmaceuticalImg from '../images/Absolute Icons/drugs_2800970_pharma.png'
import serviceImg from '../images/Absolute Icons/service.png'
import softwareImg from '../images/Absolute Icons/software.png'
import { Pagination } from '@mui/material';


const itemsPerPage = 20
const SubReports = () => {
    const [storeRep, setStoreRep] = useState([])
    const [storeRepRefer, setStoreRepRefer] = useState([])
    const [storeCat, setStoreCat] = useState([])
    const [pageCount, setPageCount] = useState(1)
    const [currentPage, setCurrentPage] = useState(1);

    const [storeSearch, setStoreSearch] = useState([])
    const [inpVal, setInpVal] = useState("")
    const [preLoad, setPreLoad] = useState(true)

    const allReportRef = useRef()

    const location = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })

        const categoryNameReplaced = location.pathname.split("/")[2].replaceAll("-", "%20")
        const categoryName = categoryNameReplaced.replaceAll("&", "%26")
        axios.get(`${process.env.REACT_APP_GET_REPORTS_BY_CATEGORY_API}=${categoryName}`).then(res => {
            //console.log(res.data);
            // setStoreRep(res.data.reports)
            setStoreRep(res.data)
            // setStoreRepRefer(res.data.reports.slice(0, 20))
            setStoreRepRefer(res.data.slice(0, 20))
            setPreLoad(false)
        }).catch(err => {
            console.log(err);
        })


        axios.get(process.env.REACT_APP_ALL_CATEGORIES_API).then(res => {
            setStoreCat(res.data);
        }).catch(err => {
            console.log(err);
        })


    }, [location.pathname])


    const mapConf = storeSearch.length > 0 ? storeSearch : storeRep
    function scrollToTopOfSection() {
        window.scrollTo({
            top: 300,
            behavior: 'smooth',
        });
    }


    const items = mapConf;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        scrollToTopOfSection()
    };
    // const pageIncrement = () => {
    //     console.log(pageCount);
    //     setPageCount(prev => prev + 1)
    //     const pageCountInsider = pageCount + 1
    //     const countCalcutate = (pageCountInsider - 1) * 20
    //     const copyOfStoreRep = [...storeRep];
    //     const cutReport = copyOfStoreRep.splice(countCalcutate, 20)
    //     setStoreRepRefer(cutReport)
    //     scrollToTopOfSection()
    // }
    // const pageDecrement = () => {
    //     if (pageCount <= 1) {
    //         return
    //     }
    //     console.log(pageCount);
    //     setPageCount(prev => prev - 1)
    //     const pageCountInsider = pageCount - 1
    //     const countCalcutate = (pageCountInsider - 1) * 20
    //     const copyOfStoreRep = [...storeRep];
    //     const cutReport = copyOfStoreRep.splice(countCalcutate, 20)
    //     setStoreRepRefer(cutReport)
    //     scrollToTopOfSection()
    // }



    const handleSearch = (e) => {
        e.preventDefault()
        inpVal ? axios.get(`${process.env.REACT_APP_SEARCH_BY_TITLE_API}=${inpVal}`).then(res => {
            // console.log(res.data.reports);
            // setStoreSearch(res.data.reports)
            //console.log(res.data);
            setStoreSearch(res.data)
        }) : setStoreSearch([])
    }
    const handleSetVal = (e) => {
        setInpVal(e.target.value)
        e.target.value.trim().length === 0 && setStoreSearch([])
    }


    const imgLookup = [
        autoMobileImg,
        autoMotiveImg,
        chemicalImg,
        chemicalImg,
        consumerImg,
        electronicsImg,
        energyImg,
        equipmentImg,
        foodImg,
        instrumentImg,
        machineImg,
        materialImg,
        medicalImg,
        medicalDeviceImg,
        pharmaImg,
        pharmaceuticalImg,
        serviceImg,
        softwareImg,
    ]




    return (
        <div className='subReports'>
            <Header isOnPlace={false} handleSearch={handleSearch} inpVal={inpVal} handleSetVal={handleSetVal} />
            <main className='reportMain'>
                <h1>All Market Report list</h1>
                <div className="reportsWrap">
                    <div className="reportLeft">
                        <div className="repTopTitle">
                            <h3>Report Categories</h3>
                        </div>
                        <ul>
                            {
                                storeCat.map((val, i) => {
                                    const removedSpaceName = val.categoryName.replaceAll(" ", "-")
                                    return (
                                        <li key={i}>
                                            <img src={imgLookup[i]} alt="" />
                                            <Link to={`/category/${removedSpaceName}`}>{val.categoryNameWithReportCount}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="reportRight">
                        <div className="preloading" style={{ display: preLoad ? "block" : "none" }}>
                            <h2>Loading...</h2>
                        </div>
                        {
                            currentItems && currentItems.map((val, i) => {
                                return (
                                    <SingleReportItem val={val} i={i} />
                                )
                            })
                        }

                        {/* {
                            storeRep.length > 0 &&
                            <div className="pageWrap">
                                <span onClick={pageDecrement}><img src={leftArrow} alt="" /></span>
                                <span>{pageCount}</span>
                                <span onClick={pageIncrement}><img src={rightArrow} alt="" /></span>
                            </div>
                        } */}
                        <p style={{ marginBottom: '10px', marginLeft: '12px', fontSize: '14px'}}>Total Records: {mapConf.length}</p>
                        <Pagination
                            count={Math.ceil(items.length / itemsPerPage)}
                            page={currentPage}
                            onChange={handlePageChange}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default SubReports