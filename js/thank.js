$(".form").each(function () {
  $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "Your name must contain at least 2 symbols",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: {
        required: "We need your phone number to contact you",
        minlength: "Your phone must contain at least 11 numbers",
      },
    },
  });
});

$(document).ready(function () {
  $(".tel").mask("+7 (000) 000-00-00");
});