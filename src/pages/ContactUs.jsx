import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import '../components/styles/contactUs.css'
import Footer from '../components/footer'
import user from '../images/user.png'
import mail from '../images/mail.png'
import subject from '../images/subject.png'
import message from '../images/message.png'
import { Email, Label, LocalPhone, LocationOn, Message, Person } from '@mui/icons-material'
import axios from 'axios'

const ContactUs = () => {
    const [clientIP, setClientIP] = useState(null);
    const [inpVal, setInpVal] = useState("")

    const [customerName, setCustomerName] = useState("")
    const [email, setEmail] = useState("")
    const [designation, setDesignation] = useState("")
    const [description, setDescription] = useState("")


    const [customerNameWarn, setCustomerNameWarn] = useState(false)
    const [emailWarn, setEmailWarn] = useState(false)
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
        if (val === "designation") {
            setDesignation(e.target.value)
            setDesignationWarn(false)
        }
        if (val === "description") {
            setDescription(e.target.value)
            setDescriptionWarn(false)
        }
    }


    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })

        // Fetch the client's IP address from ipify API
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                setClientIP(data.ip);
            })
            .catch(error => console.error('Error:', error));
    }, [])


    const handleSubmit = e => {
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

        if (!designation) {
            setDesignationWarn(true);
            emptyFieldCount++;
        } else {
            setDesignationWarn(false);
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
            axios.post(process.env.REACT_APP_CREATE_INQUIRY_API, {
                customerName,
                email,
                designation,
                description,
                inquiryType: "contact",
                ipAddress: clientIP,
            }).then(res => {
                //console.log(res.data);
                setCustomerName("");
                setEmail("");
                setDesignation("");
                setDescription("");

                // Reset all warning states
                setCustomerNameWarn(false);
                setEmailWarn(false);
                setDesignationWarn(false);
                setDescriptionWarn(false);
                setBtnWarn(false);
            }).catch(err => {
                console.log(err);
            });
        }
    }


    return (
        <div className='contactUs'>
            <Header isOnPlace={false} inpVal={inpVal} handleSetVal={handleSetVal} />
            <main>
                <div className="contactUsWrap">
                    <h2 className='textMain'>Contact Us</h2>
                    <div className="contactUsFormWrap">
                        <form onSubmit={handleSubmit}>
                            <div className="contactInpRow">
                                <label htmlFor="conName">
                                    <Person />
                                    <span>Name</span>
                                </label>
                                <input type="text" name="conName" id="conName" value={customerName} onChange={e => inputValHandle(e, "customerName")} />
                                {customerNameWarn && <small>Please fill this field!</small>}
                            </div>
                            <div className="contactInpRow">
                                <label htmlFor="conMail">
                                    <Email />
                                    <span>Email</span>
                                </label>
                                <input type="email" name="conMail" id="conMail" value={email} onChange={e => inputValHandle(e, "email")} />
                                {emailWarn && <small>Please fill this field!</small>}
                            </div>
                            <div className="contactInpRow">
                                <label htmlFor="conSub">
                                    <Label />
                                    <span>Subject</span>
                                </label>
                                <input type="text" name="conSub" id="conSub" value={designation} onChange={e => inputValHandle(e, "designation")} />
                                {designationWarn && <small>Please fill this field!</small>}
                            </div>
                            <div className="contactInpRow">
                                <label htmlFor="conMessage">
                                    <Message />
                                    <span>Message</span>
                                </label>
                                <textarea type="text" name="conMessage" id="conMessage" value={description} onChange={e => inputValHandle(e, "description")} />
                                {descriptionWarn && <small>Please fill this field!</small>}
                            </div>
                            <button type="submit" className='bgMain'>Send</button>
                            {btnWarn && <small className='btnWarn'>Please fill all fields!</small>}
                        </form>
                        <div className="contactMapWrap">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.259393628049!2d-118.3547084253998!3d34.062864217171345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b92220feb1f1%3A0x5cda1199df16bc5d!2s5665%20W%2C%205665%20Wilshire%20Blvd%2C%20Los%20Angeles%2C%20CA%2090036%2C%20USA!5e0!3m2!1sen!2sbd!4v1696342267310!5m2!1sen!2sbd" width="600" height="450" style={{ border: "none" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="contactUsInfoWrap">
                        <div className="contactInfoLeft">
                            <div className="singleContactInfo">
                                <h3>
                                    <LocationOn />
                                    <span>US Address:</span>
                                </h3>
                                <ul>
                                    <li>5665 W. Wilshire Blvd, Los Angeles, CA 90036, United States</li>
                                </ul>
                            </div>
                            <div className="singleContactInfo">
                                <h3>
                                    <Email />
                                    <span>Email</span>
                                </h3>
                                <ul>
                                    <li>sales@absolutemarketresearch.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="contactInfoRight">
                            <div className="singleContactInfo">
                                <h3>
                                    <LocalPhone />
                                    <span>Telephone Numbers</span>
                                </h3>
                                <ul>
                                    <li>+1 415 799 9002 (International)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default ContactUs
