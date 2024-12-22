import React, { useEffect, useState } from 'react'
import '../components/styles/singleReport.css'
import Header from '../components/Header'
import { Link, useLocation } from 'react-router-dom'
import buyrep from '../images/buyrep.jpg'
import cart from '../images/add-to-cart.png'
import axios from 'axios'
import Footer from '../components/footer'
import pdf from '../images/pdf.svg'
import xls from '../images/xls.svg'
import ppt from '../images/ppt.svg'
import SingleBook from '../components/Singlebook'
import tick from '../images/checkmark.png'


const RequestSample = () => {
    const [clientIP, setClientIP] = useState(null);
    const location = useLocation()
    const repId = location.pathname.split("/")[2]
    const repPar = location.pathname.split("/")[1]
    const [tst1, setTst1] = useState(false)
    const [storeRep, setStoreRep] = useState({})
    const [storeCountry, setStoreCountry] = useState([])
    const [inpVal, setInpVal] = useState("")

    const [submitSession, setSubmitSession] = useState(true)


    const [customerName, setCustomerName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [nameOfCompany, setNameOfCompany] = useState("")
    const [designation, setDesignation] = useState("")
    const [country, setCountry] = useState("")
    const [description, setDescription] = useState("")
    const [commentsBySales, setCommentsBySales] = useState("")
    const [reportId, setReportId] = useState("")


    const [countryWarn, setCountryWarn] = useState(false)
    const [customerNameWarn, setCustomerNameWarn] = useState(false)
    const [emailWarn, setEmailWarn] = useState(false)
    const [phoneWarn, setPhoneWarn] = useState(false)
    const [nameOfCompanyWarn, setNameOfCompanyWarn] = useState(false)
    const [designationWarn, setDesignationWarn] = useState(false)
    const [descriptionWarn, setDescriptionWarn] = useState(false)

    const [btnWarn, setBtnWarn] = useState(false)

    const handleSetVal = (e) => {
        setInpVal(e.target.value)
    }


    const inputValHandle = (e, val) => {
        if (val === "customerName") {
            setCustomerName(e.target.value)
            setCustomerNameWarn(false)
        }
        if (val === "email") {
            setEmail(e.target.value)
            setEmailWarn(false)
        }
        if (val === "phone") {
            setPhone(e.target.value)
            setPhoneWarn(false)
        }
        if (val === "nameOfCompany") {
            setNameOfCompany(e.target.value)
            setNameOfCompanyWarn(false)

        }
        if (val === "designation") {
            setDesignation(e.target.value)
            setDesignationWarn(false)
        }
        if (val === "country") {
            setCountry(e.target.value)
            setCountryWarn(false)
        }
        if (val === "description") {
            setDescription(e.target.value)
            setDescriptionWarn(false)
        }
    }


    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
        axios.get(`${process.env.REACT_APP_GET_REPORT_BY_ID_API}=${repId}`).then(res => {
            //console.log(res.data);
            // setStoreRep(res.data)
            // setReportId(res.data.reportId)
            setStoreRep(res.data[0])
            setReportId(res.data[0].reportId)
        }).catch(err => {
            console.log(err);
        });
        axios.get(process.env.REACT_APP_GET_COUNTRIES_API).then(res => {
            setStoreCountry(res.data)
        }).catch(err => {
            console.log(err);
        });


        // Fetch the client's IP address from ipify API
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                setClientIP(data.ip);
            })
            .catch(error => console.error('Error:', error));
    }, [repId])



    const handleSubmit = (e) => {
        e.preventDefault()

        e.preventDefault();

        let emptyFieldCount = 0;
        setBtnWarn(false);

        if (!customerName) {
            setCustomerNameWarn(true);
            emptyFieldCount++;
        } else {
            setCustomerNameWarn(false);
        }

        if (!email) {
            setEmailWarn(true);
            emptyFieldCount++;
        } else {
            setEmailWarn(false);
        }

        if (!nameOfCompany) {
            setNameOfCompanyWarn(true);
            emptyFieldCount++;
        } else {
            setNameOfCompanyWarn(false);
        }

        if (!designation) {
            setDesignationWarn(true);
            emptyFieldCount++;
        } else {
            setDesignationWarn(false);
        }

        if (!country) {
            setCountryWarn(true);
            emptyFieldCount++;
        } else {
            setCountryWarn(false);
        }

        if (!phone) {
            setPhoneWarn(true);
            emptyFieldCount++;
        } else {
            setPhoneWarn(false);
        }

        if (!description) {
            setDescriptionWarn(true);
            emptyFieldCount++;
        } else {
            setDescriptionWarn(false);
        }


        if (emptyFieldCount > 0) {
            setBtnWarn(true);
        } else {
            setSubmitSession(false)
            axios.post(process.env.REACT_APP_CREATE_INQUIRY_API, {
                customerName,
                email,
                phone,
                nameOfCompany,
                designation,
                country,
                description,
                reportId: Number(reportId),
                inquiryType: "inquery",
                ipAddress: clientIP,
            }).then(res => {
                console.log(res);
                setCustomerName("")
                setEmail("")
                setPhone("")
                setNameOfCompany("")
                setDesignation("")
                setCountry("")
                setDescription("")

                setTst1(true)
                setTimeout(() => {
                    setTst1(false)
                }, 3500);

                // Reset all warning states
                setCountryWarn(false);
                setCustomerNameWarn(false);
                setEmailWarn(false);
                setPhoneWarn(false);
                setNameOfCompanyWarn(false);
                setDesignationWarn(false);
                setDescriptionWarn(false);
                setBtnWarn(false);
            }).catch(err => {
                console.log(err);
                setSubmitSession(true)
            });
        }
    }



    return (
        <div className='singleReportPage'>
            <Header isOnPlace={false} inpVal={inpVal} handleSetVal={handleSetVal} />
            <main>
                <div className="reportWrap">
                    <div className="reportWrapLeft">
                        <h1>{storeRep.reportTitle}</h1>
                        <div className="reportInfo">
                            <div className="infoItem">
                                <span>Report Id: <span className='infoDy'>{storeRep.reportId}</span></span>
                            </div>
                            <div className="infoItem">
                                <span>Report Category: <span className='infoDy'>{storeRep.reportCategory}</span></span>
                            </div>
                            <div className="infoItem">
                                <span>Published on: <span className='infoDy'>{storeRep.publishedOn}</span></span>
                            </div>
                            <div className="infoItem">
                                <span>Report Pages: <span className='infoDy'>{storeRep.reportPages}</span></span>
                            </div>
                            <div className="infoItem">
                                <span>Format:
                                    <span className='infoDy'>
                                        <img src={pdf} alt="" />
                                        <img src={xls} alt="" />
                                        <img src={ppt} alt="" />
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="filterWrap">
                            <Link to={`/${repPar}/${repId}/overview`}>Overview</Link>
                            <Link to={`/${repPar}/${repId}/TOC`}>Table of Contents</Link>
                            {/* <Link to={`/${repPar}/${repId}/MMP`}>Major Market Players</Link> */}
                            <Link className="active" to={`/${repPar}/${repId}/request-sample`}>Request a Sample</Link>
                        </div>
                        <div className="reportOverview tableCon">
                            <div className='repDescWrap reqSample'>
                                <form onSubmit={handleSubmit}>
                                    <div className="repFormRow">
                                        <div className="reqInp">
                                            <input type="text" placeholder='Full Name*' value={customerName} onChange={e => inputValHandle(e, "customerName")} />
                                            {customerNameWarn && <small>Please fill this field!</small>}
                                        </div>
                                        <div className="reqInp">
                                            <input type="text" placeholder='Business Email*' value={email} onChange={e => inputValHandle(e, "email")} />
                                            {emailWarn && <small>Please fill this field!</small>}
                                        </div>
                                    </div>
                                    <div className="repFormRow">
                                        <div className="reqInp">
                                            <input type="text" placeholder='Company' value={nameOfCompany} onChange={e => inputValHandle(e, "nameOfCompany")} />
                                            {nameOfCompanyWarn && <small>Please fill this field!</small>}
                                        </div>
                                        <div className="reqInp">
                                            <input type="text" placeholder='Designation' value={designation} onChange={e => inputValHandle(e, "designation")} />
                                            {designationWarn && <small>Please fill this field!</small>}
                                        </div>
                                    </div>
                                    <div className="repFormRow">
                                        <div className="reqInp">
                                            <select name="country" defaultValue="select country" onChange={e => inputValHandle(e, "country")}>
                                                <option value="select country" disabled>-Select Country-</option>
                                                {
                                                    storeCountry.map((val, ind) => {
                                                        return <option value={val.countryName} key={ind}>{val.countryName}</option>
                                                    })
                                                }
                                            </select>
                                            {countryWarn && <small>Please fill this field!</small>}
                                        </div>
                                        <div className="reqInp">
                                            <input type="text" placeholder='Phone Number*' value={phone} onChange={e => inputValHandle(e, "phone")} />
                                            {phoneWarn && <small>Please fill this field!</small>}
                                        </div>
                                    </div>
                                    <div className="repFormRow">
                                        <textarea placeholder='To receive personalized service, please share your research needs.' value={description} onChange={e => inputValHandle(e, "description")}></textarea>
                                        {descriptionWarn && <small>Please fill this field!</small>}
                                    </div>
                                    <button type="submit" style={{ background: submitSession ? 'linear-gradient(to top, #9c27b0 0%, #4a148c 100%)' : '#ccc', cursor: submitSession ? 'pointer' : 'not-allowed' }}>Submit</button>
                                    {btnWarn && <small className='btnWarn'>Please fill all fields!</small>}
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="reportWrapRight">
                        <div className="buyReport">
                            <div className="buyTop">
                                <div className="buyImg">
                                    <img src={buyrep} alt="" />
                                </div>
                                <div className="buyInfo">
                                    <span>Report ID</span>
                                    <h4>{repId}</h4>
                                    <span>Published Date</span>
                                    <h4>{storeRep.publishedOn}</h4>
                                    <span>Rating</span>
                                    <div className="starRating">
                                        <div className="ratingWrap" style={{ width: `${((100 * storeRep.editorRating) / 5)}%` }}>
                                            <span>★★★★★</span>
                                        </div>
                                        <div className="emptyRating">
                                            <span>★★★★★</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="buyBottom">
                                <Link to={`/purchase/${storeRep.reportTitle?.split("Market")[0].replaceAll(" ", "-") + "Market"}?report-id=${repId}`}>
                                    <button>
                                        <img src={cart} alt="" />
                                        <span>Buy Now</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <h3 class="relatedHeading dis">Related Reports</h3>
                        <div className="rightRelated">
                            {
                                storeRep.relatedReports?.map((val, i) => {
                                    return <Link key={i} to={`/${val.reportTitle.split("Market")[0].replaceAll(" ", "-") + "Market"}/${val.reportId}/overview`}><SingleBook title={val.reportTitle} price={val.priceForSingleUser} rating={val.editorRating} /></Link>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="relatedReports">
                    <h3 className='relatedHeading'>Related Reports</h3>
                    <div className="relatedReportWrap">
                        {
                            storeRep.relatedReports?.map((val, i) => {
                                return <Link key={i} to={`/${val.reportTitle.split("Market")[0].replaceAll(" ", "-") + "Market"}/${val.reportId}/overview`}><SingleBook title={val.reportTitle} price={val.priceForSingleUser} rating={val.editorRating} /></Link>
                            })
                        }
                    </div>
                </div>
                <div className="tst" style={{ opacity: tst1 ? "1" : "0", pointerEvents: tst1 ? "all" : "none" }}>
                    <div className="tstMsg"><img src={tick} alt="" />
                        <span>Thank you for your message! Our sales executive will be in touch with you soon.</span>
                        <div className={tst1 ? "loadBtm active" : "loadBtm"}></div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default RequestSample