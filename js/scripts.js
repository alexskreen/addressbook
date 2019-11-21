$(document).ready(function() {
$("#blanks form").submit(function(event) {
  var nameInput = $("input#name").val();
  var addressInput = $("input#address").val();
  var emailInput = $("input#email").val();
  var phoneInput = $("input#phone").val();

  $(".name").text(nameInput);
  $(".address").text(addressInput);
  $(".email").text(emailInput);
  $(".phone").text(phoneInput);

  $("#order").show();

  event.preventDefault();
});

});
