import React, { useEffect, useState } from "react";
import '../components/styles/banner.css'
import { Link } from "react-router-dom";
import axios from "axios";
import autoMobileImg from '../images/Absolute Icons/cogwheels_3312804_Automobile.png'
import autoMotiveImg from '../images/Absolute Icons/electric-car_3899398_Automotive.png'
import chemicalImg from '../images/Absolute Icons/oil_2082579_chemicals.png'
import electronicsImg from '../images/Absolute Icons/cpu_7058541_electronics.png'
import energyImg from '../images/Absolute Icons/green-energy_2511541.png'
import equipmentImg from '../images/Absolute Icons/toolbox_1657068_equipments.png'
import instrumentImg from '../images/Absolute Icons/amperemeter_6153178_instrumentation.png'
import pharmaImg from '../images/Absolute Icons/drugs_2800970_pharma.png'


const Banner = () => {
    const [storeCat, setStoreCat] = useState([])
    useEffect(() => {
        axios.get(process.env.REACT_APP_CATEGORY_HOME_PAGE_API).then(res => {
            setStoreCat(res.data);
            //console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    const imgLookup = [
        autoMobileImg,
        autoMotiveImg,
        chemicalImg,
        electronicsImg,
        energyImg,
        equipmentImg,
        instrumentImg,
        pharmaImg,
    ]

    return (
        <section className="banner bgMain">
            <div className="banner-wp">
                <div className="banner-wrap">
                    <span>BROWSE BY INDUSTRY</span>
                    <div className="ssww">
                        {
                            storeCat.map((val, i) => {
                                return (
                                    <Link to={`/category/${val.categoryName.replaceAll(" ", "-")}`} key={i}>
                                        <div className="singlle-medias">
                                            {/* <img src={val.categoryImageURL} alt="" /> */}
                                            <img src={imgLookup[i]} alt="" />
                                            <p>{val.categoryName}</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                        {/* <Link to={"/"}>
                            <div className="singlle-medias">
                                <svg xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 0 24 24" width="34"><path d="M15.9,18.45C17.25,18.45 18.35,17.35 18.35,16C18.35,14.65 17.25,13.55 15.9,13.55C14.54,13.55 13.45,14.65 13.45,16C13.45,17.35 14.54,18.45 15.9,18.45M21.1,16.68L22.58,17.84C22.71,17.95 22.75,18.13 22.66,18.29L21.26,20.71C21.17,20.86 21,20.92 20.83,20.86L19.09,20.16C18.73,20.44 18.33,20.67 17.91,20.85L17.64,22.7C17.62,22.87 17.47,23 17.3,23H14.5C14.32,23 14.18,22.87 14.15,22.7L13.89,20.85C13.46,20.67 13.07,20.44 12.71,20.16L10.96,20.86C10.81,20.92 10.62,20.86 10.54,20.71L9.14,18.29C9.05,18.13 9.09,17.95 9.22,17.84L10.7,16.68L10.65,16L10.7,15.31L9.22,14.16C9.09,14.05 9.05,13.86 9.14,13.71L10.54,11.29C10.62,11.13 10.81,11.07 10.96,11.13L12.71,11.84C13.07,11.56 13.46,11.32 13.89,11.15L14.15,9.29C14.18,9.13 14.32,9 14.5,9H17.3C17.47,9 17.62,9.13 17.64,9.29L17.91,11.15C18.33,11.32 18.73,11.56 19.09,11.84L20.83,11.13C21,11.07 21.17,11.13 21.26,11.29L22.66,13.71C22.75,13.86 22.71,14.05 22.58,14.16L21.1,15.31L21.15,16L21.1,16.68M6.69,8.07C7.56,8.07 8.26,7.37 8.26,6.5C8.26,5.63 7.56,4.92 6.69,4.92A1.58,1.58 0 0,0 5.11,6.5C5.11,7.37 5.82,8.07 6.69,8.07M10.03,6.94L11,7.68C11.07,7.75 11.09,7.87 11.03,7.97L10.13,9.53C10.08,9.63 9.96,9.67 9.86,9.63L8.74,9.18L8,9.62L7.81,10.81C7.79,10.92 7.7,11 7.59,11H5.79C5.67,11 5.58,10.92 5.56,10.81L5.4,9.62L4.64,9.18L3.5,9.63C3.41,9.67 3.3,9.63 3.24,9.53L2.34,7.97C2.28,7.87 2.31,7.75 2.39,7.68L3.34,6.94L3.31,6.5L3.34,6.06L2.39,5.32C2.31,5.25 2.28,5.13 2.34,5.03L3.24,3.47C3.3,3.37 3.41,3.33 3.5,3.37L4.63,3.82L5.4,3.38L5.56,2.19C5.58,2.08 5.67,2 5.79,2H7.59C7.7,2 7.79,2.08 7.81,2.19L8,3.38L8.74,3.82L9.86,3.37C9.96,3.33 10.08,3.37 10.13,3.47L11.03,5.03C11.09,5.13 11.07,5.25 11,5.32L10.03,6.06L10.06,6.5L10.03,6.94Z"></path></svg>
                                <p>Manufacturing</p>
                            </div>
                        </Link> */}
                        {/* <Link to={"/"}>
                            <div className="singlle-medias">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" viewBox="0 0 24 24" height="34"><path d="M13 4H11L10 2H14L13 4M14 8V6H15V5H9V6H10V8C7.24 8 5 10.24 5 13V22H19V13C19 10.24 16.76 8 14 8M16 17H13V20H11V17H8V15H11V12H13V15H16V17Z"></path></svg>
                                <p>Life Science</p>
                            </div>
                        </Link>
                        <Link to={"/"}>
                            <div className="singlle-medias">
                                <svg xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 0 24 24" width="34"><path d="M0 0h24v24H0z" fill="none"></path><path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z"></path></svg>
                                <p>Food and Beverage</p>
                            </div>
                        </Link>
                        <Link to={"/"}>
                            <div className="singlle-medias">
                                <svg xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 0 24 24" width="34"><path d="M0 0h24v24H0z" fill="none"></path><path d="M7 2v11h3v9l7-12h-4l4-8z"></path></svg>
                                <p>Energy and Power</p>
                            </div>
                        </Link>
                        <Link to={"/"}>
                            <div className="singlle-medias">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path d="M5,6H23V18H5V6M14,9A3,3 0 0,1 17,12A3,3 0 0,1 14,15A3,3 0 0,1 11,12A3,3 0 0,1 14,9M9,8A2,2 0 0,1 7,10V14A2,2 0 0,1 9,16H19A2,2 0 0,1 21,14V10A2,2 0 0,1 19,8H9M1,10H3V20H19V22H1V10Z"></path></svg>
                                <p>Banking & Finance</p>
                            </div>
                        </Link>
                        <Link to={"/"}>
                            <div className="singlle-medias">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" enableBackground="new 0 0 24 24" height="34" viewBox="0 0 24 24"><g><path d="M22,16v-2l-8.5-5V3.5C13.5,2.67,12.83,2,12,2s-1.5,0.67-1.5,1.5V9L2,14v2l8.5-2.5V19L8,20.5L8,22l4-1l4,1l0-1.5L13.5,19 v-5.5L22,16z"></path><path d="M0,0h24v24H0V0z" fill="none"></path></g></svg>
                                <p>Aerospace and Defence</p>
                            </div>
                        </Link>
                        <Link to={"/"}>
                            <div className="singlle-medias">
                                <svg xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 0 24 24" width="34"><path d="M0 0h24v24H0z" fill="none"></path><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"></path></svg>
                                <p>Automotive and Transportation</p>
                            </div>
                        </Link>
                        <Link to={"/"}>
                            <div className="singlle-medias">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path d="M12,15C7.58,15 4,16.79 4,19V21H20V19C20,16.79 16.42,15 12,15M8,9A4,4 0 0,0 12,13A4,4 0 0,0 16,9M11.5,2C11.2,2 11,2.21 11,2.5V5.5H10V3C10,3 7.75,3.86 7.75,6.75C7.75,6.75 7,6.89 7,8H17C16.95,6.89 16.25,6.75 16.25,6.75C16.25,3.86 14,3 14,3V5.5H13V2.5C13,2.21 12.81,2 12.5,2H11.5Z"></path></svg>
                                <p>Building and Construction</p>
                            </div>
                        </Link> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner