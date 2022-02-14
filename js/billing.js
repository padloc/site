(() => {
  // ns-params:@params
  var stripePublicKey = "";

  // <stdin>
  (async () => {
    const params = new URLSearchParams(window.location.search);
    const stripe = new Stripe(stripePublicKey);
    window.stripe = stripe;
    const action = params.get("action");
    const sessionId = params.get("session_id");
    switch (action) {
      case "checkout_success":
        alert("You have successfully completed your purchase! A receipt will be sent to you via email shortly.");
        window.location = "/";
        break;
      case "checkout":
        if (!sessionId) {
          window.location = "/";
        }
        try {
          const result = await stripe.redirectToCheckout({ sessionId });
          if (result.error) {
            throw result.error;
          }
        } catch (e) {
          console.error(e);
          alert("An unexpected error occured! Please contact us at support@pentacode.app!");
          window.location = "/";
        }
        break;
      default:
        window.location = "/";
    }
  })();
})();
