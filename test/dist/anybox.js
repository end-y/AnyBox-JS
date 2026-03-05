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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
        top = _ref$top === void 0 ? 50 : _ref$top,
        _ref$direct = _ref.direct,
        direct = _ref$direct === void 0 ? false : _ref$direct;
    var target = direct ? el : el.parentElement;

    switch (type) {
      case "center":
        centerAnimation(target, top, duration);
        break;

      case "left":
        leftAnimation(target, duration);
        break;

      case "right":
        rightAnimation(target, duration);
        break;

      case "top":
        topAnimation(target, top, duration);
        break;

      case "bottom":
        bottomAnimation(target, top, duration);
        break;

      case "opacity":
        opacityAnimation(target, duration, top);
        break;

      case "flip":
        flipAnimation(target, top, duration);
        break;

      case "rotate":
        rotateAnimation(target, top, duration);
        break;

      case "bounce":
        bounceAnimation(target, top, duration);
        break;

      case "elastic":
        elasticAnimation(target, top, duration);
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
    }], {
      duration: duration,
      fill: "forwards"
    });
  };

  var bottomAnimation = function bottomAnimation(el) {
    var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
    el.style.transformOrigin = "center";
    _this.ta = el.animate([{
      top: "100%"
    }, {
      top: top - 5 + "%"
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
    }], {
      duration: duration,
      fill: "forwards"
    });
  };

  var rightAnimation = function rightAnimation(el) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    _this.la = el.animate([{
      left: "100%"
    }, {
      left: "45%"
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

  var flipAnimation = function flipAnimation(el) {
    var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
    el.style.top = top + "%";
    el.style.transformOrigin = "top left";
    _this.ca = el.animate([{
      transform: "perspective(600px) rotateY(90deg) translate(-50%,-50%)",
      opacity: 0
    }, {
      transform: "perspective(600px) rotateY(-10deg) translate(-50%,-50%)",
      opacity: 1
    }, {
      transform: "perspective(600px) rotateY(0deg) translate(-50%,-50%)",
      opacity: 1
    }], {
      duration: duration,
      fill: "forwards"
    });
  };

  var rotateAnimation = function rotateAnimation(el) {
    var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
    el.style.top = top + "%";
    el.style.transformOrigin = "top left";
    _this.ca = el.animate([{
      transform: "scale(0) rotate(-180deg) translate(-50%,-50%)",
      opacity: 0
    }, {
      transform: "scale(1.05) rotate(10deg) translate(-50%,-50%)",
      opacity: 1
    }, {
      transform: "scale(1) rotate(0deg) translate(-50%,-50%)",
      opacity: 1
    }], {
      duration: duration,
      fill: "forwards"
    });
  };

  var bounceAnimation = function bounceAnimation(el) {
    var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
    el.style.top = top + "%";
    el.style.transformOrigin = "top left";
    _this.ca = el.animate([{
      transform: "scale(0) translate(-50%,-50%)"
    }, {
      transform: "scale(1.15) translate(-50%,-50%)",
      offset: 0.4
    }, {
      transform: "scale(0.9) translate(-50%,-50%)",
      offset: 0.6
    }, {
      transform: "scale(1.05) translate(-50%,-50%)",
      offset: 0.8
    }, {
      transform: "scale(1) translate(-50%,-50%)"
    }], {
      duration: duration,
      fill: "forwards"
    });
  };

  var elasticAnimation = function elasticAnimation(el) {
    var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
    el.style.top = top + "%";
    el.style.transformOrigin = "top left";
    _this.ca = el.animate([{
      transform: "scaleX(0) translate(-50%,-50%)"
    }, {
      transform: "scaleX(1.1) scaleY(0.9) translate(-50%,-50%)",
      offset: 0.4
    }, {
      transform: "scaleX(0.95) scaleY(1.05) translate(-50%,-50%)",
      offset: 0.7
    }, {
      transform: "scaleX(1) scaleY(1) translate(-50%,-50%)"
    }], {
      duration: duration,
      fill: "forwards"
    });
  };

  this.getAnimation = function (type) {
    var an = {
      center: _this.ca,
      left: _this.la,
      right: _this.la,
      top: _this.ta,
      bottom: _this.ta,
      opacity: _this.oa,
      flip: _this.ca,
      rotate: _this.ca,
      bounce: _this.ca,
      elastic: _this.ca
    };
    return an[type];
  };

  this.opacityMinus = function (el) {
    if (el) el.reverse();
  };

  this.topMinus = function (el) {
    if (el) el.reverse();
  };

  this.leftMinus = function (el) {
    if (el) el.reverse();
  }; // Animate element directly (no parentElement), for lightbox image transitions


  this.animateImage = function (el, type) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 400;

    switch (type) {
      case "fade":
        return el.animate([{
          opacity: 0
        }, {
          opacity: 1
        }], {
          duration: duration,
          fill: "forwards",
          easing: "ease-out"
        });

      case "slideLeft":
        return el.animate([{
          transform: "translateX(40px)",
          opacity: 0
        }, {
          transform: "translateX(0)",
          opacity: 1
        }], {
          duration: duration,
          fill: "forwards",
          easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        });

      case "slideRight":
        return el.animate([{
          transform: "translateX(-40px)",
          opacity: 0
        }, {
          transform: "translateX(0)",
          opacity: 1
        }], {
          duration: duration,
          fill: "forwards",
          easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        });

      case "zoomIn":
        return el.animate([{
          transform: "scale(0.85)",
          opacity: 0
        }, {
          transform: "scale(1)",
          opacity: 1
        }], {
          duration: duration,
          fill: "forwards",
          easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        });

      case "zoomOut":
        return el.animate([{
          transform: "scale(1.15)",
          opacity: 0
        }, {
          transform: "scale(1)",
          opacity: 1
        }], {
          duration: duration,
          fill: "forwards",
          easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        });

      case "flipX":
        return el.animate([{
          transform: "perspective(600px) rotateX(30deg)",
          opacity: 0
        }, {
          transform: "perspective(600px) rotateX(0deg)",
          opacity: 1
        }], {
          duration: duration,
          fill: "forwards",
          easing: "ease-out"
        });

      case "flipY":
        return el.animate([{
          transform: "perspective(600px) rotateY(30deg)",
          opacity: 0
        }, {
          transform: "perspective(600px) rotateY(0deg)",
          opacity: 1
        }], {
          duration: duration,
          fill: "forwards",
          easing: "ease-out"
        });

      default:
        return el.animate([{
          opacity: 0
        }, {
          opacity: 1
        }], {
          duration: duration,
          fill: "forwards",
          easing: "ease-out"
        });
    }
  }; // ── SVG Element Helpers ──


  var _ns = "http://www.w3.org/2000/svg";

  var _svgEl = function _svgEl(tag) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var el = document.createElementNS(_ns, tag);

    for (var _i = 0, _Object$entries = Object.entries(attrs); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          k = _Object$entries$_i[0],
          v = _Object$entries$_i[1];

      el.setAttribute(k, v);
    }

    return el;
  };

  var _makeContainer = function _makeContainer() {
    var div = document.createElement("div");
    div.classList.add("svgDiv");
    div.style.position = "relative";
    div.style.width = "80px";
    div.style.height = "80px";
    div.style.margin = "auto";
    div.style.marginBottom = "24px";
    return div;
  };

  var _makeSvg = function _makeSvg() {
    var svg = _svgEl("svg", {
      viewBox: "0 0 80 80",
      width: "80",
      height: "80"
    });

    svg.style.position = "absolute";
    svg.style.left = "50%";
    svg.style.top = "50%";
    svg.style.transform = "translate(-50%, -50%)";
    svg.style.overflow = "visible";
    return svg;
  }; // ── Particle Effects ──
  // Minimal circle-edge sparkles — small green dots pop sequentially around the circle


  var _burstParticles = function _burstParticles(container, color) {
    var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 12;
    var radius = 38; // matches the circle radius

    var _loop = function _loop(i) {
      var dot = document.createElement("div");
      dot.style.position = "absolute";
      dot.style.top = "50%";
      dot.style.left = "50%";
      dot.style.pointerEvents = "none";
      dot.style.borderRadius = "50%";
      dot.style.backgroundColor = color;
      dot.style.width = "5px";
      dot.style.height = "5px";
      dot.style.opacity = "0";
      container.appendChild(dot);
      var angle = i / count * Math.PI * 2 - Math.PI / 2; // start from top

      var cx = Math.cos(angle) * radius;
      var cy = Math.sin(angle) * radius; // small outward burst from circle edge

      var bx = Math.cos(angle) * (radius + 10);
      var by = Math.sin(angle) * (radius + 10);

      dot.animate([{
        transform: "translate(calc(-50% + ".concat(cx, "px), calc(-50% + ").concat(cy, "px)) scale(0)"),
        opacity: 0
      }, {
        transform: "translate(calc(-50% + ".concat(cx, "px), calc(-50% + ").concat(cy, "px)) scale(1.3)"),
        opacity: 1,
        offset: 0.3
      }, {
        transform: "translate(calc(-50% + ".concat(bx, "px), calc(-50% + ").concat(by, "px)) scale(0)"),
        opacity: 0
      }], {
        duration: 450,
        delay: i * 40,
        fill: "forwards",
        easing: "ease-out"
      }).onfinish = function () {
        return dot.remove();
      };
    };

    for (var i = 0; i < count; i++) {
      _loop(i);
    }
  };

  var _rippleEffect = function _rippleEffect(container, color) {
    var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

    var _loop2 = function _loop2(i) {
      var r = document.createElement("div");
      r.style.position = "absolute";
      r.style.top = "50%";
      r.style.left = "50%";
      r.style.transform = "translate(-50%, -50%)";
      r.style.width = "72px";
      r.style.height = "72px";
      r.style.borderRadius = "50%";
      r.style.border = "2px solid " + color;
      r.style.opacity = "0";
      r.style.pointerEvents = "none";
      container.appendChild(r);

      r.animate([{
        transform: "translate(-50%, -50%) scale(0.8)",
        opacity: 0.5
      }, {
        transform: "translate(-50%, -50%) scale(1.6)",
        opacity: 0
      }], {
        duration: 900,
        delay: i * 250,
        fill: "forwards",
        easing: "ease-out"
      }).onfinish = function () {
        return r.remove();
      };
    };

    for (var i = 0; i < count; i++) {
      _loop2(i);
    }
  }; // ── Success Animation ──
  // Circle draws → bounce + glow → checkmark stroke → confetti particles


  var _successAnimation = function _successAnimation(color) {
    var container = _makeContainer();

    var svg = _makeSvg();

    var bgCircle = _svgEl("circle", {
      cx: "40",
      cy: "40",
      r: "36",
      fill: color,
      opacity: "0"
    });

    var circle = _svgEl("circle", {
      cx: "40",
      cy: "40",
      r: "36",
      fill: "none",
      stroke: color,
      "stroke-width": "2.5",
      "stroke-linecap": "round"
    });

    var cLen = 226;
    circle.style.strokeDasharray = cLen;
    circle.style.strokeDashoffset = cLen;

    var check = _svgEl("path", {
      d: "M24 42 L34 52 L56 28",
      fill: "none",
      stroke: color,
      "stroke-width": "3.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    });

    var chkLen = 48;
    check.style.strokeDasharray = chkLen;
    check.style.strokeDashoffset = chkLen;
    svg.appendChild(circle);
    svg.appendChild(check);
    container.appendChild(svg); // Phase 1 – circle draws itself

    var a1 = circle.animate([{
      strokeDashoffset: cLen
    }, {
      strokeDashoffset: 0
    }], {
      duration: 600,
      fill: "forwards",
      easing: "cubic-bezier(0.65, 0, 0.35, 1)"
    });

    a1.onfinish = function () {
      // Phase 2 – bounce + glow
      svg.animate([{
        transform: "translate(-50%, -50%) scale(1)"
      }, {
        transform: "translate(-50%, -50%) scale(1.15)",
        offset: 0.35
      }, {
        transform: "translate(-50%, -50%) scale(0.92)",
        offset: 0.65
      }, {
        transform: "translate(-50%, -50%) scale(1)"
      }], {
        duration: 500,
        fill: "forwards",
        easing: "ease-out"
      }); // Phase 3 – checkmark draws

      var a2 = check.animate([{
        strokeDashoffset: chkLen
      }, {
        strokeDashoffset: 0
      }], {
        duration: 400,
        fill: "forwards",
        easing: "cubic-bezier(0.65, 0, 0.35, 1)"
      });

      a2.onfinish = function () {
        // Phase 4 – confetti particles burst outward
        _burstParticles(container, color, 16);
      };
    };

    return container;
  }; // ── Fail Animation ──
  // Circle draws → X lines cross → aggressive shake


  var _failAnimation = function _failAnimation(color) {
    var container = _makeContainer();

    var svg = _makeSvg();

    var bgCircle = _svgEl("circle", {
      cx: "40",
      cy: "40",
      r: "36",
      fill: color,
      opacity: "0"
    });

    var circle = _svgEl("circle", {
      cx: "40",
      cy: "40",
      r: "36",
      fill: "none",
      stroke: color,
      "stroke-width": "2.5",
      "stroke-linecap": "round"
    });

    var cLen = 226;
    circle.style.strokeDasharray = cLen;
    circle.style.strokeDashoffset = cLen;

    var x1 = _svgEl("path", {
      d: "M28 28 L52 52",
      fill: "none",
      stroke: color,
      "stroke-width": "3.5",
      "stroke-linecap": "round"
    });

    var xLen = 34;
    x1.style.strokeDasharray = xLen;
    x1.style.strokeDashoffset = xLen;

    var x2 = _svgEl("path", {
      d: "M52 28 L28 52",
      fill: "none",
      stroke: color,
      "stroke-width": "3.5",
      "stroke-linecap": "round"
    });

    x2.style.strokeDasharray = xLen;
    x2.style.strokeDashoffset = xLen;
    svg.appendChild(bgCircle);
    svg.appendChild(circle);
    svg.appendChild(x1);
    svg.appendChild(x2);
    container.appendChild(svg); // Phase 1 – circle draws

    var a1 = circle.animate([{
      strokeDashoffset: cLen
    }, {
      strokeDashoffset: 0
    }], {
      duration: 500,
      fill: "forwards",
      easing: "cubic-bezier(0.65, 0, 0.35, 1)"
    });

    a1.onfinish = function () {
      // Phase 2 – X lines draw simultaneously
      x1.animate([{
        strokeDashoffset: xLen
      }, {
        strokeDashoffset: 0
      }], {
        duration: 280,
        fill: "forwards",
        easing: "ease-out"
      });
      var a2 = x2.animate([{
        strokeDashoffset: xLen
      }, {
        strokeDashoffset: 0
      }], {
        duration: 280,
        delay: 80,
        fill: "forwards",
        easing: "ease-out"
      });

      a2.onfinish = function () {
        // Phase 3 – red glow + shake
        bgCircle.animate([{
          opacity: "0"
        }, {
          opacity: "0.08"
        }], {
          duration: 300,
          fill: "forwards"
        });
        svg.animate([{
          transform: "translate(-50%, -50%) translateX(0)"
        }, {
          transform: "translate(-50%, -50%) translateX(-8px)",
          offset: 0.15
        }, {
          transform: "translate(-50%, -50%) translateX(8px)",
          offset: 0.3
        }, {
          transform: "translate(-50%, -50%) translateX(-6px)",
          offset: 0.45
        }, {
          transform: "translate(-50%, -50%) translateX(6px)",
          offset: 0.6
        }, {
          transform: "translate(-50%, -50%) translateX(-3px)",
          offset: 0.75
        }, {
          transform: "translate(-50%, -50%) translateX(3px)",
          offset: 0.85
        }, {
          transform: "translate(-50%, -50%) translateX(0)"
        }], {
          duration: 500,
          fill: "forwards",
          easing: "ease-out"
        });
      };
    };

    return container;
  }; // ── Warning Animation ──
  // Triangle draws → exclamation drops → dot bounces → wobble + ripple


  var _warningAnimation = function _warningAnimation(color) {
    var container = _makeContainer();

    var svg = _makeSvg();

    var triFill = _svgEl("path", {
      d: "M40 12 L70 64 L10 64 Z",
      fill: color,
      opacity: "0"
    });

    var triangle = _svgEl("path", {
      d: "M40 12 L70 64 L10 64 Z",
      fill: "none",
      stroke: color,
      "stroke-width": "2.5",
      "stroke-linejoin": "round",
      "stroke-linecap": "round"
    });

    var triLen = 180;
    triangle.style.strokeDasharray = triLen;
    triangle.style.strokeDashoffset = triLen;

    var exclLine = _svgEl("line", {
      x1: "40",
      y1: "30",
      x2: "40",
      y2: "48",
      stroke: color,
      "stroke-width": "3.5",
      "stroke-linecap": "round"
    });

    exclLine.style.strokeDasharray = "18";
    exclLine.style.strokeDashoffset = "18";

    var dotGroup = _svgEl("g", {});

    var exclDot = _svgEl("circle", {
      cx: "40",
      cy: "55",
      r: "2.5",
      fill: color
    });

    dotGroup.appendChild(exclDot);
    dotGroup.style.transformOrigin = "40px 55px";
    dotGroup.style.opacity = "0";
    svg.appendChild(triFill);
    svg.appendChild(triangle);
    svg.appendChild(exclLine);
    svg.appendChild(dotGroup);
    container.appendChild(svg); // Phase 1 – triangle draws itself

    var a1 = triangle.animate([{
      strokeDashoffset: triLen
    }, {
      strokeDashoffset: 0
    }], {
      duration: 700,
      fill: "forwards",
      easing: "cubic-bezier(0.65, 0, 0.35, 1)"
    });

    a1.onfinish = function () {
      // Subtle triangle fill
      triFill.animate([{
        opacity: "0"
      }, {
        opacity: "0.08"
      }], {
        duration: 300,
        fill: "forwards"
      }); // Phase 2 – exclamation line draws

      var a2 = exclLine.animate([{
        strokeDashoffset: "18"
      }, {
        strokeDashoffset: "0"
      }], {
        duration: 300,
        fill: "forwards",
        easing: "ease-out"
      });

      a2.onfinish = function () {
        // Phase 3 – dot bounces in
        dotGroup.animate([{
          opacity: 0,
          transform: "scale(0)"
        }, {
          opacity: 1,
          transform: "scale(1.5)",
          offset: 0.6
        }, {
          opacity: 1,
          transform: "scale(1)"
        }], {
          duration: 400,
          fill: "forwards",
          easing: "ease-out"
        }); // Phase 4 – wobble

        svg.animate([{
          transform: "translate(-50%, -50%) rotate(0deg)"
        }, {
          transform: "translate(-50%, -50%) rotate(-4deg)",
          offset: 0.2
        }, {
          transform: "translate(-50%, -50%) rotate(4deg)",
          offset: 0.4
        }, {
          transform: "translate(-50%, -50%) rotate(-2deg)",
          offset: 0.6
        }, {
          transform: "translate(-50%, -50%) rotate(2deg)",
          offset: 0.75
        }, {
          transform: "translate(-50%, -50%) rotate(0deg)"
        }], {
          duration: 500,
          fill: "forwards",
          easing: "ease-out"
        }); // Phase 5 – ripple rings

        _rippleEffect(container, color, 2);
      };
    };

    return container;
  }; // ── Main Status Animation Entry ──


  this.statusAnimation = function () {
    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "#000";
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "success";

    switch (type) {
      case "success":
        return _successAnimation(color);

      case "fail":
        return _failAnimation(color);

      case "warning":
        return _warningAnimation(color);

      default:
        return _successAnimation(color);
    }
  };
}

/* harmony default export */ const animations = (Animation);
;// CONCATENATED MODULE: ./js/anybox/modules/base.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var _idCounter = 0;

var Base = /*#__PURE__*/function () {
  function Base() {
    var _this = this;

    _classCallCheck(this, Base);

    _defineProperty(this, "id", "anybox-" + ++_idCounter + "-" + Date.now());

    _defineProperty(this, "globalAnimation", new animations());

    _defineProperty(this, "_resizeHandler", null);

    _defineProperty(this, "close", function () {
      var animation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var d = 0;

      if (animation) {
        d = _this.minus(animation.type);
      }

      setTimeout(function () {
        var bg = document.getElementById("bg_" + _this.id);
        if (!bg) return;
        bg.style.transition = "all .2s ease";
        bg.style.opacity = "0";
        setTimeout(function () {
          bg.style.display = "none";
        }, 220);
      }, d / 1.2);
    });

    _defineProperty(this, "getBg", function () {
      var animation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var bg = document.createElement("div");
      bg.style.width = "100vw";
      bg.style.height = "100vh";
      bg.style.position = "fixed";
      bg.style.top = "0";
      bg.style.left = "0";
      bg.style.display = "none";
      bg.style.zIndex = "9999";
      bg.id = "bg_" + _this.id;
      bg.className = "bg_anybox";
      bg.addEventListener("click", function (evt) {
        if (evt.target.className === "bg_anybox") {
          _this.close(animation);
        }
      });
      document.addEventListener("keydown", function (evt) {
        if (evt.key === "Escape") {
          var _bg = document.getElementById("bg_" + _this.id);

          if (_bg && _bg.style.display !== "none") {
            _this.close(animation);
          }
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
      box.style.maxWidth = Math.min(window.innerWidth - 40, 500) + "px";
      box.style.width = "90%";
      box.style.willChange = "transform, opacity";
      return box;
    });

    _defineProperty(this, "getCloseButton", function (closeButton) {
      var animation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var color = "black";
      var location = "right";
      var size = 25;

      if (_typeof(closeButton) === "object") {
        color = closeButton.fill || "black";
        location = closeButton.location || "right";
        size = closeButton.size || 25;
      }

      return _this.addCloseButton(color, location, animation, animation ? animation.type : "opacity", size);
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
      div.style.cursor = "pointer";
      location === "right" ? div.style.right = "-5px" : div.style.left = "-5px";
      var obj = document.createElement("div");
      obj.style.width = size + "px";
      obj.style.height = size + "px";
      obj.innerHTML = _this.svg;
      obj.children[0].style.fill = btnColor;
      obj.addEventListener("click", function () {
        _this.close(animation);
      });
      div.appendChild(obj);
      return div;
    });

    _defineProperty(this, "isColor", function (strColor) {
      var opt = new Option().style;
      opt.color = strColor;
      return opt.color !== "";
    });

    this._resizeHandler = function () {
      var bg = document.getElementById("bg_" + _this.id);
      if (!bg) return;
      var box = bg.querySelector(".box_anybox");

      if (box) {
        box.style.maxWidth = Math.min(window.innerWidth - 40, 500) + "px";
      }
    };

    window.addEventListener("resize", this._resizeHandler);
  }

  _createClass(Base, [{
    key: "destroy",
    value: function destroy() {
      if (this._resizeHandler) {
        window.removeEventListener("resize", this._resizeHandler);
        this._resizeHandler = null;
      }

      var bg = document.getElementById("bg_" + this.id);
      if (bg) bg.remove();
    }
  }]);

  return Base;
}();

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
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = lightbox_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function lightbox_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return lightbox_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return lightbox_arrayLikeToArray(o, minLen); }

function lightbox_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function lightbox_typeof(obj) { "@babel/helpers - typeof"; return lightbox_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, lightbox_typeof(obj); }

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

    lightbox_defineProperty(_assertThisInitialized(_this), "_images", []);

    lightbox_defineProperty(_assertThisInitialized(_this), "_modalImages", []);

    lightbox_defineProperty(_assertThisInitialized(_this), "_isFirstOpen", true);

    lightbox_defineProperty(_assertThisInitialized(_this), "_lastDirection", 0);

    lightbox_defineProperty(_assertThisInitialized(_this), "run", function (settings) {
      var bgColor = settings.bgColor,
          opacity = settings.opacity,
          top = settings.top,
          closeButton = settings.closeButton,
          animation = settings.animation,
          slider = settings.slider;
      _this._images = _this.getImages();

      var srcs = _this._images.map(function (e) {
        return e.src;
      });

      _this.loadBaseElements(srcs, bgColor, opacity, top, closeButton, animation, slider);
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

      if (typeof animation === "boolean" && animation) {
        animation = {
          type: "opacity",
          duration: 1000
        };
      }

      var bg = _this.getBg(animation);

      if (_this.isColor("rgba(".concat(color, ",").concat(opacity, ")"))) {
        bg.style.background = "rgba(".concat(color, ",").concat(opacity, ")");
      } else {
        bg.style.background = "rgba(0,0,0,0.85)";
      } // Lightbox container


      var box = document.createElement("div");
      box.classList.add("box_anybox");
      box.style.position = "absolute";
      box.style.top = top + "%";
      box.style.left = "50%";
      box.style.transform = "translate(-50%,-50%)";
      box.style.maxWidth = "90vw";
      box.style.maxHeight = "85vh";
      box.style.willChange = "transform, opacity"; // Image wrapper

      var imgWrapper = document.createElement("div");
      imgWrapper.style.position = "relative";
      imgWrapper.style.borderRadius = "12px";
      imgWrapper.style.overflow = "hidden";
      imgWrapper.style.boxShadow = "0 25px 60px rgba(0,0,0,0.5)";
      imgWrapper.style.lineHeight = "0";

      for (var i = 0; i < srcs.length; i++) {
        var img = new Image();
        img.src = srcs[i];
        img.setAttribute("anybox_id", i);
        img.style.display = "none";
        img.style.width = "100%";
        img.style.height = "auto";
        img.style.maxHeight = "80vh";
        img.style.objectFit = "contain";
        img.className = "any-box_lightbox_images_" + _this.id;

        _this._modalImages.push(img);

        imgWrapper.appendChild(img);
      }

      box.appendChild(imgWrapper); // Close button

      if (closeButton) {
        var cbColor = "white";
        var cbSize = 28;

        if (lightbox_typeof(closeButton) === "object") {
          cbColor = closeButton.fill || "white";
          cbSize = closeButton.size || 28;
        }

        var closeDiv = document.createElement("div");
        closeDiv.style.position = "absolute";
        closeDiv.style.top = "-16px";
        closeDiv.style.right = "-16px";
        closeDiv.style.width = cbSize + 8 + "px";
        closeDiv.style.height = cbSize + 8 + "px";
        closeDiv.style.background = "rgba(0,0,0,0.6)";
        closeDiv.style.backdropFilter = "blur(8px)";
        closeDiv.style.borderRadius = "50%";
        closeDiv.style.display = "flex";
        closeDiv.style.alignItems = "center";
        closeDiv.style.justifyContent = "center";
        closeDiv.style.cursor = "pointer";
        closeDiv.style.transition = "all .2s";
        closeDiv.style.zIndex = "10";
        var closeIcon = document.createElement("div");
        closeIcon.style.width = cbSize + "px";
        closeIcon.style.height = cbSize + "px";
        closeIcon.style.display = "flex";
        closeIcon.innerHTML = _this.svg;
        closeIcon.children[0].style.fill = cbColor;
        closeDiv.appendChild(closeIcon);
        closeDiv.addEventListener("click", function () {
          return _this.close(animation);
        });
        closeDiv.addEventListener("mouseenter", function () {
          closeDiv.style.background = "rgba(0,0,0,0.8)";
          closeDiv.style.transform = "scale(1.1)";
        });
        closeDiv.addEventListener("mouseleave", function () {
          closeDiv.style.background = "rgba(0,0,0,0.6)";
          closeDiv.style.transform = "scale(1)";
        });
        box.appendChild(closeDiv);
      } // Slider controls


      if (slider) {
        var element = _this.activeSlider(slider.buttonColor || "#fff", slider.information);

        box.appendChild(element);
      } // Thumbnail click handlers


      var _iterator = _createForOfIteratorHelper(_this._images),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var image = _step.value;
          image.style.cursor = "pointer";
          image.style.transition = "transform .2s, box-shadow .2s";
          image.addEventListener("click", function (evt) {
            _this._isFirstOpen = bg.style.display === "none" || bg.style.display === "";
            bg.style.opacity = "1";
            bg.style.display = "block";
            var liveAnimation = {
              type: _this._animationType,
              duration: _this._animationDuration
            };

            _this.showImage(evt.currentTarget, top, liveAnimation, box);
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      bg.appendChild(box);
      document.body.appendChild(bg);

      _this._setupKeyboardNav();

      _this._setupSwipeNav(bg);
    });

    lightbox_defineProperty(_assertThisInitialized(_this), "_setupKeyboardNav", function () {
      document.addEventListener("keydown", function (evt) {
        var bg = document.getElementById("bg_" + _this.id);
        if (!bg || bg.style.display === "none") return;

        if (evt.key === "ArrowLeft") {
          _this._navigateImage(-1);
        } else if (evt.key === "ArrowRight") {
          _this._navigateImage(1);
        }
      });
    });

    lightbox_defineProperty(_assertThisInitialized(_this), "_setupSwipeNav", function (bg) {
      var touchStartX = 0;
      bg.addEventListener("touchstart", function (evt) {
        touchStartX = evt.changedTouches[0].screenX;
      }, {
        passive: true
      });
      bg.addEventListener("touchend", function (evt) {
        var diff = touchStartX - evt.changedTouches[0].screenX;

        if (Math.abs(diff) > 50) {
          _this._navigateImage(diff > 0 ? 1 : -1);
        }
      }, {
        passive: true
      });
    });

    lightbox_defineProperty(_assertThisInitialized(_this), "_navigateImage", function (direction) {
      var currentId = parseInt(_this.getChosenImage());
      var nextId = currentId + direction;
      if (nextId < 0 || nextId >= _this._images.length) return;
      _this._lastDirection = direction;

      _this._images[nextId].click();
    });

    lightbox_defineProperty(_assertThisInitialized(_this), "showImage", function (evt) {
      var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
      var animation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var box = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var imgClass = "any-box_lightbox_images_" + _this.id;
      var allImages = Array.from(document.querySelectorAll("." + imgClass));
      var filtered = allImages.filter(function (e) {
        return e.src === evt.src;
      });
      var notFiltered = allImages.filter(function (e) {
        return e.src !== evt.src;
      });
      filtered[0].style.display = "block"; // First open: animate the whole box (open animation)

      if (_this._isFirstOpen && animation && box) {
        _this.globalAnimation.animate({
          el: box,
          duration: animation.duration,
          type: animation.type,
          top: top,
          direct: true
        });

        _this._isFirstOpen = false;
      } else {
        // Navigating between images: animate only the image
        var transitionType = _this._imageTransition; // Auto direction-aware for slide

        if (transitionType === "slide") {
          transitionType = _this._lastDirection >= 0 ? "slideLeft" : "slideRight";
        }

        _this.globalAnimation.animateImage(filtered[0], transitionType, _this._imageTransitionDuration);
      }

      filtered[0].classList.add("display_" + _this.id);
      filtered[0].classList.remove("hide_" + _this.id);
      notFiltered.forEach(function (e) {
        e.classList.add("hide_" + _this.id);
        e.classList.remove("display_" + _this.id);
        e.style.display = "none";
      });
      var butonDiv = document.getElementById("butonDiv_" + _this.id);

      if (butonDiv) {
        butonDiv.setAttribute("btn_id_anybox", parseInt(_this.getChosenImage()) + 1);
      }

      var infDiv = document.getElementById("infDiv_" + _this.id);

      if (infDiv) {
        infDiv.innerText = parseInt(_this.getChosenImage()) + 1;
      }
    });

    lightbox_defineProperty(_assertThisInitialized(_this), "activeSlider", function () {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "#fff";
      var information = arguments.length > 1 ? arguments[1] : undefined;
      var butonDiv = document.createElement("div");
      butonDiv.id = "butonDiv_" + _this.id;
      butonDiv.style.display = "flex";
      butonDiv.style.justifyContent = "center";
      butonDiv.style.alignItems = "center";
      butonDiv.style.gap = "20px";
      butonDiv.style.marginTop = "16px";

      var btn_left = _this._createNavButton(color);

      btn_left.innerHTML = _this.left;
      btn_left.children[0].style.fill = color;
      btn_left.children[0].style.display = "flex";
      var infDiv = null;

      if (information) {
        infDiv = document.createElement("div");
        infDiv.style.fontFamily = "Inter, Arial, Helvetica, sans-serif";
        infDiv.style.color = color;
        infDiv.style.fontSize = "14px";
        infDiv.style.letterSpacing = "0.02em";
        infDiv.style.opacity = "0.8";
        infDiv.style.minWidth = "100px";
        infDiv.style.textAlign = "center";
        infDiv.innerHTML = "<span id=\"infDiv_".concat(_this.id, "\">1</span> / ").concat(_this._images.length);
      }

      var btn_right = _this._createNavButton(color);

      btn_right.innerHTML = _this.right;
      btn_right.children[0].style.fill = color;
      btn_right.children[0].style.display = "flex";
      btn_left.addEventListener("click", function () {
        var id = parseInt(document.getElementById("butonDiv_" + _this.id).getAttribute("btn_id_anybox")) - 1;

        if (id - 1 >= 0) {
          _this._lastDirection = -1;

          _this._images[id - 1].click();
        }
      });
      btn_right.addEventListener("click", function () {
        var id = parseInt(document.getElementById("butonDiv_" + _this.id).getAttribute("btn_id_anybox")) - 1;

        if (id + 1 < _this._images.length) {
          _this._lastDirection = 1;

          _this._images[id + 1].click();
        }
      });
      butonDiv.appendChild(btn_left);

      if (infDiv) {
        butonDiv.appendChild(infDiv);
      }

      butonDiv.appendChild(btn_right);
      return butonDiv;
    });

    lightbox_defineProperty(_assertThisInitialized(_this), "_createNavButton", function (color) {
      var btn = document.createElement("button");
      btn.style.width = "40px";
      btn.style.height = "40px";
      btn.style.border = "1px solid rgba(255,255,255,0.2)";
      btn.style.borderRadius = "50%";
      btn.style.backgroundColor = "rgba(255,255,255,0.08)";
      btn.style.cursor = "pointer";
      btn.style.display = "flex";
      btn.style.alignItems = "center";
      btn.style.justifyContent = "center";
      btn.style.padding = "10px";
      btn.style.transition = "all .2s";
      btn.addEventListener("mouseenter", function () {
        btn.style.backgroundColor = "rgba(255,255,255,0.18)";
        btn.style.borderColor = "rgba(255,255,255,0.4)";
      });
      btn.addEventListener("mouseleave", function () {
        btn.style.backgroundColor = "rgba(255,255,255,0.08)";
        btn.style.borderColor = "rgba(255,255,255,0.2)";
      });
      return btn;
    });

    lightbox_defineProperty(_assertThisInitialized(_this), "minus", function (type) {
      var anim = _this.globalAnimation.getAnimation(type);

      if (anim) {
        anim.reverse();
      }

      return _this.duration;
    });

    lightbox_defineProperty(_assertThisInitialized(_this), "getChosenImage", function () {
      var el = document.querySelector(".display_" + _this.id);
      return el ? el.getAttribute("anybox_id") : "0";
    });

    _this.duration = lBsettings.animation ? lBsettings.animation.duration : 1000;
    _this._imageTransition = lBsettings.imageTransition || "fade";
    _this._imageTransitionDuration = lBsettings.imageTransitionDuration || 350;
    _this._animationType = lBsettings.animation ? lBsettings.animation.type : "opacity";
    _this._animationDuration = lBsettings.animation ? lBsettings.animation.duration : 1000;

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

    alertbox_defineProperty(alertbox_assertThisInitialized(_this), "svg", svg);

    alertbox_defineProperty(alertbox_assertThisInitialized(_this), "status", {
      success: {
        color: "#198754",
        type: "success"
      },
      fail: {
        color: "#FC100D",
        type: "fail"
      },
      warning: {
        color: "#FFCC00",
        type: "warning"
      }
    });

    alertbox_defineProperty(alertbox_assertThisInitialized(_this), "_theme", "light");

    alertbox_defineProperty(alertbox_assertThisInitialized(_this), "_colors", function () {
      var dark = _this._theme === "dark";
      return {
        boxBg: dark ? "#18181b" : "#ffffff",
        textColor: dark ? "#e4e4e7" : "#111111",
        subTextColor: dark ? "#a1a1aa" : "#555555",
        borderColor: dark ? "rgba(255,255,255,0.08)" : "#e5e5e5",
        closeFill: dark ? "#a1a1aa" : "#111111",
        buttonHover: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
        shadow: dark ? "0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)" : "rgba(0, 0, 0, 0.12) 0px 8px 30px"
      };
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
      var bg = document.getElementById("bg_" + _this.id);
      if (!bg) return;

      if (status) {
        var svgPlace = bg.querySelector("#svgPlace_" + _this.id);
        var oldSvg = svgPlace.querySelector(".svgDiv");
        if (oldSvg) oldSvg.remove();
        var _this$status$status = _this.status[status],
            color = _this$status$status.color,
            type = _this$status$status.type;

        var svgDiv = _this.globalAnimation.statusAnimation(color, type);

        svgPlace.appendChild(svgDiv);
      }

      if (animation) {
        var allEl = bg.querySelector("#all_" + _this.id);
        allEl.parentElement.style.transform = "scale(0) translate(-50%,-50%)";
        var animOpts = {
          el: allEl,
          type: alertbox_typeof(animation) === "object" ? animation.type : "center",
          duration: alertbox_typeof(animation) === "object" ? animation.duration : 1000,
          top: 40
        };

        _this.globalAnimation.animate(animOpts);
      }

      bg.style.opacity = "1";
      bg.style.display = "block";
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

      var c = _this._colors();

      var bg = _this.getBg(); // Custom styled box for alertbox


      var box = document.createElement("div");
      box.classList.add("box_anybox");
      box.style.top = top + "%";
      box.style.left = "50%";
      box.style.backgroundColor = c.boxBg;
      box.style.position = "absolute";
      box.style.transition = "all .2s ease";
      box.style.transform = "translate(-50%,-50%)";
      box.style.boxShadow = c.shadow;
      box.style.borderRadius = "16px";
      box.style.maxWidth = Math.min(window.innerWidth - 40, 420) + "px";
      box.style.width = "90%";
      box.style.willChange = "transform, opacity";
      box.style.overflow = "hidden";
      var svgPlace = document.createElement("div");
      var all = document.createElement("div");
      all.id = "all_" + _this.id;
      all.style.padding = "28px 24px 0";
      svgPlace.id = "svgPlace_" + _this.id;
      box.style.fontFamily = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
      var head = null;

      if (headline) {
        var hasText = typeof headline === "string" ? headline.length > 0 : headline.text && headline.text.length > 0;

        if (hasText) {
          head = document.createElement("h" + (typeof headline === "string" ? 3 : headline.level || 3));
          head.innerText = typeof headline === "string" ? headline : headline.text;
          head.style.textAlign = "center";
          head.style.marginBottom = "4px";
          head.style.fontSize = "18px";
          head.style.fontWeight = "600";
          head.style.letterSpacing = "-0.01em";
          head.style.color = alertbox_typeof(headline) === "object" && headline.color ? headline.color : c.textColor;

          if (alertbox_typeof(headline) === "object" && headline.fontFamily) {
            head.style.fontFamily = headline.fontFamily;
          }
        }
      }

      var p = null;

      if (message) {
        var _hasText = typeof message === "string" ? message.length > 0 : message.text && message.text.length > 0;

        if (_hasText) {
          p = document.createElement("p");
          p.innerText = typeof message === "string" ? message : message.text;
          p.style.textAlign = "center";
          p.style.margin = "0";
          p.style.padding = "0 12px 20px";
          p.style.fontSize = "14px";
          p.style.lineHeight = "1.5";
          p.style.color = alertbox_typeof(message) === "object" && message.color ? message.color : c.subTextColor;

          if (alertbox_typeof(message) === "object" && message.fontFamily) {
            p.style.fontFamily = message.fontFamily;
          }
        }
      }

      if (_this.isColor("rgba(".concat(color, ",").concat(opacity, ")"))) {
        bg.style.background = "rgba(".concat(color, ",").concat(opacity, ")");
      } else {
        bg.style.background = "rgba(0,0,0,0.5)";
      } // Close button


      if (closeButton) {
        var cbColor = c.closeFill;
        var cbSize = 20;

        if (alertbox_typeof(closeButton) === "object") {
          cbColor = closeButton.fill || c.closeFill;
          cbSize = closeButton.size || 20;
        }

        var closeDiv = document.createElement("div");
        closeDiv.style.position = "absolute";
        closeDiv.style.top = "12px";
        closeDiv.style.right = "12px";
        closeDiv.style.width = cbSize + 8 + "px";
        closeDiv.style.height = cbSize + 8 + "px";
        closeDiv.style.borderRadius = "8px";
        closeDiv.style.display = "flex";
        closeDiv.style.alignItems = "center";
        closeDiv.style.justifyContent = "center";
        closeDiv.style.cursor = "pointer";
        closeDiv.style.transition = "background .15s";
        var closeIcon = document.createElement("div");
        closeIcon.style.width = cbSize + "px";
        closeIcon.style.height = cbSize + "px";
        closeIcon.style.display = "flex";
        closeIcon.style.opacity = "0.5";
        closeIcon.innerHTML = _this.svg;
        closeIcon.children[0].style.fill = cbColor;
        closeDiv.appendChild(closeIcon);
        closeDiv.addEventListener("click", function () {
          return _this.defaultClickFunction();
        });
        closeDiv.addEventListener("mouseenter", function () {
          closeDiv.style.background = c.buttonHover;
          closeIcon.style.opacity = "1";
        });
        closeDiv.addEventListener("mouseleave", function () {
          closeDiv.style.background = "transparent";
          closeIcon.style.opacity = "0.5";
        });
        all.appendChild(closeDiv);
      }

      if (head) {
        all.appendChild(head);
      }

      all.appendChild(svgPlace);

      if (svgStatus) {
        var _this$status$svgStatu = _this.status[svgStatus],
            statusColor = _this$status$svgStatu.color,
            type = _this$status$svgStatu.type;

        var svgDiv = _this.globalAnimation.statusAnimation(statusColor, type);

        svgPlace.appendChild(svgDiv);
      }

      if (p) {
        all.appendChild(p);
      } // Buttons


      var btn = null;

      if (buttons) {
        btn = _this.addButtons(buttons, closeButton);
      }

      if (btn) {
        all.appendChild(btn);
      }

      box.appendChild(all);
      bg.appendChild(box);
      document.body.appendChild(bg);

      if (animation) {
        _this.globalAnimation.animate({
          el: bg.querySelector("#all_" + _this.id),
          type: "center",
          duration: 1000
        });
      }
    });

    alertbox_defineProperty(alertbox_assertThisInitialized(_this), "defaultClickFunction", function () {
      var bg = document.getElementById("bg_" + _this.id);
      if (!bg) return;
      bg.style.transition = "all .2s ease";
      bg.style.opacity = "0";
      setTimeout(function () {
        bg.style.display = "none";
      }, 220);
    });

    alertbox_defineProperty(alertbox_assertThisInitialized(_this), "addButtons", function (buttons, closeButton) {
      var c = _this._colors();

      var fillColor = alertbox_typeof(closeButton) === "object" && closeButton.fill ? closeButton.fill : c.textColor;
      var buttonsDiv = document.createElement("div");
      buttonsDiv.style.display = "flex";
      buttonsDiv.style.flexWrap = "nowrap";
      buttonsDiv.style.borderTop = "1px solid " + c.borderColor;
      buttonsDiv.style.margin = "0 -24px";
      buttonsDiv.style.padding = "0";

      if (typeof buttons === "boolean" && buttons) {
        var btn = _this._createButton("OK", fillColor, c);

        btn.style.borderRadius = "0 0 16px 16px";
        btn.onclick = _this.defaultClickFunction;
        buttonsDiv.appendChild(btn);
        return buttonsDiv;
      }

      for (var i = 0; i < buttons.length; i++) {
        var _btn = _this._createButton(buttons[i].buttonName, fillColor, c);

        _btn.onclick = buttons[i]["function"] || _this.defaultClickFunction;

        if (i !== 0) {
          _btn.style.borderLeft = "1px solid " + c.borderColor;
        } // Round corners for edge buttons


        if (buttons.length > 1) {
          if (i === 0) _btn.style.borderRadius = "0 0 0 16px";
          if (i === buttons.length - 1) _btn.style.borderRadius = "0 0 16px 0";
        } else {
          _btn.style.borderRadius = "0 0 16px 16px";
        }

        buttonsDiv.appendChild(_btn);
      }

      return buttonsDiv;
    });

    alertbox_defineProperty(alertbox_assertThisInitialized(_this), "_createButton", function (text, color, c) {
      var btn = document.createElement("button");
      btn.innerText = text;
      btn.style.flexGrow = "1";
      btn.style.padding = "14px 16px";
      btn.style.border = "none";
      btn.style.backgroundColor = "transparent";
      btn.style.color = color;
      btn.style.cursor = "pointer";
      btn.style.fontSize = "14px";
      btn.style.fontWeight = "500";
      btn.style.fontFamily = "inherit";
      btn.style.transition = "background .15s";
      btn.addEventListener("mouseenter", function () {
        btn.style.backgroundColor = c.buttonHover;
      });
      btn.addEventListener("mouseleave", function () {
        btn.style.backgroundColor = "transparent";
      });
      return btn;
    });

    _this._theme = lBsettings.theme || "light";

    _this.run(lBsettings);

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

  if (type.toLowerCase() === "lightbox") {
    return new lightbox(settings);
  } else if (type.toLowerCase() === "alertbox") {
    return new alertbox(settings);
  }
});

/* harmony default export */ const init = (Anybox);
})();

Anybox = __webpack_exports__["default"];
/******/ })()
;