import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import '../components/styles/thankYou.css'
import Footer from '../components/footer'
import { useLocation } from 'react-router-dom'

const ThankYou = () => {
    const location = useLocation()
    const [inpVal, setInpVal] = useState("")
    const [isDigital, setIsDigital] = useState(false)

    const handleSetVal = (e) => {
        setInpVal(e.target.value)
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
        location.pathname.split("/")[2] === "digital" ? setIsDigital(true) : setIsDigital(false)
    }, [location.pathname])
    return (
        <div className='thankYou'>
            <Header isOnPlace={false} inpVal={inpVal} handleSetVal={handleSetVal} />
            <main>
                <div className="thankYouInside">
                    <h1>Thank You for Purchasing!</h1>
                    <p>
                        {
                            !isDigital ? <span>Your form has been submitted successfully. Our representative will contact you shortly with Bank details for the further process.</span>
                                :
                                <span>Your order has been placed successfully. You'll receive a confirmation email shortly.</span>
                        }

                        <br />
                        <br />
                        The report will be delivered to your email ID in the next <b>12 to 24 hours.</b>
                    </p>
                    <p>
                        <b>Note: </b>
                        For further assistance, you can email us on <a href="mailto:sales@absolutemarketresearch.com" className='paraSpe'>sales@absolutemarketresearch.com</a> or you can call us on <a href="tel:+1 415 799 9002" className='paraSpe'>+1 415 799 9002</a>
                    </p>
                    <div className="headerLogo bottomLogo">
                        <span className='powered'>Powered by</span>
                        <h2>Absolute</h2>
                        {/* <span>Informing Tomorrow, Today</span> */}
                        <span>Market Research</span>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default ThankYou