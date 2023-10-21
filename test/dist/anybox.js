var Anybox;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it declares 'Anybox' on top-level, which conflicts with the current library output.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ init)
});

;// CONCATENATED MODULE: ./js/anybox/modules/animations.js
function Animation() {
  var _this = this;

  this.ca;
  this.ta;
  this.la;
  this.oa;

  this.animate = function (_ref) {
    var el = _ref.el,
        type = _ref.type,
        duration = _ref.duration,
        _ref$top = _ref.top,
        top = _ref$top === void 0 ? 50 : _ref$top;

    switch (type) {
      case "center":
        centerAnimation(el.parentElement, top, duration);
        break;

      case "left":
        leftAnimation(el.parentElement, duration);
        break;

      case "top":
        topAnimation(el.parentElement, top, duration);
        break;

      case "opacity":
        opacityAnimation(el.parentElement, duration, top);
        break;
    }
  };

  var centerAnimation = function centerAnimation(el) {
    var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
    el.style.top = top + "%";
    el.style.transformOrigin = "top left";
    _this.ca = el.animate([{
      transform: "scale(0) translate(-50%,-50%)"
    }, {
      transform: "scale(1.1) translate(-50%,-50%)"
    }, {
      transform: "scale(1) translate(-50%,-50%)"
    }, {
      transform: "scale(1) translate(-50%,-50%)"
    }, {
      transform: "scale(1) translate(-50%,-50%)"
    }, {
      transform: "scale(1) translate(-50%,-50%)"
    }], {
      duration: duration,
      fill: "forwards"
    });
  };

  var topAnimation = function topAnimation(el) {
    var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
    el.style.transformOrigin = "center";
    _this.ta = el.animate([{
      top: "0%"
    }, {
      top: top + 5 + "%"
    }, {
      top: top + "%"
    }, {
      top: top + "%"
    }, {
      top: top + "%"
    }, {
      top: top + "%"
    }], {
      duration: duration,
      fill: "forwards"
    });
  };

  var leftAnimation = function leftAnimation(el) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    _this.la = el.animate([{
      left: "0%"
    }, {
      left: "55%"
    }, {
      left: "50%"
    }, {
      left: "50%"
    }, {
      left: "50%"
    }, {
      left: "50%"
    }], {
      duration: duration,
      fill: "forwards"
    });
  };

  var opacityAnimation = function opacityAnimation(el) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    var top = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
    el.style.top = top + "%";
    _this.oa = el.animate([{
      opacity: "0"
    }, {
      opacity: "1"
    }], {
      duration: duration,
      fill: "forwards"
    });
  };

  this.getAnimation = function (type) {
    var an = {
      "center": _this.ca,
      "left": _this.la,
      "top": _this.ta,
      "opacity": _this.oa
    };
    return an[type];
  };

  this.opacityMinus = function (el) {
    el.reverse(); // el.style.opacity = "0"
  };

  this.topMinus = function (el) {
    el.reverse(); // el.style.top = "0%"
  };

  this.leftMinus = function (el) {
    el.reverse(); // el.style.left = "0%"
  };

  this.statusAnimation = function (success) {
    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#000";
    var dash = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "80";
    var svgDiv = document.createElement("div");
    svgDiv.style.position = "relative";
    svgDiv.style.width = "75px";
    svgDiv.style.height = "75px";
    svgDiv.style.margin = "auto";
    svgDiv.style.marginBottom = "30px";
    svgDiv.classList.add("svgDiv");
    var svg = document.createElement("div");
    svg.style.border = "2px dashed " + color;
    svg.style.borderRadius = "50%";
    svg.style.width = "70px";
    svg.style.height = "70px";
    svgDiv.innerHTML = success;
    var anim1 = svg.animate([// keyframes
    {
      transform: 'scale(0)'
    }, {
      transform: 'scale(1.1) '
    }, {
      transform: 'scale(1.3) '
    }, {
      transform: 'scale(1.3) '
    }, {
      transform: 'scale(1.3) '
    }, {
      transform: 'scale(1.1) '
    }, {
      transform: 'scale(1.0) '
    }], {
      // timing options
      duration: 600,
      easing: "ease-in"
    });
    svgDiv.querySelector("svg").querySelector("path").style.strokeDasharray = dash;
    svgDiv.querySelector("svg").querySelector("path").style.strokeDashoffset = dash;
    svgDiv.querySelector("svg").querySelector("path").style.fill = "transparent";
    svgDiv.querySelector("svg").setAttribute("stroke", color);
    var svgAnim = svgDiv.querySelector("svg").querySelector("path").animate([// keyframes
    {
      strokeDashoffset: 0
    }], {
      // timing options
      duration: 1250,
      fill: "forwards"
    });

    svgAnim.onfinish = function () {
      svgDiv.querySelector("svg").querySelector("path").animate([// keyframes
      {
        fill: color
      }], {
        // timing options
        duration: 300,
        fill: "forwards"
      });
    };

    anim1.onfinish = function () {
      svg.animate([// keyframes
      {
        transform: 'rotate(0deg) '
      }, {
        transform: 'rotate(360deg) '
      }], {
        // timing options
        duration: 3000,
        iterations: Infinity
      });
    };

    svgDiv.appendChild(svg);
    return svgDiv;
  };
}

