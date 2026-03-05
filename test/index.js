// ── Lightbox ──
var lightBox = new Anybox("lightbox", {
  bgColor: "0,0,0",
  opacity: "0.85",
  top: 50,
  slider: {
    buttonColor: "#fff",
    information: true,
  },
  animation: {
    type: "bounce",
    duration: 700,
  },
  imageTransition: "slide",
  imageTransitionDuration: 350,
  closeButton: {
    size: 22,
    fill: "#fff",
    location: "right",
  },
});

// Image transition pill selector
document.querySelectorAll("#transitionPills .pill").forEach(function (pill) {
  pill.addEventListener("click", function () {
    document.querySelectorAll("#transitionPills .pill").forEach(function (p) {
      p.classList.remove("active");
    });
    pill.classList.add("active");
    lightBox._imageTransition = pill.getAttribute("data-transition");
  });
});

// Lightbox open animation pill selector
document.querySelectorAll("#lightboxAnimPills .pill").forEach(function (pill) {
  pill.addEventListener("click", function () {
    document.querySelectorAll("#lightboxAnimPills .pill").forEach(function (p) {
      p.classList.remove("active");
    });
    pill.classList.add("active");
    lightBox._animationType = pill.getAttribute("data-anim");
  });
});

// ── Alertbox (Dark) ──
var alertBoxDark = new Anybox("alertbox", {
  bgColor: "0,0,0",
  theme: "dark",
  headline: {
    text: "Alert Box",
    level: 3,
  },
  message: {
    text: "This is an alert message with dark theme support.",
    textAlign: "center",
  },
  svgStatus: "warning",
  buttons: [
    {
      buttonName: "OK",
      function: function () {
        alertBoxDark.defaultClickFunction();
      },
    },
    {
      buttonName: "Cancel",
    },
  ],
  opacity: "0.5",
  top: 40,
  closeButton: {
    size: 20,
    location: "right",
  },
});

// ── Alertbox (Light) ──
var alertBoxLight = new Anybox("alertbox", {
  bgColor: "0,0,0",
  theme: "light",
  headline: {
    text: "Alert Box",
    level: 3,
  },
  message: {
    text: "This is an alert message with light theme support.",
    textAlign: "center",
  },
  svgStatus: "warning",
  buttons: [
    {
      buttonName: "OK",
      function: function () {
        alertBoxLight.defaultClickFunction();
      },
    },
    {
      buttonName: "Cancel",
    },
  ],
  opacity: "0.3",
  top: 40,
  closeButton: {
    size: 20,
    location: "right",
  },
});

// Active alertbox reference
var activeAlertBox = alertBoxDark;

// Theme toggle
document.querySelectorAll("#themePills .pill").forEach(function (pill) {
  pill.addEventListener("click", function () {
    document.querySelectorAll("#themePills .pill").forEach(function (p) {
      p.classList.remove("active");
    });
    pill.classList.add("active");
    activeAlertBox =
      pill.getAttribute("data-theme") === "dark" ? alertBoxDark : alertBoxLight;
  });
});

// Status buttons
document.getElementById("success").addEventListener("click", function () {
  activeAlertBox.show("success", { type: "bounce", duration: 700 });
});

document.getElementById("fail").addEventListener("click", function () {
  activeAlertBox.show("fail", { type: "elastic", duration: 800 });
});

document.getElementById("warning").addEventListener("click", function () {
  activeAlertBox.show("warning", { type: "center", duration: 600 });
});

// ── Open Animation Showcase ──
document.querySelectorAll(".anim-card").forEach(function (card) {
  card.addEventListener("click", function () {
    var animType = card.getAttribute("data-anim");
    activeAlertBox.show("success", { type: animType, duration: 700 });
  });
});
