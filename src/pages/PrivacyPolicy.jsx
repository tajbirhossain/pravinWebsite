import React, { useState, useEffect } from 'react'
import '../components/styles/privacyPolicy.css'
import Header from '../components/Header'
import Footer from '../components/footer'

const PrivacyPolicy = () => {
    const [inpVal, setInpVal] = useState("")
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, [])

    const handleSetVal = (e) => {
        setInpVal(e.target.value)
    }

    return (
        <div className='privacyPolicy'>
            <Header isOnPlace={false} inpVal={inpVal} handleSetVal={handleSetVal} />
            <main>
                <h1>Privacy Policy</h1>
                <p>Welcome to Absolute Market Research. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and purchase market reports from us. Please read this Privacy Policy carefully. By using our website, you consent to the collection, use, and sharing of your information as described in this Privacy Policy.</p>
                <ol>
                    <li><strong>Information We Collect</strong>
                        <p>We collect personal information that you provide directly to us, such as your name, email address, phone number, and payment information when you purchase market reports from our website.</p>
                    </li>
                    <li><strong>How We Use Your Information</strong>
                        <p>We may use the information we collect from you to:</p>
                        <ul>
                            <li>Process and fulfill your market report orders.</li>
                            <li>Respond to your inquiries and provide customer support.</li>
                            <li>Send you transaction-related emails, including confirmations and receipts.</li>
                            <li>Improve our website and services.</li>
                            <li>Comply with legal obligations.</li>
                        </ul>
                    </li>
                    <li><strong>Sharing Your Information</strong>
                        <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.</p>
                    </li>
                    <li><strong>Cookies and Similar Technologies</strong>
                        <p>We use cookies and similar technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us improve our services and your experience.</p>
                    </li>
                    <li><strong>Security</strong>
                        <p>We take reasonable measures to help protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.</p>
                    </li>
                    <li><strong>Your Choices</strong>
                        <p>You can update your account information and communication preferences at any time by logging into your account on our website. You can also opt-out of receiving promotional emails from us by following the instructions in those emails.</p>
                    </li>
                    <li><strong>Children’s Privacy</strong>
                        <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.</p>
                    </li>
                    <li><strong>Changes to This Privacy Policy</strong>
                        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.</p>
                    </li>
                </ol>

                <h2>Contact Us</h2>

                <address>Absolute Market Research<br />
                    5665 W. Wilshire Blvd<br />
                    Los Angeles<br />
                    CA 90036<br />
                    United States<br />
                    Phone: +1 415 799 9002<br />
                    Email: sales@absolutemarketresearch.com
                </address>

            </main>

            <Footer />
        </div>
    )
}

export default PrivacyPolicy
