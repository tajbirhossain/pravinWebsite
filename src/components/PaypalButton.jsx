import React, { useEffect, useRef } from 'react';

const PaypalButton = ({ repId, mainSelect, storeItem, analystAmount, onSuccess, onError }) => {
    const paypal = useRef(null);

    // Create PayPal button outside the useEffect hook
    useEffect(() => {
        if (!paypal.current) {
            paypal.current = window.paypal.Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: 'CAPTURE',
                        purchase_units: [{
                            description: `Report id: ${repId}`,
                            amount: {
                                value: (
                                    (mainSelect === 0 ? storeItem.priceForEnterpriseUser :
                                        mainSelect === 1 ? storeItem.priceForSingleUser :
                                            storeItem.priceForCorporateUser) + analystAmount
                                ),
                                currency_code: 'USD',
                            },
                        }],
                    });
                },
                onApprove: async (data, actions) => {
                    try {
                        const order = await actions.order.capture();
                        console.log('Payment successful:', order);
                        onSuccess(order);
                    } catch (error) {
                        console.error('Error capturing payment:', error);
                        onError(error);
                    }
                },
                onError: (err) => {
                    console.error('PayPal error:', err);
                    onError(err);
                },
            });
            paypal.current.render('#paypal-button-container');
        }
    }, [repId, mainSelect, storeItem, analystAmount, onSuccess, onError]);

    return (
        <div className="paypalPay">
            <div id="paypal-button-container"></div>
        </div>
    );
};

export default PaypalButton;
