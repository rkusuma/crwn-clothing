import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100; // in cent
  const publishableKey =
    'pk_test_51JHLnpIi30BTkcxx77oMk9fu55HOiSBFGJBopTObhDnU82lCN8btY5putblNr6vjaPhvt0gXWAlFjqNn8JbcBTXE00E9WHsTzC';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
