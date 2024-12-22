import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('pk_live_51NfJziSFKPQ69W5q4f91Ti8y5JsKjDeMbIA88DJJ3VmlVxyKvtRaDEDleZ3Yo8GrK9ST3YzG25YH55noSKTQmBDn00WL8ADihN'); // Replace with your actual Stripe publishable key

const StripePay = ({ repId }) => {
    const handleClick = () => {
        axios.post('http://localhost:4000/create-checkout-session', { reportId: repId })
            .then(response => {
                const session = response.data;
                return stripePromise.then(stripe => {
                    return stripe.redirectToCheckout({
                        sessionId: session.id,
                    });
                });
            })
            .then(result => {
                if (result.error) {
                    console.error(result.error.message);
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <button role="link" onClick={handleClick}>
                Checkout With Stripe
            </button>
        </div>
    );
}

const StripePayWithElements = () => {
    return (
        <Elements stripe={stripePromise}>
            <StripePay />
        </Elements>
    )
}

export default StripePayWithElements;
