import React from 'react'
import StripeCheckout from'react-stripe-checkout'


const StripeButton = ({ price}) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51I1eOeFLP4g8qHs9SmfxxwS3wfM0krd3oyRP9AxEaoaX7ZjfJdD8z11RDkm9MaFdA94hVJ7NzrgLoZBddkLlxrHd00ZX6hy3pq'

  const onToken = () => {

  }

  return (
    <div>
      <StripeCheckout
        label='Pay Now'
        name='ReactStore'
        billingAddress
        shippingAddress
        description={`Total Price is ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  )
}

export default StripeButton
