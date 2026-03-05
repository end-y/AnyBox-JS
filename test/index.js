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

// ── Tooltip ──
// Each tooltip-target has its own placement via data-placement
document.querySelectorAll(".tooltip-target").forEach(function (el) {
  var placement = el.getAttribute("data-placement") || "top";
  new Anybox("tooltip", {
    selector: '[data-placement="' + placement + '"]',
    placement: placement,
  });
});

// ── Notification ──
var notifPosition = "top-right";
var notifAnim = "slide";

var notification = new Anybox("notification", {
  position: notifPosition,
  duration: 4000,
  animationType: notifAnim,
  animationDuration: 300,
});

// Position pill selector
document.querySelectorAll("#notifPositionPills .pill").forEach(function (pill) {
  pill.addEventListener("click", function () {
    document
      .querySelectorAll("#notifPositionPills .pill")
      .forEach(function (p) {
        p.classList.remove("active");
      });
    pill.classList.add("active");
    notifPosition = pill.getAttribute("data-pos");
    notification.destroy();
    notification = new Anybox("notification", {
      position: notifPosition,
      duration: 4000,
      animationType: notifAnim,
      animationDuration: 300,
    });
  });
});

// Animation pill selector
document.querySelectorAll("#notifAnimPills .pill").forEach(function (pill) {
  pill.addEventListener("click", function () {
    document.querySelectorAll("#notifAnimPills .pill").forEach(function (p) {
      p.classList.remove("active");
    });
    pill.classList.add("active");
    notifAnim = pill.getAttribute("data-anim");
    notification._animationType = notifAnim;
  });
});

// Notification status buttons
document.getElementById("notifSuccess").addEventListener("click", function () {
  notification.show("success", {
    title: "Success!",
    message: "Your changes have been saved successfully.",
  });
});

document.getElementById("notifDanger").addEventListener("click", function () {
  notification.show("danger", {
    title: "Error",
    message: "Something went wrong. Please try again.",
  });
});

document.getElementById("notifWarning").addEventListener("click", function () {
  notification.show("warning", {
    title: "Warning",
    message: "This action cannot be undone.",
  });
});
