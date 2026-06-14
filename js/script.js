/* =========================================================
   ONEWAY CAB — MINIMAL JS
   - Mobile nav toggle
   - Booking widget tab switching
   - FAQ accordion (services page)
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ---- Mobile nav toggle ---- */
  var navToggle = document.querySelector(".nav-toggle");
  var header = document.querySelector(".site-header");
  if (navToggle && header) {
    navToggle.addEventListener("click", function () {
      header.classList.toggle("nav-open");
    });
  }

  /* ---- Booking widget tabs ---- */
  var tabButtons = document.querySelectorAll(".booking-tabs button");
  var panels = document.querySelectorAll(".booking-panel");
  tabButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = btn.getAttribute("data-tab");

      tabButtons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");

      panels.forEach(function (p) {
        p.classList.toggle("active", p.getAttribute("data-panel") === target);
      });
    });
  });

  /* ---- FAQ accordion ---- */
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var question = item.querySelector(".faq-question");
    if (!question) return;
    question.addEventListener("click", function () {
      var wasOpen = item.classList.contains("open");
      faqItems.forEach(function (i) { i.classList.remove("open"); });
      if (!wasOpen) item.classList.add("open");
    });
  });

  /* ---- Booking forms: simple success feedback (no backend) ---- */
  document.querySelectorAll(".booking-panel form, .contact-form-card form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thanks! Your request has been noted. Our team will call you shortly.\n(Connect this form to your backend / WhatsApp / email to receive real bookings.)");
      form.reset();
    });
  });

});
