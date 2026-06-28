/* =========================================================
   KULDEVI KRUPA CAB — MAIN JS
   - Mobile nav toggle
   - Booking widget tab switching
   - WhatsApp form submission (all booking & contact forms)
   - FAQ accordion (services page)
   ========================================================= */

var WA_NUMBER = "919909953795"; // +91 9909953795

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

  /* ---- Utility: format date nicely ---- */
  function formatDate(val) {
    if (!val) return "—";
    var d = new Date(val + "T00:00:00");
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  }

  /* ---- Utility: open WhatsApp with message ---- */
  function sendToWhatsApp(message) {
    var url = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
  }

  /* ---- ONE WAY form ---- */
  var owForm = document.querySelector('[data-panel="oneway"] form');
  if (owForm) {
    owForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var from    = document.getElementById("ow-from").value;
      var to      = document.getElementById("ow-to").value;
      var date    = formatDate(document.getElementById("ow-date").value);
      var mobile  = document.getElementById("ow-mobile").value;

      var msg =
        "🚖 *New Cab Enquiry — One Way*\n\n" +
        "📍 From  : " + from   + "\n" +
        "📍 To    : " + to     + "\n" +
        "📅 Date  : " + date   + "\n" +
        "📱 Mobile: " + mobile + "\n\n" +
        "Please confirm availability & fare.\n" +
        "— KuldeviKrupaCab.com";

      sendToWhatsApp(msg);
      owForm.reset();
    });
  }

  /* ---- ROUND TRIP form ---- */
  var rtForm = document.querySelector('[data-panel="roundtrip"] form');
  if (rtForm) {
    rtForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var from    = document.getElementById("rt-from").value;
      var to      = document.getElementById("rt-to").value;
      var date    = formatDate(document.getElementById("rt-date").value);
      var mobile  = document.getElementById("rt-mobile").value;

      var msg =
        "🔄 *New Cab Enquiry — Round Trip*\n\n" +
        "📍 From      : " + from   + "\n" +
        "📍 To        : " + to     + "\n" +
        "📅 Departure : " + date   + "\n" +
        "📱 Mobile    : " + mobile + "\n\n" +
        "Please confirm availability & fare.\n" +
        "— KuldeviKrupaCab.com";

      sendToWhatsApp(msg);
      rtForm.reset();
    });
  }

  /* ---- LOCAL RENTAL form ---- */
  var loForm = document.querySelector('[data-panel="local"] form');
  if (loForm) {
    loForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var city    = document.getElementById("lo-city").value;
      var pkg     = document.getElementById("lo-package").value;
      var date    = formatDate(document.getElementById("lo-date").value);
      var mobile  = document.getElementById("lo-mobile").value;

      var msg =
        "🏙️ *New Cab Enquiry — Local Rental*\n\n" +
        "📍 City    : " + city   + "\n" +
        "📦 Package : " + pkg    + "\n" +
        "📅 Date    : " + date   + "\n" +
        "📱 Mobile  : " + mobile + "\n\n" +
        "Please confirm availability & fare.\n" +
        "— KuldeviKrupaCab.com";

      sendToWhatsApp(msg);
      loForm.reset();
    });
  }

  /* ---- CONTACT PAGE form ---- */
  var cForm = document.querySelector(".contact-form-card form");
  if (cForm) {
    cForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name    = document.getElementById("c-name").value;
      var mobile  = document.getElementById("c-mobile").value;
      var from    = document.getElementById("c-from").value    || "—";
      var to      = document.getElementById("c-to").value      || "—";
      var date    = formatDate(document.getElementById("c-date").value);
      var cab     = document.getElementById("c-cab").value     || "Not specified";
      var message = document.getElementById("c-message").value || "—";

      var msg =
        "📋 *Cab Booking Request*\n\n" +
        "👤 Name   : " + name    + "\n" +
        "📱 Mobile : " + mobile  + "\n" +
        "📍 From   : " + from    + "\n" +
        "📍 To     : " + to      + "\n" +
        "📅 Date   : " + date    + "\n" +
        "🚗 Cab    : " + cab     + "\n" +
        "💬 Note   : " + message + "\n\n" +
        "— KuldeviKrupaCab.com";

      sendToWhatsApp(msg);
      cForm.reset();
    });
  }

});
