import React, { useEffect, useState } from 'react'
import '../components/styles/singleReport.css'
import Header from '../components/Header'
import { Link, useLocation } from 'react-router-dom'
import buyrep from '../images/buyrep.jpg'
import cart from '../images/add-to-cart.png'
import axios from 'axios'
import Footer from '../components/footer'


const Mmp = () => {
    const location = useLocation()
    const repId = location.pathname.split("/")[3]
    const repPar = location.pathname.split("/")[2]
    const [storeRep, setStoreRep] = useState({})
    const [storeCountry, setStoreCountry] = useState([])


    const [customerName, setCustomerName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [nameOfCompany, setNameOfCompany] = useState("")
    const [country, setCountry] = useState("")
    const [description, setDescription] = useState("")
    const [reportId, setReportId] = useState("")


    const [countryWarn, setCountryWarn] = useState(false)
    const [customerNameWarn, setCustomerNameWarn] = useState(false)
    const [emailWarn, setEmailWarn] = useState(false)
    const [phoneWarn, setPhoneWarn] = useState(false)
    const [nameOfCompanyWarn, setNameOfCompanyWarn] = useState(false)
    const [descriptionWarn, setDescriptionWarn] = useState(false)

    const [btnWarn, setBtnWarn] = useState(false)


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
    }, [repId])



    const handleSubmit = (e) => {
        e.preventDefault()

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
            axios.post(process.env.REACT_APP_CREATE_INQUIRY_API, {
                customerName,
                email,
                phone,
                nameOfCompany,
                country,
                description,
                reportId,
                inquiryType: "inquery"
            }).then(res => {
                console.log(res);
                setCustomerName("")
                setEmail("")
                setPhone("")
                setNameOfCompany("")
                setCountry("")
                setDescription("")

                // Reset all warning states
                setCountryWarn(false);
                setCustomerNameWarn(false);
                setEmailWarn(false);
                setPhoneWarn(false);
                setNameOfCompanyWarn(false);
                setDescriptionWarn(false);
                setBtnWarn(false);
            }).catch(err => {
                console.log(err);
            });
        }
    }



    return (
        <div className='singleReportPage'>
            <Header />
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
                                <span>Published By: <span className='infoDy'>{storeRep.publishedBy}</span></span>
                            </div>
                        </div>
                        <div className="filterWrap">
                            <Link to={`/report-details/${repPar}/${repId}/overview`}>Overview</Link>
                            <Link to={`/report-details/${repPar}/${repId}/TOC`}>Table of Contents</Link>
                            {/* <Link className="active" to={`/report-details/${repPar}/${repId}/MMP`}>Major Market Players</Link> */}
                            <Link to={`/report-details/${repPar}/${repId}/request-sample`}>Request a Sample</Link>
                        </div>
                        <div className="reportOverview tableCon">
                            <div className='repDescWrap' dangerouslySetInnerHTML={{ __html: storeRep.reportTableOfContent }} />
                        </div>
                    </div>
                    <div className="reportWrapRight">
                        <div>
                            <h3>Inquiry Before Buying</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="inqueryInp">
                                    <textarea name="inquiry" placeholder='Mention interested topics/company profiles.' value={description} onChange={e => setDescription(e.target.value)}></textarea>
                                    {descriptionWarn && <small>Please fill this field!</small>}
                                </div>
                                <input type="text" placeholder='Enter Name' value={customerName} onChange={e => setCustomerName(e.target.value)} />
                                {customerNameWarn && <small>Please fill this field!</small>}
                                <input type="text" placeholder='Enter Email Id' value={email} onChange={e => setEmail(e.target.value)} />
                                {emailWarn && <small>Please fill this field!</small>}
                                <select name="country" defaultValue="select country" onChange={e => setCountry(e.target.value)}>
                                    <option value="select country" disabled>-Select Country-</option>
                                    {/* {
                                        storeCountry.map((val, ind) => {
                                            return <option value={val.name} key={ind}>{val.name}</option>
                                        })
                                    } */}
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="Bahamas">Bahamas</option>
                                </select>
                                {countryWarn && <small>Please fill this field!</small>}
                                <input type="text" placeholder='Enter Phone Number' value={phone} onChange={e => setPhone(e.target.value)} />
                                {phoneWarn && <small>Please fill this field!</small>}
                                <input type="text" placeholder='Enter Company Name' value={nameOfCompany} onChange={e => setNameOfCompany(e.target.value)} />
                                {nameOfCompanyWarn && <small>Please fill this field!</small>}
                                <button type="submit">Submit</button>
                                {btnWarn && <small className='btnWarn'>Please fill all fields!</small>}
                            </form>
                        </div>
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
                                <button>
                                    <img src={cart} alt="" />
                                    <span>Buy Now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Mmp