/* harmony default export */ const animations = (Animation);
;// CONCATENATED MODULE: ./js/anybox/modules/base.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Base = /*#__PURE__*/_createClass(function Base() {
  var _this = this;

  _classCallCheck(this, Base);

  _defineProperty(this, "id", Date.now());

  _defineProperty(this, "globalAnimation", new animations());

  _defineProperty(this, "getBg", function () {
    var animation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var bg = document.createElement("div");
    bg.style.width = window.innerWidth + "px";
    bg.style.height = window.innerHeight + "px";
    bg.style.position = "fixed";
    bg.style.top = "0";
    bg.style.left = "0";
    bg.style.display = "none";
    bg.id = "bg_anybox-" + _this.id;
    bg.className = "bg_anybox";
    bg.addEventListener("click", function (evt) {
      if (evt.target.className == "bg_anybox") {
        var d = 0;

        if (animation) {
          d = _this.minus(animation.type);
        }

        setTimeout(function () {
          document.getElementById("bg_anybox-" + _this.id).style.transition = "all .2s ease";
          document.getElementById("bg_anybox-" + _this.id).style.opacity = "0";
          setTimeout(function () {
            document.getElementById("bg_anybox-" + _this.id).style.display = "none";
          }, 220);
        }, d / 1.2);
      }
    });
    return bg;
  });

  _defineProperty(this, "getBox", function (top) {
    var box = document.createElement("div");
    box.classList.add("box_anybox");
    box.style.top = top + "%";
    box.style.left = "50%";
    box.style.backgroundColor = "white";
    box.style.position = "absolute";
    box.style.transition = "all .2s ease";
    box.style.transform = "translate(-50%,-50%)";
    box.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
    box.style.borderRadius = "15px";
    box.style.width = "calc(100% - ".concat(window.innerWidth - 350, "px)");
    return box;
  });

  _defineProperty(this, "getCloseButton", function (closeButton) {
    var animation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var color = "";
    var location = "";
    var size = 25;

    if (_typeof(closeButton) == "object") {
      color = closeButton.fill;
      location = closeButton.location;
      size = closeButton.size;
    }

    var cb = "";

    if (animation) {
      cb = _this.addCloseButton(color, location, animation, animation.type, size);
    } else {
      cb = _this.addCloseButton(color, location, false, null, size);
    }

    return cb;
  });

  _defineProperty(this, "addCloseButton", function () {
    var btnColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "black";
    var location = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "right";
    var animation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var animationType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "opacity";
    var size = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 25;
    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.top = "-5px";
    location == "right" ? div.style.right = "-5px" : div.style.left = "-5px";
    var obj = document.createElement("div");
    obj.style.width = size + "px";
    obj.style.height = size + "px";
    obj.innerHTML = _this.svg;
    obj.children[0].style.fill = btnColor;
    console.log(_this.id);
    obj.addEventListener("click", function (evt) {
      var d = 0;

      if (animation) {
        d = _this.minus(animation.type);
      }

      setTimeout(function () {
        document.getElementById("bg_anybox-" + _this.id).style.transition = "all .2s ease";
        document.getElementById("bg_anybox-" + _this.id).style.opacity = "0";
        setTimeout(function () {
          document.getElementById("bg_anybox-" + _this.id).style.display = "none";
        }, 220);
      }, d / 1.2);
    });
    div.appendChild(obj);
    return div;
  });

  _defineProperty(this, "isColor", function (strColor) {
    return new Option().style.color = strColor !== '';
  });

  window.addEventListener("resize", function () {
    document.getElementById("bg_anybox-" + _this.id).style.width = window.innerWidth + "px";
    document.getElementById("bg_anybox-" + _this.id).style.height = window.innerHeight + "px";
    document.getElementById("bg_anybox-" + _this.id).querySelector(".box_anybox").style.width = "calc(100% - ".concat(window.innerWidth - 350, "px)");
  });
});

