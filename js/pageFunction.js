$("#menu-toggler").on("click", () => {
  if ($("#menu").css("display") == "none") {
    $("#menu").show(20000);
  } else {
    $("#menu").hide(20000);
  }
});

$('.speed-button').on("click", function () {
  $('.speed-button').removeClass('selected');
  $(this).addClass('selected');
  let selectedValue = $(this).val();
  // Use the selectedValue in your code
});