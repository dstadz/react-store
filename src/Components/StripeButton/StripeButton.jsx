import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";


const RASPK:string = process.env.REACT_APP_STRIPE_PUBLIC_KEY
const promise = loadStripe(RASPK);

export default function CheckOutFormWrapper() {
  return (
    <Elements stripe={promise}>
      <CheckoutForm />
    </Elements>
  );
}


export const StripeButton = () => {
  const handleClick = async (event:any) => {
    // Get Stripe.js instance
    // const stripe = await promise;

    // // Call your backend to create the Checkout Session
    // const response = await fetch('/create-checkout-session', { method: 'POST' });

    // const session = await response.json();
    // console.log('session',session)
    // // When the customer clicks on the button, redirect them to Checkout.
    // const result = await stripe.redirectToCheckout({
    //   sessionId: session.id,
    // });

    // if (result.error) {
    //   // If `redirectToCheckout` fails due to a browser or network
    //   // error, display the localized error message to your customer
    //   // using `result.error.message`.
    // }
  };

  return (
    <button role="link" onClick={handleClick}>
      Checkout button
    </button>
  );
}

const CheckoutForm = () => {
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    window.fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({items: [{ id: "xl-tshirt" }]})
    })
      .then(res => {
        console.log(res.body)
        return res.json()
      })
      .then(data => {
        console.log(data)
        setClientSecret(data.clientSecret)
      });
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };
  const handleChange = async (event:any) => {
    // Listen for changes in the CardElement and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev:any) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement) }
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };
  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
      <button
        disabled={processing || disabled || succeeded}
        id="submit"
      >
        <span id="button-text">
          {processing
            ? <div className="spinner" id="spinner"></div>
            : "Pay"
          }
        </span>
      </button>


      {/* Show any error that happens when processing the payment */}
      {error && <div className="card-error" role="alert"> {error} </div> }
      {/* Show a success message upon completion */}


      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded, see the result in your
        <a href={`https://dashboard.stripe.com/test/payments`} >
          {" "}
          Stripe dashboard.
        </a> Refresh the page to pay again.
      </p>
    </form>
  );
}