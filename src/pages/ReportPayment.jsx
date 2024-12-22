import React, { useEffect, useRef, useState } from 'react'
import '../components/styles/reportPayment.css'
import Header from '../components/Header'
import Footer from '../components/footer'
import { AccountBalance, AccountBalanceWallet, Check, MonetizationOn, Payment } from '@mui/icons-material'
import buyrep from '../images/buyrep.jpg'
import cipla from '../images/cipla.png'
import ibm from '../images/ibm.png'
import lg from '../images/lg.png'
import PaypalPay from '../components/PaypalPay'
import paypalBtn from '../images/paypalBtn.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import StripePayWithElements from '../components/StripePay'
import { loadScript } from "@paypal/paypal-js";

const ReportPayment = () => {


  const [storeCountry, setStoreCountry] = useState([])
  const [paymentInd, setPaymentInd] = useState(0)
  const [storeItem, setStoreItem] = useState({})
  const [repId, setRepId] = useState(null)

  const [mainSelect, setMainSelect] = useState(0)
  const [leftSelect, setLeftSelect] = useState(0)
  const [rightSelect, setRightSelect] = useState(0)
  const [selectedPrice, setSelectedPrice] = useState(0)

  const [analystAmount, setAnalystAmount] = useState(0)


  const [customerName, setCustomerName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [nameOfCompany, setNameOfCompany] = useState("")
  const [designation, setDesignation] = useState("")
  const [country, setCountry] = useState("")

  const [countryWarn, setCountryWarn] = useState(false)
  const [customerNameWarn, setCustomerNameWarn] = useState(false)
  const [emailWarn, setEmailWarn] = useState(false)
  const [phoneWarn, setPhoneWarn] = useState(false)
  const [nameOfCompanyWarn, setNameOfCompanyWarn] = useState(false)
  const [designationWarn, setDesignationWarn] = useState(false)




  const navigate = useNavigate()
  const location = useLocation()


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
  }





  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
    setRepId(location.search.split("id=")[1])

    axios.get(`${process.env.REACT_APP_GET_REPORT_BY_ID_API}=${location.search.split("id=")[1]}`).then(res => {
      setStoreItem(res.data[0]);
      console.log(res.data[0]);
    }).catch(err => {
      console.log(err);
    })

    axios.get(process.env.REACT_APP_GET_COUNTRIES_API).then(res => {
      setStoreCountry(res.data)
      //console.log(res.data);
    }).catch(err => {
      console.log(err);
    })

  }, [location.search]);




  const paypalFormHandle = () => {
    let emptyFieldCount = 0;

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


    if (emptyFieldCount > 0) {
      window.scrollTo({ top: 300, left: 0 })
    }
  }





  const paymentToggle = (i) => {
    setPaymentInd(i)
  }

  const handlePaymentSubmit = (path) => {
    let emptyFieldCount = 0;

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


    if (emptyFieldCount > 0) {
      window.scrollTo({ top: 300, left: 0 })
    } else {
      axios.post(process.env.REACT_APP_CREATE_INVOICE_API, {
        customerName,
        email,
        phone: String(phone),
        designation,
        company: nameOfCompany,
        country,
        invoiceAmount: (mainSelect === 0 ? storeItem.priceForEnterpriseUser : mainSelect === 1 ? storeItem.priceForSingleUser : storeItem.priceForCorporateUser) + analystAmount,
        paymentMethod: "bank transfer",
        reportId: Number(repId)
      }).then(res => {
        //console.log(res.data);

        setCustomerName("");
        setEmail("");
        setPhone("");
        setNameOfCompany("");
        setDesignation("");
        setCountry("");

        // Reset all warning states
        setCountryWarn(false);
        setCustomerNameWarn(false);
        setEmailWarn(false);
        setPhoneWarn(false);
        setNameOfCompanyWarn(false);
        setDesignationWarn(false);

        navigate(path)

      }).catch(err => {
        console.log(err);
      })
    }
  }


  const handleLeftPrice = () => {
    if (rightSelect !== 1) {
      if (leftSelect === 0) {
        setMainSelect(1)
        setLeftSelect(1)
      } else {
        setMainSelect(0)
        setLeftSelect(0)
      }
    } else {
      setRightSelect(0)

      if (leftSelect === 0) {
        setMainSelect(1)
        setLeftSelect(1)
      } else {
        setMainSelect(0)
        setLeftSelect(0)
      }
    }

  }
  const handleRightPrice = () => {
    if (leftSelect !== 1) {
      if (rightSelect === 0) {
        setMainSelect(2)
        setRightSelect(1)
      } else {
        setMainSelect(0)
        setRightSelect(0)
      }
    } else {
      setLeftSelect(0)

      if (rightSelect === 0) {
        setMainSelect(2)
        setRightSelect(1)
      } else {
        setMainSelect(0)
        setRightSelect(0)
      }
    }

  }


  const handleDivClick = () => {
    setAnalystAmount((prevAmount) => (prevAmount === 0 ? 500 : 0));
  };



  return (
    <div className='reportPayment'>
      <Header />
      <main>
        <div className="paymentWrap">
          <div className="paymentLeft">
            <div className="reportOverview">
              <h4 className='overviewTitle'>Step 1: Tell us About Yourself</h4>
              <form>
                <div className="payInpRow">
                  <div className="payInpWrap">
                    <input type="text" placeholder='Your Name *' value={customerName} onChange={e => inputValHandle(e, "customerName")} />
                    {customerNameWarn && <small>Please fill this field!</small>}
                  </div>
                  <div className="payInpWrap">
                    <input type="text" placeholder='Email *' value={email} onChange={e => inputValHandle(e, "email")} />
                    {emailWarn && <small>Please fill this field!</small>}
                  </div>
                </div>
                <div className="payInpRow">
                  <div className="payInpWrap">
                    <input type="text" placeholder='Phone *' value={phone} onChange={e => inputValHandle(e, "phone")} />
                    {phoneWarn && <small>Please fill this field!</small>}
                  </div>
                  <div className="payInpWrap">
                    <input type="text" placeholder='Title/Designation *' value={designation} onChange={e => inputValHandle(e, "designation")} />
                    {designationWarn && <small>Please fill this field!</small>}
                  </div>
                </div>
                <div className="payInpRow">
                  <div className="payInpWrap">
                    <input type="text" placeholder='Company *' value={nameOfCompany} onChange={e => inputValHandle(e, "nameOfCompany")} />
                    {nameOfCompanyWarn && <small>Please fill this field!</small>}
                  </div>
                  <div className="payInpWrap">
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
                </div>
              </form>
              <h4 className='overviewTitle paymentTitle'>Step 2: Select Payment Method</h4>
              <div className="paymentItems">
                <button className={paymentInd === 0 ? "singlePayment active" : "singlePayment"} onClick={() => paymentToggle(0)}>
                  <AccountBalanceWallet />
                  <span>PayPal</span>
                </button>
                <button className={paymentInd === 1 ? "singlePayment active" : "singlePayment"} onClick={() => paymentToggle(1)}>
                  <Payment />
                  <span>Stripe</span>
                </button>
                <button className={paymentInd === 2 ? "singlePayment active" : "singlePayment"} onClick={() => paymentToggle(2)}>
                  <MonetizationOn />
                  <span>WireTransfer</span>
                </button>
                <button className={paymentInd === 3 ? "singlePayment active" : "singlePayment"} onClick={() => paymentToggle(3)}>
                  <AccountBalance />
                  <span>Local Bank Transfer</span>
                </button>
              </div>
              <div className="orderInfoWrap">
                <h3>Order Info</h3>
                <div className="orderRowWrap">
                  <div className="orderRow">
                    <span>Selected Report Price:</span>
                    <h4>$ <span>{mainSelect === 0 ? storeItem.priceForEnterpriseUser : mainSelect === 1 ? storeItem.priceForSingleUser : storeItem.priceForCorporateUser}</span></h4>
                  </div>
                  {/* <div className="orderRow">
                    <span>Discounted Price:</span>
                    <h4>$ <span>5999</span></h4>
                  </div>
                  <div className="orderRow">
                    <span>Data Pack:</span>
                    <h4>$ <span>5999</span></h4>
                  </div> */}
                  <div className="orderRow">
                    <span>Support Price:</span>
                    <h4>{analystAmount > 0 ? `$ ${analystAmount}` : "Free"}</h4>
                  </div>
                  {/* <div className="orderRow">
                    <span>Sub Total:</span>
                    <h4>$ <span>5999</span></h4>
                  </div>
                  <div className="orderRow">
                    <span className='totalSave'>Total Savings:</span>
                    <h4>$ <span>5999</span></h4>
                  </div> */}
                </div>
              </div>
              <div className="orderTotalRow">
                <span>Order Total:</span>
                <h4>$ <span>{(mainSelect === 0 ? storeItem.priceForEnterpriseUser : mainSelect === 1 ? storeItem.priceForSingleUser : storeItem.priceForCorporateUser) + analystAmount}</span></h4>
              </div>
              <div className="orderCheckout">
                {
                  paymentInd === 0 ?
                    <span className='paypalCheck'>
                      {/* <strong className="payCheckInside" onClick={handlePaypalCheck}>
                        <i className="fa-brands fa-paypal"></i>
                        <span>PayPal CREDIT</span>
                      </strong> */}
                      <div id='paypalBtnShow'>
                        {
                          (!customerName || !email || !phone || !designation || !nameOfCompany || !country) &&
                          (<button onClick={paypalFormHandle}>
                            <img src={paypalBtn} alt="" />
                          </button>)
                        }
                        {
                          customerName && email && phone && designation && nameOfCompany && country &&
                          <PaypalPay
                            customerName={customerName}
                            email={email}
                            phone={phone}
                            designation={designation}
                            company={nameOfCompany}
                            country={country}
                            mainSelect={mainSelect}
                            storeItem={storeItem}
                            repId={repId}
                            analystAmount={analystAmount}
                          />
                        }
                      </div>
                    </span> : paymentInd === 1 ?
                      <button className="stripeCheck">
                        <span>
                          {
                            (!customerName || !email || !phone || !designation || !nameOfCompany || !country) &&
                            (
                              <div>
                                <button onClick={paypalFormHandle}>
                                  Checkout With Stripe
                                </button>
                              </div>
                            )
                          }
                          {
                            customerName && email && phone && designation && nameOfCompany && country &&
                            <StripePayWithElements repId={repId} />
                          }
                        </span>
                        {/* <span>Checkout With Stripe</span> */}
                        <span>$ {(mainSelect === 0 ? storeItem.priceForEnterpriseUser : mainSelect === 1 ? storeItem.priceForSingleUser : storeItem.priceForCorporateUser) + analystAmount}</span>
                      </button> : paymentInd === 2 ?
                        <button className="cashCheck" onClick={() => handlePaymentSubmit("/thank-you-for-purchase/wire-transfer")}>
                          <span>WireTransfer $ {(mainSelect === 0 ? storeItem.priceForEnterpriseUser : mainSelect === 1 ? storeItem.priceForSingleUser : storeItem.priceForCorporateUser) + analystAmount}</span>
                        </button> :
                        <button className="cashCheck" onClick={() => handlePaymentSubmit("/thank-you-for-purchase/bank-transfer")}>
                          <span>Bank Transfer $ {(mainSelect === 0 ? storeItem.priceForEnterpriseUser : mainSelect === 1 ? storeItem.priceForSingleUser : storeItem.priceForCorporateUser) + analystAmount}</span>
                        </button>
                }
              </div>
            </div>
          </div>
          <div className="paymentRight">
            <h3>Order Summary</h3>
            <div className="orderSummBox">
              <div className="orderSumImg">
                <img src={buyrep} alt="" />
              </div>
              <div className="orderSumInfo">
                <p>{storeItem.reportTitle}</p>
                <span>1x - Corporate User Licence</span>
              </div>
            </div>
            <div className="userSelect">
              <div className="priceTop">
                <div className="priceRadioWrap">
                  <div className="priceRadio">
                    <div className="radioInner"></div>
                  </div>
                </div>
                <div className="priceInfo">
                  <div className="priceInfoRow">
                    <span>{mainSelect === 0 ? "Enterprise User" : mainSelect === 1 ? "Single User" : "Corporate User"}</span>
                    <span>US ${mainSelect === 0 ? storeItem.priceForEnterpriseUser : mainSelect === 1 ? storeItem.priceForSingleUser : storeItem.priceForCorporateUser}</span>
                  </div>
                  {/* <div className="priceInfoRow">
                    <small>US $ 5,999</small>
                  </div> */}
                </div>
              </div>
              <div className="priceBottom">
                <div className="priceLeft" onClick={handleLeftPrice}>
                  <span>{leftSelect === 0 ? "Single User" : "Enterprise User"}</span>
                  <span>US ${leftSelect === 0 ? storeItem.priceForSingleUser : storeItem.priceForEnterpriseUser}</span>
                </div>
                <div className="priceRight" onClick={handleRightPrice}>
                  <span>{rightSelect === 0 ? "Corporate User" : "Enterprise User"}</span>
                  <span>US ${rightSelect === 0 ? storeItem.priceForCorporateUser : storeItem.priceForEnterpriseUser}</span>
                </div>
              </div>
            </div>
            <h3 className='comboTitle'>Combo Offers</h3>
            <div className="singleCombo" onClick={handleDivClick} style={{ backgroundColor: analystAmount === 500 ? "#4a148c" : "#fff", color: analystAmount === 500 ? "#fff" : "#61676c" }}>
              <div className="comboCheck">
                <input type="checkbox" id='combo' checked={analystAmount === 500} readOnly />
              </div>
              <label for="combo">Analyst Support (3 Months)</label>
            </div>
            <div className="paymentSupport">
              <div className="singleSupport">
                <Check />
                <span>Infaluble Methodology</span>
              </div>
              <div className="singleSupport">
                <Check />
                <span>Customization</span>
              </div>
              <div className="singleSupport">
                <Check />
                <span>Analyst Support</span>
              </div>
              <div className="singleSupport">
                <Check />
                <span>Targeted Market View</span>
              </div>
            </div>

            {/* <div className="trustedPayment">
              <p>Trusted by more than 17382 organizations globally</p>
              <div className="trustImgWrap">
                <img src={cipla} alt="" />
                <img src={ibm} alt="" />
                <img src={lg} alt="" />
              </div>
            </div> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ReportPayment