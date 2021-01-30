import $ from 'jquery';

$(document).ready(() => {
  const $contactForm = $('#qd-contact-form');
  const $thanksMessage = $('#qd-thanks-message');
  $contactForm.submit(function (e) {
    e.preventDefault();
    let inputData = $(this).serializeArray();
    let data = {};
    $.each(inputData, function (i, input) {
      data[input.name] = input.value;
    });
    data['headers'] = {Host: window.location.origin};
    $.ajax({
      url: 'https://pg9getq1f5.execute-api.us-east-2.amazonaws.com/default/send_contact_email',
      type: 'POST',
      data: JSON.stringify(data),
      headers: {
        // Kind of redundant since this endpoint needs to remain public - but better than nothing
        'x-api-key': '0XbXUlDncratBJ3cV9eSl1uBnRHlTpdR8Fx7bKux',
        'Content-Type': 'application/json',
      },
      dataType: 'json',
      success: function (data) {
        $contactForm.hide();
        $thanksMessage.fadeIn('slow');
      }
    });
  });
});
