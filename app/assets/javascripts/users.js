$(document).ready(function () {
  Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
  // Watch form form submission
  $("#form-submit-btn").click(function(event) {
      $('input[type-submit]').prop('disabled', true);
      var error = false;
      var ccNum = $('#card_number').val(),
          cvcNum = $('#card_code').val(),
          expMonth = $('#card_month').val(),
          expYear = $('#card_year').val();
    if (!error) {
        //Get the Stripe token:
        Stripe.createToken({
            number: ccNum,
            cvc: cvcNum,
            exp_month: expMonth,
            exp_year: expYear
        }, stripeResponseHandler);
        
    }
    return false;
    });  // form submission
        
  function stripeResponseHandler(status, response) {
      //Get a refrence to a form
      var f= $("new_user");
      
      //get the token from the resonse
      var token = response.id;
      
      //add token to ther form:
      f.append('nput type="hidden" name="user[stripe_card_token]" value="' + token + '" />');
      
      //submit the form
      f.get(0).submit();
  }
})