/* harmony default export */ const base = (Base);
;// CONCATENATED MODULE: ./js/anybox/modules/svg.js
// you can reach the following icons from Font Awesome website. https://fontawesome.com/
var svg = "<svg class=\"times\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d=\"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z\"/></svg>";
var right = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d=\"M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z\"/></svg>";
var left = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d=\"M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z\"/></svg>"; // you can reach the following icons from Google Material Icons website. https://fonts.google.com/icons

var success = "<svg style=\"position:absolute; left:50%; top:50%; transform:translate(-50%,-50%)\" xmlns=\"http://www.w3.org/2000/svg\" height=\"48\" fill=\"transparent\" stroke-width=\"1px\" width=\"48\"><path d=\"M18.9 35.7 7.7 24.5 9.85 22.35 18.9 31.4 38.1 12.2 40.25 14.35Z\"/></svg>";
var fail = "<svg style=\"position:absolute; left:50%; top:50%; transform:translate(-50%,-50%)\" fill=\"transparent\" stroke-width=\"1px\" xmlns=\"http://www.w3.org/2000/svg\" height=\"48\" width=\"48\"><path d=\"M12.45 37.95 10.05 35.55 21.6 24 10.05 12.45 12.45 10.05 24 21.6 35.55 10.05 37.95 12.45 26.4 24 37.95 35.55 35.55 37.95 24 26.4Z\"/></svg>";
var warning = "<svg style=\"position:absolute; left:50%; top:50%; transform:translate(-50%,-50%)\" xmlns=\"http://www.w3.org/2000/svg\" stroke-width=\"1px\"  height=\"48\" width=\"48\"><path d=\"M22.3 29.15V9.7H25.7V29.15ZM22.3 38.3V34.85H25.7V38.3Z\"/></svg>";
;// CONCATENATED MODULE: ./js/anybox/modules/lightbox.js
function lightbox_typeof(obj) { "@babel/helpers - typeof"; return lightbox_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, lightbox_typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function lightbox_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function lightbox_createClass(Constructor, protoProps, staticProps) { if (protoProps) lightbox_defineProperties(Constructor.prototype, protoProps); if (staticProps) lightbox_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function lightbox_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (lightbox_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function lightbox_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Lightbox = /*#__PURE__*/function (_Base) {
  _inherits(Lightbox, _Base);

  var _super = _createSuper(Lightbox);

  function Lightbox(lBsettings) {
    var _this;

    lightbox_classCallCheck(this, Lightbox);

    _this = _super.call(this);

    lightbox_defineProperty(_assertThisInitialized(_this), "left", left);

    lightbox_defineProperty(_assertThisInitialized(_this), "right", right);

    lightbox_defineProperty(_assertThisInitialized(_this), "svg", svg);

    lightbox_defineProperty(_assertThisInitialized(_this), "duration", void 0);

    lightbox_defineProperty(_assertThisInitialized(_this), "run", function (settings) {
      var srcs = _this.getSrcs();

      var bgColor = settings.bgColor,
          opacity = settings.opacity,
          top = settings.top,
          closeButton = settings.closeButton,
          animation = settings.animation,
          slider = settings.slider;

      _this.loadBaseElements(srcs, bgColor, opacity, top, closeButton, animation, slider);
    });

    lightbox_defineProperty(_assertThisInitialized(_this), "getSrcs", function () {
      var imgs = _this.getImages();

      var srcs = imgs.map(function (e) {
        return e.src;
      });
      return srcs;
    });

    lightbox_defineProperty(_assertThisInitialized(_this), "getImages", function () {
      return Array.from(document.querySelectorAll(".any-box_lightbox"));
    });

    lightbox_defineProperty(_assertThisInitialized(_this), "loadBaseElements", function (srcs) {
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "0,0,0";
      var opacity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "0.5";
      var top = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 50;
      var closeButton = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var animation = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var slider = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

      if (typeof animation == "boolean" && animation) {
        animation = {};
        animation.type = "opacity";
        animation.duration = 1000;
      }

      var bg = _this.getBg(animation);

      var box = _this.getBox(top);

      box.style.paddingBlock = "50px";

      if (_this.isColor("rgba(".concat(color, ",").concat(opacity, ")"))) {
        bg.style.background = "rgba(".concat(color, ",").concat(opacity, ")");
      } else {
        bg.style.background = "rgba(0,0,0,0.5)";
      }

      if (slider) {
        var element = _this.activeSlider(slider.buttonColor, slider.information, animation.type);

        box.appendChild(element);
      }

      if (animation.type == "opacity") {
        box.style.opacity = "0";
      }

      if (animation.type == "top") {
        box.style.top = "50%";
      } else {
        box.style.top = top + "%";
      }

      if (animation.type == "left") {
        box.style.left = "0%";
      } else {
        box.style.left = "50%";
      }

      for (var i = 0; i < srcs.length; i++) {
        var img = new Image();
        img.src = srcs[i];
        img.setAttribute("anybox_id", i);
        img.style.display = "none";
        img.style.margin = "auto";
        img.style.width = "100%";
        img.style.height = "auto";
        img.className = "any-box_lightbox_images";
        box.appendChild(img);
      }

      var images = _this.getImages();

      var _iterator = _createForOfIteratorHelper(images),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var image = _step.value;
          image.addEventListener("click", function (evt) {
            bg.style.opacity = "1";
            bg.style.display = "block";
            box.style.maxWidth = evt.currentTarget.naturalWidth + 50 + "px";
            console.log(document.querySelector(".box_anybox"));
            box.style.width = "100%";

            _this.showImage(evt.currentTarget, top, animation);
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (closeButton) {
        var cb = _this.getCloseButton(closeButton, animation);

        box.appendChild(cb);
      }

      bg.appendChild(box);
      document.body.appendChild(bg);
    });

    lightbox_defineProperty(_assertThisInitialized(_this), "isColor", function (strColor) {
      return new Option().style.color = strColor !== '';
    });

    lightbox_defineProperty(_assertThisInitialized(_this), "showImage", function (evt) {
      var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "50%";
      var animation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var filtered = Array.from(document.querySelectorAll(".any-box_lightbox_images")).filter(function (e) {
        return e.src == evt.src;
      });
      var notFiltered = Array.from(document.querySelectorAll(".any-box_lightbox_images")).filter(function (e) {
        return e.src != evt.src;
      });

      if (animation) {
        _this.globalAnimation.animate({
          el: filtered[0],
          duration: animation.duration,
          type: animation.type,
          top: top
        });
      }

      filtered[0].style.display = "block";
      filtered[0].classList.add("display_anybox");
      filtered[0].classList.remove("hide_anybox");
      notFiltered.forEach(function (e) {
        e.classList.add("hide_anybox");
        e.classList.remove("display_anybox");
        e.style.display = "none";
      });
      document.getElementById("butonDiv_anybox").setAttribute("btn_id_anybox", parseInt(_this.getChosenImage()) + 1);

      if (document.getElementById("infDiv")) {
        document.getElementById("infDiv").innerText = parseInt(_this.getChosenImage()) + 1;
      }
    });

    lightbox_defineProperty(_assertThisInitialized(_this), "activeSlider", function () {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "#111";
      var information = arguments.length > 1 ? arguments[1] : undefined;
      var animation = arguments.length > 2 ? arguments[2] : undefined;
      var butonDiv = document.createElement("div");
      butonDiv.style.position = "absolute";
      butonDiv.id = "butonDiv_anybox";
      butonDiv.style.bottom = "-30px";
      butonDiv.style.width = "100%";
      butonDiv.style.display = "flex";
      butonDiv.style.justifyContent = "space-between";
      butonDiv.style.alignItems = "center";
      var btn_left = document.createElement("button");
      btn_left.style.width = "30px";
      btn_left.style.border = "2px solid" + color;
      btn_left.style.borderRadius = "5px";
      btn_left.style.backgroundColor = "transparent";
      var infDiv = "";

      if (information) {
        infDiv = document.createElement("div");
        infDiv.style.fontFamily = "Arial, Helvetica, sans-serif";
        infDiv.innerHTML = "<span id=\"infDiv\"></span> of ".concat(_this.getSrcs().length, " images");
      }

      var btn_right = document.createElement("button");
      btn_right.style.width = "30px";
      btn_right.style.border = "2px solid" + color;
      btn_right.style.borderRadius = "5px";
      btn_right.style.backgroundColor = "transparent";
      btn_left.innerHTML = _this.left;
      btn_right.innerHTML = _this.right;
      btn_right.children[0].style.fill = color;
      btn_left.children[0].style.fill = color;
      btn_left.children[0].style.display = "flex";
      btn_right.children[0].style.display = "flex";
      btn_left.addEventListener("click", function () {
        var id = parseInt(document.getElementById("butonDiv_anybox").getAttribute("btn_id_anybox")) - 1;

        var images = _this.getImages();

        console.log(images[id - 1]);
        images[id - 1].click();
      });
      btn_right.addEventListener("click", function () {
        var id = parseInt(document.getElementById("butonDiv_anybox").getAttribute("btn_id_anybox")) - 1;

        var images = _this.getImages();

        console.log(images[id + 1]);
        images[id + 1].click();
      });
      butonDiv.appendChild(btn_left);

      if (information && typeof infDiv != "string") {
        butonDiv.appendChild(infDiv);
      }

      butonDiv.appendChild(btn_right);
      return butonDiv;
    });

    lightbox_defineProperty(_assertThisInitialized(_this), "addCloseButton", function () {
      var btnColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "black";
      var location = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "right";
      var animation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var animationType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "opacity";
      var size = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 25;
      var div = document.createElement("div");
      div.style.position = "absolute";
      div.style.top = "-5px";
      location == "right" ? div.style.right = "-5px" : div.style.left = "-5px";
      var obj = document.createElement("div");
      obj.style.width = size + "px";
      obj.style.height = size + "px";
      obj.innerHTML = _this.svg;
      obj.children[0].style.fill = btnColor;
      obj.addEventListener("click", function (evt) {
        var d = 0;

        if (animation) {
          d = _this.minus(animationType);
        }

        setTimeout(function () {
          document.body.querySelector(".bg_anybox").style.transition = "all .2s ease";
          document.body.querySelector(".bg_anybox").style.opacity = "0";
          setTimeout(function () {
            document.body.querySelector(".bg_anybox").style.display = "none";
          }, 220);
        }, d / 1.2);
      });
      div.appendChild(obj);
      return div;
    });

    lightbox_defineProperty(_assertThisInitialized(_this), "minus", function (type) {
      switch (type) {
        case "opacity":
          _this.globalAnimation.opacityMinus(_this.globalAnimation.getAnimation("opacity"));

          break;

        case "top":
          _this.globalAnimation.opacityMinus(_this.globalAnimation.getAnimation("top"));

          break;

        case "left":
          _this.globalAnimation.opacityMinus(_this.globalAnimation.getAnimation("left"));

          break;
      }

      return _this.duration;
    });

    lightbox_defineProperty(_assertThisInitialized(_this), "getChosenImage", function () {
      return document.querySelector(".display_anybox").getAttribute("anybox_id");
    });

    _this.duration = lBsettings.animation.duration;

    _this.run(lBsettings);

    return _this;
  }

  return lightbox_createClass(Lightbox);
}(base);

/* harmony default export */ const lightbox = (Lightbox);
;// CONCATENATED MODULE: ./js/anybox/modules/alertbox.js
function alertbox_typeof(obj) { "@babel/helpers - typeof"; return alertbox_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, alertbox_typeof(obj); }

function alertbox_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function alertbox_createClass(Constructor, protoProps, staticProps) { if (protoProps) alertbox_defineProperties(Constructor.prototype, protoProps); if (staticProps) alertbox_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function alertbox_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function alertbox_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) alertbox_setPrototypeOf(subClass, superClass); }

function alertbox_setPrototypeOf(o, p) { alertbox_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return alertbox_setPrototypeOf(o, p); }

function alertbox_createSuper(Derived) { var hasNativeReflectConstruct = alertbox_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = alertbox_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = alertbox_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return alertbox_possibleConstructorReturn(this, result); }; }

function alertbox_possibleConstructorReturn(self, call) { if (call && (alertbox_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return alertbox_assertThisInitialized(self); }

function alertbox_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function alertbox_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function alertbox_getPrototypeOf(o) { alertbox_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return alertbox_getPrototypeOf(o); }

function alertbox_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Alertbox = /*#__PURE__*/function (_Base) {
  alertbox_inherits(Alertbox, _Base);

  var _super = alertbox_createSuper(Alertbox);

  function Alertbox(lBsettings) {
    var _this;

    alertbox_classCallCheck(this, Alertbox);

    _this = _super.call(this);

    alertbox_defineProperty(alertbox_assertThisInitialized(_this), "success", success);

    alertbox_defineProperty(alertbox_assertThisInitialized(_this), "svg", svg);

    alertbox_defineProperty(alertbox_assertThisInitialized(_this), "fail", fail);

    alertbox_defineProperty(alertbox_assertThisInitialized(_this), "warning", warning);

    alertbox_defineProperty(alertbox_assertThisInitialized(_this), "status", {
      "success": {
        svg: _this.success,
        color: "#198754",
        dash: "150"
      },
      "fail": {
        svg: _this.fail,
        color: "#FC100D",
        dash: "400"
      },
      "warning": {
        svg: _this.warning,
        color: "#FFCC00",
        dash: "150"
      }
    });

    alertbox_defineProperty(alertbox_assertThisInitialized(_this), "run", function (settings) {
      var bgColor = settings.bgColor,
          opacity = settings.opacity,
          top = settings.top,
          closeButton = settings.closeButton,
          message = settings.message,
          headline = settings.headline,
          buttons = settings.buttons,
          svgStatus = settings.svgStatus,
          animation = settings.animation;

      _this.loadBaseElements(bgColor, opacity, top, closeButton, message, headline, buttons, svgStatus, animation);
    });

    alertbox_defineProperty(alertbox_assertThisInitialized(_this), "show", function () {
      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var animation = arguments.length > 1 ? arguments[1] : undefined;

      if (status) {
        document.getElementById("bg_anybox-" + _this.id).querySelector(".svgDiv").remove();
        var _this$status$status = _this.status[status],
            _svg = _this$status$status.svg,
            color = _this$status$status.color,
            dash = _this$status$status.dash;

        var svgDiv = _this.globalAnimation.statusAnimation(_svg, color, dash);

        document.getElementById("bg_anybox-" + _this.id).querySelector("#svgPlace").appendChild(svgDiv);
      }

      if (animation) {
        document.getElementById("bg_anybox-" + _this.id).querySelector("#all").parentElement.style.transform = "scale(0) translate(-50%,-50%)";

        _this.globalAnimation.animate({
          el: document.getElementById("bg_anybox-" + _this.id).querySelector("#all"),
          type: "center",
          duration: 1000,
          top: 40
        });
      }

      document.getElementById("bg_anybox-" + _this.id).style.opacity = "1";
      document.getElementById("bg_anybox-" + _this.id).style.display = "block";
    });

    alertbox_defineProperty(alertbox_assertThisInitialized(_this), "loadBaseElements", function () {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "0,0,0";
      var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "0.5";
      var top = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "50%";
      var closeButton = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var message = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var headline = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var buttons = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
      var svgStatus = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
      var animation = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;

      var bg = _this.getBg();

      var box = _this.getBox(top);

      var svgPlace = document.createElement("div");
      var all = document.createElement("div");
      all.id = "all";
      svgPlace.id = "svgPlace";
      var head = "";
      var p = "";
      box.style.fontFamily = "sans-serif";

      if (headline && (headline.length > 0 || headline.text.length > 0)) {
        if (typeof headline == "string") {
          head = document.createElement("h3");
          head.innerText = headline;
          head.style.paddingLeft = "20px";
          head.style.paddingBottom = "10px";
          head.style.borderBottom = "1px solid #cdcdcd";
        } else {
          head = document.createElement("h" + headline.level);
          head.innerText = headline.text;
          head.style.paddingLeft = "20px";
          head.style.paddingBottom = "10px";
          head.style.fontFamily = headline.fontFamily;
          head.style.borderBottom = "1px solid #cdcdcd";
          head.style.color = headline.color;
        }
      }

      var btn;

      if (buttons) {
        btn = _this.addButtons(buttons, closeButton);
      }

      if (message && (message.length > 0 || message.text.length > 0)) {
        if (typeof message == "string") {
          p = document.createElement("p");
          p.innerText = message;
          p.style.paddingInline = "50px";
        } else {
          p = document.createElement("p");
          p.innerText = message.text;
          p.style.fontFamily = message.fontFamily;
          p.style.color = message.color;

          switch (message.textAlign) {
            case "center":
              p.style.paddingInline = "50px";
              break;

            case "left":
              p.style.paddingRight = "50px";
              p.style.paddingLeft = "20px";
              break;

            case "right":
              p.style.paddingLeft = "50px";
              p.style.paddingRight = "20px";
              break;
          }
        }
      }

      if (_this.isColor("rgba(".concat(color, ",").concat(opacity, ")"))) {
        bg.style.background = "rgba(".concat(color, ",").concat(opacity, ")");
      } else {
        bg.style.background = "rgba(0,0,0,0.5)";
      }

      if (closeButton) {
        var cb = _this.getCloseButton(closeButton, false);

        all.appendChild(cb);
      }

      if (head) {
        all.appendChild(head);
      }

      all.appendChild(svgPlace);

      if (svgStatus) {
        var _this$status$svgStatu = _this.status[svgStatus],
            _svg2 = _this$status$svgStatu.svg,
            _color = _this$status$svgStatu.color,
            dash = _this$status$svgStatu.dash;
        var svgDiv = new animations().statusAnimation(_svg2, _color, dash);
        svgPlace.appendChild(svgDiv);
      }

      if (p) {
        all.appendChild(p);
      }

      if (btn) {
        all.appendChild(btn);
      }

      box.appendChild(all);
      bg.appendChild(box);
      document.body.appendChild(bg);

      if (animation) {
        new animations().animate({
          el: document.getElementById("bg_anybox-" + _this.id).querySelector("#all"),
          type: "center",
          duration: 1000
        });
      }
    });

    alertbox_defineProperty(alertbox_assertThisInitialized(_this), "defaultClickFunction", function () {
      document.getElementById("bg_anybox-" + _this.id).style.opacity = "0";
      document.getElementById("bg_anybox-" + _this.id).style.display = "none";
    });

    alertbox_defineProperty(alertbox_assertThisInitialized(_this), "addButtons", function (buttons, closeButton) {
      console.log(closeButton.fill);
      var buttonsDiv = document.createElement("div");
      buttonsDiv.style.display = "flex";
      buttonsDiv.style.flexWrap = "no-wrap";
      buttonsDiv.style.borderTop = "1px solid #cdcdcd";
      buttonsDiv.style.justifyContent = "space-around";
      buttonsDiv.style.paddingBlock = "10px";

      if (typeof buttons == "boolean" && buttons) {
        var btn = document.createElement("button");
        btn.innerText = "OK";
        btn.onclick = _this.defaultClickFunction;
        btn.style.cursor = "pointer";
        btn.style.color = closeButton.fill || "#000";
        buttonsDiv.appendChild(btn);
        return buttonsDiv;
      } else {
        var _btn;

        for (var i = 0; i < buttons.length; i++) {
          _btn = document.createElement("button");
          _btn.style.cursor = "pointer";

          if (buttons.length % 2 == 0) {
            if (i != 0) {
              _btn.style.border = "none";
              _btn.style.borderLeft = "1px solid" + (closeButton.fill || "#000");
            } else {
              _btn.style.border = "none";
            }
          } else {
            if (i == 0 || i == buttons.length - 1) {
              _btn.style.border = "none";
            } else {
              _btn.style.border = "none";
              _btn.style.borderLeft = "1px solid" + (closeButton.fill || "#000");
              _btn.style.borderRight = "1px solid" + (closeButton.fill || "#000");
            }
          }

          _btn.innerText = buttons[i].buttonName;
          _btn.style.flexGrow = "1";
          _btn.style.color = closeButton.fill || "#000";
          _btn.style.backgroundColor = "transparent";
          _btn.onclick = buttons[i]["function"] || _this.defaultClickFunction;
          buttonsDiv.appendChild(_btn);
        }

        return buttonsDiv;
      }
    });

    _this.run(lBsettings);

    window.addEventListener("resize", function () {
      console.log(window.innerHeight);
      console.log(window.innerWidth);
    });
    return _this;
  }

  return alertbox_createClass(Alertbox);
}(base);

/* harmony default export */ const alertbox = (Alertbox);
;// CONCATENATED MODULE: ./js/anybox/init.js
function init_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function init_createClass(Constructor, protoProps, staticProps) { if (protoProps) init_defineProperties(Constructor.prototype, protoProps); if (staticProps) init_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function init_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Anybox = /*#__PURE__*/init_createClass(function Anybox(type, settings) {
  init_classCallCheck(this, Anybox);

  if (type.toLowerCase() == "lightbox") {
    var lb = new lightbox(settings);
  } else if (type.toLowerCase() == "alertbox") {
    var al = new alertbox(settings);
    return al;
  }
});

/* harmony default export */ const init = (Anybox);
})();

Anybox = __webpack_exports__["default"];
/******/ })()
;