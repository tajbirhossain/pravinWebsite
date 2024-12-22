import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import debounce from 'lodash.debounce';

const PaypalPay = ({ customerName, email, phone, designation, company, country, mainSelect, storeItem, repId, analystAmount }) => {
    const paypal = useRef(null);
    const navigate = useNavigate();


    const updatePaypalButton = debounce(() => {
        const createPaypalButton = () => {
            return window.paypal.Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [{
                            description: `Report id: ${repId}`,
                            amount: {
                                value: (
                                    (mainSelect === 0 ? storeItem.priceForEnterpriseUser :
                                        mainSelect === 1 ? storeItem.priceForSingleUser :
                                            storeItem.priceForCorporateUser) + analystAmount
                                ),
                                currency_code: "USD"
                            }
                        }]
                    });
                },
                onApprove: async (data, actions) => {
                    try {
                        const order = await actions.order.capture();
                        console.log(order);

                        const response = await axios.post(process.env.REACT_APP_CREATE_INVOICE_API, {
                            customerName,
                            email,
                            phone: String(phone),
                            designation,
                            company,
                            country,
                            invoiceAmount: (
                                (mainSelect === 0 ? storeItem.priceForEnterpriseUser :
                                    mainSelect === 1 ? storeItem.priceForSingleUser :
                                        storeItem.priceForCorporateUser) + analystAmount
                            ),
                            paymentMethod: "paypal",
                            reportId: Number(repId)
                        });

                        console.log(response.data);
                        navigate("/thank-you-for-purchase/digital");
                    } catch (error) {
                        console.error(error);
                        window.alert("Something went wrong!");
                    }
                },
                onError: err => {
                    console.error(err);
                    window.alert("Something went wrong!");
                }
            });
        };

        const paypalButton = createPaypalButton();

        paypalButton.render(paypal.current);

        return () => {
            paypalButton.close();
        };
    }, 300);


    const clearPaypalInnerHTML = debounce(() => {
        const paypalElement = paypal.current;
        if (paypalElement) {
            paypalElement.innerHTML = '';
        }
    }, 300);

    useEffect(() => {
        clearPaypalInnerHTML()
        updatePaypalButton();
        return () => {
            updatePaypalButton.cancel();
            clearPaypalInnerHTML.cancel();
        };
    }, [mainSelect, analystAmount, customerName, email, phone, designation, company, country, storeItem, repId]);


    return (
        <div className='paypalPay'>
            <div ref={paypal}></div>
        </div>
    );
};

export default PaypalPay;
