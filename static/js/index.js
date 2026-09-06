$(document).ready(function () {
  // Toggle the mobile navbar burger menu.
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});
