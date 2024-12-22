import React, { useEffect, useState } from 'react'
import './styles/contact.css'
import axios from 'axios'
import tick from '../images/checkmark.png'

const Contact = () => {
    const [clientIP, setClientIP] = useState(null);
    const [submitSession, setSubmitSession] = useState(true)

    const [tst1, setTst1] = useState(false)
    const [storeCountry, setStoreCountry] = useState([])
    const [customerName, setCustomerName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [nameOfCompany, setNameOfCompany] = useState("")
    const [designation, setDesignation] = useState("")
    const [country, setCountry] = useState("")
    const [description, setDescription] = useState("")

    const [countryWarn, setCountryWarn] = useState(false)
    const [customerNameWarn, setCustomerNameWarn] = useState(false)
    const [emailWarn, setEmailWarn] = useState(false)
    const [phoneWarn, setPhoneWarn] = useState(false)
    const [nameOfCompanyWarn, setNameOfCompanyWarn] = useState(false)
    const [designationWarn, setDesignationWarn] = useState(false)
    const [descriptionWarn, setDescriptionWarn] = useState(false)

    const [btnWarn, setBtnWarn] = useState(false)


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
        axios.get(process.env.REACT_APP_GET_COUNTRIES_API).then(res => {
            setStoreCountry(res.data)
        }).catch(err => {
            console.log(err);
        })

        // Fetch the client's IP address from ipify API
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                setClientIP(data.ip);
            })
            .catch(error => console.error('Error:', error));
    }, [])

    const handleSubmit = e => {
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

        // Check if there are empty fields
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
                inquiryType: "contact",
                ipAddress: clientIP,
            }).then(res => {
                //console.log(res.data);
                setCustomerName("");
                setEmail("");
                setPhone("");
                setNameOfCompany("");
                setDesignation("");
                setCountry("");
                setDescription("");

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
        <div className='contact'>
            <div className="contactInside">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="conFormRow">
                        <div className="inpWrap">
                            <input type="text" placeholder='Full Name*' value={customerName} onChange={e => inputValHandle(e, "customerName")} />
                            {customerNameWarn && <small>Please fill this field!</small>}
                        </div>
                        <div className="inpWrap">
                            <input type="text" placeholder='Business Email*' value={email} onChange={e => inputValHandle(e, "email")} />
                            {emailWarn && <small>Please fill this field!</small>}
                        </div>
                    </div>
                    <div className="conFormRow">
                        <div className="inpWrap">
                            <input type="text" placeholder='Company' value={nameOfCompany} onChange={e => inputValHandle(e, "nameOfCompany")} />
                            {nameOfCompanyWarn && <small>Please fill this field!</small>}
                        </div>
                        <div className="inpWrap">
                            <input type="text" placeholder='Designation' value={designation} onChange={e => inputValHandle(e, "designation")} />
                            {designationWarn && <small>Please fill this field!</small>}
                        </div>
                    </div>
                    <div className="conFormRow">
                        <div className="inpWrap">
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
                        <div className="inpWrap">
                            <input type="text" placeholder='Phone Number*' value={phone} onChange={e => inputValHandle(e, "phone")} />
                            {phoneWarn && <small>Please fill this field!</small>}
                        </div>
                    </div>
                    <div className="conFormRow">
                        <textarea placeholder='To receive personalized service, please share your research needs.' value={description} onChange={e => inputValHandle(e, "description")}></textarea>
                        {descriptionWarn && <small>Please fill this field!</small>}
                    </div>
                    <button type="submit" style={{ background: submitSession ? 'linear-gradient(to top, #9c27b0 0%, #4a148c 100%)' : '#ccc', cursor: submitSession ? 'pointer' : 'not-allowed' }}>Submit</button>
                    {btnWarn && <small className='btnWarn'>Please fill all fields!</small>}
                </form >
            </div>
            <div className="tst" style={{ opacity: tst1 ? "1" : "0", pointerEvents: tst1 ? "all" : "none" }}>
                <div className="tstMsg"><img src={tick} alt="" />
                    <span>Thank you for your message! Our sales executive will be in touch with you soon.</span>
                    <div className={tst1 ? "loadBtm active" : "loadBtm"}></div>
                </div>
            </div>
        </div>
    )
}

export default Contact