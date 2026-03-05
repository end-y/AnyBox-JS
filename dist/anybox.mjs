/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ init)
});

;// CONCATENATED MODULE: ./js/anybox/modules/animations.js
function Animation() {
  this.ca;
  this.ta;
  this.la;
  this.oa;

  this.animate = ({ el, type, duration, top = 50, direct = false }) => {
    const target = direct ? el : el.parentElement;
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

  let centerAnimation = (el, top = 50, duration = 1000) => {
    el.style.top = top + "%";
    el.style.transformOrigin = "top left";
    this.ca = el.animate(
      [
        { transform: "scale(0) translate(-50%,-50%)" },
        { transform: "scale(1.1) translate(-50%,-50%)" },
        { transform: "scale(1) translate(-50%,-50%)" },
      ],
      { duration, fill: "forwards" },
    );
  };

  let topAnimation = (el, top = 50, duration = 1000) => {
    el.style.transformOrigin = "center";
    this.ta = el.animate(
      [{ top: "0%" }, { top: top + 5 + "%" }, { top: top + "%" }],
      { duration, fill: "forwards" },
    );
  };

  let bottomAnimation = (el, top = 50, duration = 1000) => {
    el.style.transformOrigin = "center";
    this.ta = el.animate(
      [{ top: "100%" }, { top: top - 5 + "%" }, { top: top + "%" }],
      { duration, fill: "forwards" },
    );
  };

  let leftAnimation = (el, duration = 1000) => {
    this.la = el.animate([{ left: "0%" }, { left: "55%" }, { left: "50%" }], {
      duration,
      fill: "forwards",
    });
  };

  let rightAnimation = (el, duration = 1000) => {
    this.la = el.animate([{ left: "100%" }, { left: "45%" }, { left: "50%" }], {
      duration,
      fill: "forwards",
    });
  };

  let opacityAnimation = (el, duration = 1000, top = 50) => {
    el.style.top = top + "%";
    this.oa = el.animate([{ opacity: "0" }, { opacity: "1" }], {
      duration,
      fill: "forwards",
    });
  };

  let flipAnimation = (el, top = 50, duration = 1000) => {
    el.style.top = top + "%";
    el.style.transformOrigin = "top left";
    this.ca = el.animate(
      [
        {
          transform: "perspective(600px) rotateY(90deg) translate(-50%,-50%)",
          opacity: 0,
        },
        {
          transform: "perspective(600px) rotateY(-10deg) translate(-50%,-50%)",
          opacity: 1,
        },
        {
          transform: "perspective(600px) rotateY(0deg) translate(-50%,-50%)",
          opacity: 1,
        },
      ],
      { duration, fill: "forwards" },
    );
  };

  let rotateAnimation = (el, top = 50, duration = 1000) => {
    el.style.top = top + "%";
    el.style.transformOrigin = "top left";
    this.ca = el.animate(
      [
        {
          transform: "scale(0) rotate(-180deg) translate(-50%,-50%)",
          opacity: 0,
        },
        {
          transform: "scale(1.05) rotate(10deg) translate(-50%,-50%)",
          opacity: 1,
        },
        { transform: "scale(1) rotate(0deg) translate(-50%,-50%)", opacity: 1 },
      ],
      { duration, fill: "forwards" },
    );
  };

  let bounceAnimation = (el, top = 50, duration = 1000) => {
    el.style.top = top + "%";
    el.style.transformOrigin = "top left";
    this.ca = el.animate(
      [
        { transform: "scale(0) translate(-50%,-50%)" },
        { transform: "scale(1.15) translate(-50%,-50%)", offset: 0.4 },
        { transform: "scale(0.9) translate(-50%,-50%)", offset: 0.6 },
        { transform: "scale(1.05) translate(-50%,-50%)", offset: 0.8 },
        { transform: "scale(1) translate(-50%,-50%)" },
      ],
      { duration, fill: "forwards" },
    );
  };

  let elasticAnimation = (el, top = 50, duration = 1000) => {
    el.style.top = top + "%";
    el.style.transformOrigin = "top left";
    this.ca = el.animate(
      [
        { transform: "scaleX(0) translate(-50%,-50%)" },
        {
          transform: "scaleX(1.1) scaleY(0.9) translate(-50%,-50%)",
          offset: 0.4,
        },
        {
          transform: "scaleX(0.95) scaleY(1.05) translate(-50%,-50%)",
          offset: 0.7,
        },
        { transform: "scaleX(1) scaleY(1) translate(-50%,-50%)" },
      ],
      { duration, fill: "forwards" },
    );
  };

  this.getAnimation = (type) => {
    let an = {
      center: this.ca,
      left: this.la,
      right: this.la,
      top: this.ta,
      bottom: this.ta,
      opacity: this.oa,
      flip: this.ca,
      rotate: this.ca,
      bounce: this.ca,
      elastic: this.ca,
    };
    return an[type];
  };

  this.opacityMinus = (el) => {
    if (el) el.reverse();
  };

  this.topMinus = (el) => {
    if (el) el.reverse();
  };

  this.leftMinus = (el) => {
    if (el) el.reverse();
  };

  // Animate element directly (no parentElement), for lightbox image transitions
  this.animateImage = (el, type, duration = 400) => {
    switch (type) {
      case "fade":
        return el.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration,
          fill: "forwards",
          easing: "ease-out",
        });
      case "slideLeft":
        return el.animate(
          [
            { transform: "translateX(40px)", opacity: 0 },
            { transform: "translateX(0)", opacity: 1 },
          ],
          {
            duration,
            fill: "forwards",
            easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          },
        );
      case "slideRight":
        return el.animate(
          [
            { transform: "translateX(-40px)", opacity: 0 },
            { transform: "translateX(0)", opacity: 1 },
          ],
          {
            duration,
            fill: "forwards",
            easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          },
        );
      case "zoomIn":
        return el.animate(
          [
            { transform: "scale(0.85)", opacity: 0 },
            { transform: "scale(1)", opacity: 1 },
          ],
          {
            duration,
            fill: "forwards",
            easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          },
        );
      case "zoomOut":
        return el.animate(
          [
            { transform: "scale(1.15)", opacity: 0 },
            { transform: "scale(1)", opacity: 1 },
          ],
          {
            duration,
            fill: "forwards",
            easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          },
        );
      case "flipX":
        return el.animate(
          [
            { transform: "perspective(600px) rotateX(30deg)", opacity: 0 },
            { transform: "perspective(600px) rotateX(0deg)", opacity: 1 },
          ],
          { duration, fill: "forwards", easing: "ease-out" },
        );
      case "flipY":
        return el.animate(
          [
            { transform: "perspective(600px) rotateY(30deg)", opacity: 0 },
            { transform: "perspective(600px) rotateY(0deg)", opacity: 1 },
          ],
          { duration, fill: "forwards", easing: "ease-out" },
        );
      default:
        return el.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration,
          fill: "forwards",
          easing: "ease-out",
        });
    }
  };

  // ── SVG Element Helpers ──
  const _ns = "http://www.w3.org/2000/svg";

  const _svgEl = (tag, attrs = {}) => {
    const el = document.createElementNS(_ns, tag);
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    return el;
  };

  const _makeContainer = () => {
    const div = document.createElement("div");
    div.classList.add("svgDiv");
    div.style.position = "relative";
    div.style.width = "80px";
    div.style.height = "80px";
    div.style.margin = "auto";
    div.style.marginBottom = "24px";
    return div;
  };

  const _makeSvg = () => {
    const svg = _svgEl("svg", {
      viewBox: "0 0 80 80",
      width: "80",
      height: "80",
    });
    svg.style.position = "absolute";
    svg.style.left = "50%";
    svg.style.top = "50%";
    svg.style.transform = "translate(-50%, -50%)";
    svg.style.overflow = "visible";
    return svg;
  };

  // ── Particle Effects ──
  // Minimal circle-edge sparkles — small green dots pop sequentially around the circle
  const _burstParticles = (container, color, count = 12) => {
    const radius = 38; // matches the circle radius
    for (let i = 0; i < count; i++) {
      const dot = document.createElement("div");
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

      const angle = (i / count) * Math.PI * 2 - Math.PI / 2; // start from top
      const cx = Math.cos(angle) * radius;
      const cy = Math.sin(angle) * radius;
      // small outward burst from circle edge
      const bx = Math.cos(angle) * (radius + 10);
      const by = Math.sin(angle) * (radius + 10);

      dot.animate(
        [
          {
            transform: `translate(calc(-50% + ${cx}px), calc(-50% + ${cy}px)) scale(0)`,
            opacity: 0,
          },
          {
            transform: `translate(calc(-50% + ${cx}px), calc(-50% + ${cy}px)) scale(1.3)`,
            opacity: 1,
            offset: 0.3,
          },
          {
            transform: `translate(calc(-50% + ${bx}px), calc(-50% + ${by}px)) scale(0)`,
            opacity: 0,
          },
        ],
        {
          duration: 450,
          delay: i * 40,
          fill: "forwards",
          easing: "ease-out",
        },
      ).onfinish = () => dot.remove();
    }
  };

  const _rippleEffect = (container, color, count = 2) => {
    for (let i = 0; i < count; i++) {
      const r = document.createElement("div");
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

      r.animate(
        [
          { transform: "translate(-50%, -50%) scale(0.8)", opacity: 0.5 },
          { transform: "translate(-50%, -50%) scale(1.6)", opacity: 0 },
        ],
        {
          duration: 900,
          delay: i * 250,
          fill: "forwards",
          easing: "ease-out",
        },
      ).onfinish = () => r.remove();
    }
  };

  // ── Success Animation ──
  // Circle draws → bounce + glow → checkmark stroke → confetti particles
  const _successAnimation = (color) => {
    const container = _makeContainer();
    const svg = _makeSvg();

    const bgCircle = _svgEl("circle", {
      cx: "40",
      cy: "40",
      r: "36",
      fill: color,
      opacity: "0",
    });

    const circle = _svgEl("circle", {
      cx: "40",
      cy: "40",
      r: "36",
      fill: "none",
      stroke: color,
      "stroke-width": "2.5",
      "stroke-linecap": "round",
    });
    const cLen = 226;
    circle.style.strokeDasharray = cLen;
    circle.style.strokeDashoffset = cLen;

    const check = _svgEl("path", {
      d: "M24 42 L34 52 L56 28",
      fill: "none",
      stroke: color,
      "stroke-width": "3.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    });
    const chkLen = 48;
    check.style.strokeDasharray = chkLen;
    check.style.strokeDashoffset = chkLen;

    svg.appendChild(circle);
    svg.appendChild(check);
    container.appendChild(svg);

    // Phase 1 – circle draws itself
    const a1 = circle.animate(
      [{ strokeDashoffset: cLen }, { strokeDashoffset: 0 }],
      {
        duration: 600,
        fill: "forwards",
        easing: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    );

    a1.onfinish = () => {
      // Phase 2 – bounce + glow
      svg.animate(
        [
          { transform: "translate(-50%, -50%) scale(1)" },
          { transform: "translate(-50%, -50%) scale(1.15)", offset: 0.35 },
          { transform: "translate(-50%, -50%) scale(0.92)", offset: 0.65 },
          { transform: "translate(-50%, -50%) scale(1)" },
        ],
        { duration: 500, fill: "forwards", easing: "ease-out" },
      );

      // Phase 3 – checkmark draws
      const a2 = check.animate(
        [{ strokeDashoffset: chkLen }, { strokeDashoffset: 0 }],
        {
          duration: 400,
          fill: "forwards",
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
        },
      );

      a2.onfinish = () => {
        // Phase 4 – confetti particles burst outward
        _burstParticles(container, color, 16);
      };
    };

    return container;
  };

  // ── Fail Animation ──
  // Circle draws → X lines cross → aggressive shake
  const _failAnimation = (color) => {
    const container = _makeContainer();
    const svg = _makeSvg();

    const bgCircle = _svgEl("circle", {
      cx: "40",
      cy: "40",
      r: "36",
      fill: color,
      opacity: "0",
    });

    const circle = _svgEl("circle", {
      cx: "40",
      cy: "40",
      r: "36",
      fill: "none",
      stroke: color,
      "stroke-width": "2.5",
      "stroke-linecap": "round",
    });
    const cLen = 226;
    circle.style.strokeDasharray = cLen;
    circle.style.strokeDashoffset = cLen;

    const x1 = _svgEl("path", {
      d: "M28 28 L52 52",
      fill: "none",
      stroke: color,
      "stroke-width": "3.5",
      "stroke-linecap": "round",
    });
    const xLen = 34;
    x1.style.strokeDasharray = xLen;
    x1.style.strokeDashoffset = xLen;

    const x2 = _svgEl("path", {
      d: "M52 28 L28 52",
      fill: "none",
      stroke: color,
      "stroke-width": "3.5",
      "stroke-linecap": "round",
    });
    x2.style.strokeDasharray = xLen;
    x2.style.strokeDashoffset = xLen;

    svg.appendChild(bgCircle);
    svg.appendChild(circle);
    svg.appendChild(x1);
    svg.appendChild(x2);
    container.appendChild(svg);

    // Phase 1 – circle draws
    const a1 = circle.animate(
      [{ strokeDashoffset: cLen }, { strokeDashoffset: 0 }],
      {
        duration: 500,
        fill: "forwards",
        easing: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    );

    a1.onfinish = () => {
      // Phase 2 – X lines draw simultaneously
      x1.animate([{ strokeDashoffset: xLen }, { strokeDashoffset: 0 }], {
        duration: 280,
        fill: "forwards",
        easing: "ease-out",
      });
      const a2 = x2.animate(
        [{ strokeDashoffset: xLen }, { strokeDashoffset: 0 }],
        { duration: 280, delay: 80, fill: "forwards", easing: "ease-out" },
      );

      a2.onfinish = () => {
        // Phase 3 – red glow + shake
        bgCircle.animate([{ opacity: "0" }, { opacity: "0.08" }], {
          duration: 300,
          fill: "forwards",
        });

        svg.animate(
          [
            { transform: "translate(-50%, -50%) translateX(0)" },
            {
              transform: "translate(-50%, -50%) translateX(-8px)",
              offset: 0.15,
            },
            { transform: "translate(-50%, -50%) translateX(8px)", offset: 0.3 },
            {
              transform: "translate(-50%, -50%) translateX(-6px)",
              offset: 0.45,
            },
            { transform: "translate(-50%, -50%) translateX(6px)", offset: 0.6 },
            {
              transform: "translate(-50%, -50%) translateX(-3px)",
              offset: 0.75,
            },
            {
              transform: "translate(-50%, -50%) translateX(3px)",
              offset: 0.85,
            },
            { transform: "translate(-50%, -50%) translateX(0)" },
          ],
          { duration: 500, fill: "forwards", easing: "ease-out" },
        );
      };
    };

    return container;
  };

  // ── Warning Animation ──
  // Triangle draws → exclamation drops → dot bounces → wobble + ripple
  const _warningAnimation = (color) => {
    const container = _makeContainer();
    const svg = _makeSvg();

    const triFill = _svgEl("path", {
      d: "M40 12 L70 64 L10 64 Z",
      fill: color,
      opacity: "0",
    });

    const triangle = _svgEl("path", {
      d: "M40 12 L70 64 L10 64 Z",
      fill: "none",
      stroke: color,
      "stroke-width": "2.5",
      "stroke-linejoin": "round",
      "stroke-linecap": "round",
    });
    const triLen = 180;
    triangle.style.strokeDasharray = triLen;
    triangle.style.strokeDashoffset = triLen;

    const exclLine = _svgEl("line", {
      x1: "40",
      y1: "30",
      x2: "40",
      y2: "48",
      stroke: color,
      "stroke-width": "3.5",
      "stroke-linecap": "round",
    });
    exclLine.style.strokeDasharray = "18";
    exclLine.style.strokeDashoffset = "18";

    const dotGroup = _svgEl("g", {});
    const exclDot = _svgEl("circle", {
      cx: "40",
      cy: "55",
      r: "2.5",
      fill: color,
    });
    dotGroup.appendChild(exclDot);
    dotGroup.style.transformOrigin = "40px 55px";
    dotGroup.style.opacity = "0";

    svg.appendChild(triFill);
    svg.appendChild(triangle);
    svg.appendChild(exclLine);
    svg.appendChild(dotGroup);
    container.appendChild(svg);

    // Phase 1 – triangle draws itself
    const a1 = triangle.animate(
      [{ strokeDashoffset: triLen }, { strokeDashoffset: 0 }],
      {
        duration: 700,
        fill: "forwards",
        easing: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    );

    a1.onfinish = () => {
      // Subtle triangle fill
      triFill.animate([{ opacity: "0" }, { opacity: "0.08" }], {
        duration: 300,
        fill: "forwards",
      });

      // Phase 2 – exclamation line draws
      const a2 = exclLine.animate(
        [{ strokeDashoffset: "18" }, { strokeDashoffset: "0" }],
        { duration: 300, fill: "forwards", easing: "ease-out" },
      );

      a2.onfinish = () => {
        // Phase 3 – dot bounces in
        dotGroup.animate(
          [
            { opacity: 0, transform: "scale(0)" },
            { opacity: 1, transform: "scale(1.5)", offset: 0.6 },
            { opacity: 1, transform: "scale(1)" },
          ],
          { duration: 400, fill: "forwards", easing: "ease-out" },
        );

        // Phase 4 – wobble
        svg.animate(
          [
            { transform: "translate(-50%, -50%) rotate(0deg)" },
            { transform: "translate(-50%, -50%) rotate(-4deg)", offset: 0.2 },
            { transform: "translate(-50%, -50%) rotate(4deg)", offset: 0.4 },
            { transform: "translate(-50%, -50%) rotate(-2deg)", offset: 0.6 },
            { transform: "translate(-50%, -50%) rotate(2deg)", offset: 0.75 },
            { transform: "translate(-50%, -50%) rotate(0deg)" },
          ],
          { duration: 500, fill: "forwards", easing: "ease-out" },
        );

        // Phase 5 – ripple rings
        _rippleEffect(container, color, 2);
      };
    };

    return container;
  };

  // ── Main Status Animation Entry ──
  this.statusAnimation = (color = "#000", type = "success") => {
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


let _idCounter = 0

class Base{
    id = "anybox-" + (++_idCounter) + "-" + Date.now()
    globalAnimation = new animations()
    _resizeHandler = null

    constructor(){
        this._resizeHandler = () => {
            const bg = document.getElementById("bg_" + this.id)
            if(!bg) return
            const box = bg.querySelector(".box_anybox")
            if(box){
                box.style.maxWidth = Math.min(window.innerWidth - 40, 500) + "px"
            }
        }
        window.addEventListener("resize", this._resizeHandler)
    }

    destroy(){
        if(this._resizeHandler){
            window.removeEventListener("resize", this._resizeHandler)
            this._resizeHandler = null
        }
        const bg = document.getElementById("bg_" + this.id)
        if(bg) bg.remove()
    }

    close = (animation = false) => {
        let d = 0
        if(animation){
            d = this.minus(animation.type)
        }
        setTimeout(() => {
            const bg = document.getElementById("bg_" + this.id)
            if(!bg) return
            bg.style.transition = "all .2s ease"
            bg.style.opacity = "0"
            setTimeout(() => {
                bg.style.display = "none"
            }, 220)
        }, d / 1.2)
    }

    getBg = (animation = false) => {
        const bg = document.createElement("div")
        bg.style.width = "100vw"
        bg.style.height = "100vh"
        bg.style.position = "fixed"
        bg.style.top = "0"
        bg.style.left = "0"
        bg.style.display = "none"
        bg.style.zIndex = "9999"
        bg.id = "bg_" + this.id
        bg.className = "bg_anybox"

        bg.addEventListener("click", (evt) => {
            if(evt.target.className === "bg_anybox"){
                this.close(animation)
            }
        })

        document.addEventListener("keydown", (evt) => {
            if(evt.key === "Escape"){
                const bg = document.getElementById("bg_" + this.id)
                if(bg && bg.style.display !== "none"){
                    this.close(animation)
                }
            }
        })

        return bg
    }

    getBox = (top) => {
        const box = document.createElement("div")
        box.classList.add("box_anybox")
        box.style.top = top + "%"
        box.style.left = "50%"
        box.style.backgroundColor = "white"
        box.style.position = "absolute"
        box.style.transition = "all .2s ease"
        box.style.transform = "translate(-50%,-50%)"
        box.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px"
        box.style.borderRadius = "15px"
        box.style.maxWidth = Math.min(window.innerWidth - 40, 500) + "px"
        box.style.width = "90%"
        box.style.willChange = "transform, opacity"
        return box
    }

    getCloseButton = (closeButton, animation = null) => {
        let color = "black"
        let location = "right"
        let size = 25
        if(typeof closeButton === "object"){
            color = closeButton.fill || "black"
            location = closeButton.location || "right"
            size = closeButton.size || 25
        }
        return this.addCloseButton(color, location, animation, animation ? animation.type : "opacity", size)
    }

    addCloseButton = (btnColor = "black", location = "right", animation = false, animationType = "opacity", size = 25) => {
        let div = document.createElement("div")
        div.style.position = "absolute"
        div.style.top = "-5px"
        div.style.cursor = "pointer"
        location === "right" ? div.style.right = "-5px" : div.style.left = "-5px"

        let obj = document.createElement("div")
        obj.style.width = size + "px"
        obj.style.height = size + "px"
        obj.innerHTML = this.svg

        obj.children[0].style.fill = btnColor

        obj.addEventListener("click", () => {
            this.close(animation)
        })

        div.appendChild(obj)
        return div
    }

    isColor = (strColor) => {
        const opt = new Option().style
        opt.color = strColor
        return opt.color !== ""
    }
}

/* harmony default export */ const base = (Base);

;// CONCATENATED MODULE: ./js/anybox/modules/svg.js
// you can reach the following icons from Font Awesome website. https://fontawesome.com/
let svg = `<svg class="times" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"/></svg>`
let right = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/></svg>`
let left = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>`
// you can reach the following icons from Google Material Icons website. https://fonts.google.com/icons
let success = (/* unused pure expression or super */ null && (`<svg style="position:absolute; left:50%; top:50%; transform:translate(-50%,-50%)" xmlns="http://www.w3.org/2000/svg" height="48" fill="transparent" stroke-width="1px" width="48"><path d="M18.9 35.7 7.7 24.5 9.85 22.35 18.9 31.4 38.1 12.2 40.25 14.35Z"/></svg>`))
let fail = (/* unused pure expression or super */ null && (`<svg style="position:absolute; left:50%; top:50%; transform:translate(-50%,-50%)" fill="transparent" stroke-width="1px" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M12.45 37.95 10.05 35.55 21.6 24 10.05 12.45 12.45 10.05 24 21.6 35.55 10.05 37.95 12.45 26.4 24 37.95 35.55 35.55 37.95 24 26.4Z"/></svg>`))
let warning = (/* unused pure expression or super */ null && (`<svg style="position:absolute; left:50%; top:50%; transform:translate(-50%,-50%)" xmlns="http://www.w3.org/2000/svg" stroke-width="1px"  height="48" width="48"><path d="M22.3 29.15V9.7H25.7V29.15ZM22.3 38.3V34.85H25.7V38.3Z"/></svg>`))
;// CONCATENATED MODULE: ./js/anybox/modules/lightbox.js



class Lightbox extends base {
  left = left;
  right = right;
  svg = svg;
  duration;
  _images = [];
  _modalImages = [];
  _isFirstOpen = true;
  _lastDirection = 0;

  constructor(lBsettings) {
    super();
    this.duration = lBsettings.animation ? lBsettings.animation.duration : 1000;
    this._imageTransition = lBsettings.imageTransition || "fade";
    this._imageTransitionDuration = lBsettings.imageTransitionDuration || 350;
    this._animationType = lBsettings.animation
      ? lBsettings.animation.type
      : "opacity";
    this._animationDuration = lBsettings.animation
      ? lBsettings.animation.duration
      : 1000;
    this.run(lBsettings);
  }

  run = (settings) => {
    let { bgColor, opacity, top, closeButton, animation, slider } = settings;
    this._images = this.getImages();
    const srcs = this._images.map((e) => e.src);
    this.loadBaseElements(
      srcs,
      bgColor,
      opacity,
      top,
      closeButton,
      animation,
      slider,
    );
  };

  getImages = () => Array.from(document.querySelectorAll(".any-box_lightbox"));

  loadBaseElements = (
    srcs,
    color = "0,0,0",
    opacity = "0.5",
    top = 50,
    closeButton = false,
    animation = false,
    slider = false,
  ) => {
    if (typeof animation === "boolean" && animation) {
      animation = { type: "opacity", duration: 1000 };
    }

    const bg = this.getBg(animation);

    if (this.isColor(`rgba(${color},${opacity})`)) {
      bg.style.background = `rgba(${color},${opacity})`;
    } else {
      bg.style.background = "rgba(0,0,0,0.85)";
    }

    // Lightbox container
    const box = document.createElement("div");
    box.classList.add("box_anybox");
    box.style.position = "absolute";
    box.style.top = top + "%";
    box.style.left = "50%";
    box.style.transform = "translate(-50%,-50%)";
    box.style.maxWidth = "90vw";
    box.style.maxHeight = "85vh";
    box.style.willChange = "transform, opacity";

    // Image wrapper
    const imgWrapper = document.createElement("div");
    imgWrapper.style.position = "relative";
    imgWrapper.style.borderRadius = "12px";
    imgWrapper.style.overflow = "hidden";
    imgWrapper.style.boxShadow = "0 25px 60px rgba(0,0,0,0.5)";
    imgWrapper.style.lineHeight = "0";

    for (let i = 0; i < srcs.length; i++) {
      let img = new Image();
      img.src = srcs[i];
      img.setAttribute("anybox_id", i);
      img.style.display = "none";
      img.style.width = "100%";
      img.style.height = "auto";
      img.style.maxHeight = "80vh";
      img.style.objectFit = "contain";
      img.className = "any-box_lightbox_images_" + this.id;
      this._modalImages.push(img);
      imgWrapper.appendChild(img);
    }

    box.appendChild(imgWrapper);

    // Close button
    if (closeButton) {
      let cbColor = "white";
      let cbSize = 28;
      if (typeof closeButton === "object") {
        cbColor = closeButton.fill || "white";
        cbSize = closeButton.size || 28;
      }
      let closeDiv = document.createElement("div");
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

      let closeIcon = document.createElement("div");
      closeIcon.style.width = cbSize + "px";
      closeIcon.style.height = cbSize + "px";
      closeIcon.style.display = "flex";
      closeIcon.innerHTML = this.svg;
      closeIcon.children[0].style.fill = cbColor;

      closeDiv.appendChild(closeIcon);
      closeDiv.addEventListener("click", () => this.close(animation));
      closeDiv.addEventListener("mouseenter", () => {
        closeDiv.style.background = "rgba(0,0,0,0.8)";
        closeDiv.style.transform = "scale(1.1)";
      });
      closeDiv.addEventListener("mouseleave", () => {
        closeDiv.style.background = "rgba(0,0,0,0.6)";
        closeDiv.style.transform = "scale(1)";
      });
      box.appendChild(closeDiv);
    }

    // Slider controls
    if (slider) {
      let element = this.activeSlider(
        slider.buttonColor || "#fff",
        slider.information,
      );
      box.appendChild(element);
    }

    // Thumbnail click handlers
    for (let image of this._images) {
      image.style.cursor = "pointer";
      image.style.transition = "transform .2s, box-shadow .2s";
      image.addEventListener("click", (evt) => {
        this._isFirstOpen =
          bg.style.display === "none" || bg.style.display === "";
        bg.style.opacity = "1";
        bg.style.display = "block";
        const liveAnimation = {
          type: this._animationType,
          duration: this._animationDuration,
        };
        this.showImage(evt.currentTarget, top, liveAnimation, box);
      });
    }

    bg.appendChild(box);
    document.body.appendChild(bg);

    this._setupKeyboardNav();
    this._setupSwipeNav(bg);
  };

  _setupKeyboardNav = () => {
    document.addEventListener("keydown", (evt) => {
      const bg = document.getElementById("bg_" + this.id);
      if (!bg || bg.style.display === "none") return;

      if (evt.key === "ArrowLeft") {
        this._navigateImage(-1);
      } else if (evt.key === "ArrowRight") {
        this._navigateImage(1);
      }
    });
  };

  _setupSwipeNav = (bg) => {
    let touchStartX = 0;
    bg.addEventListener(
      "touchstart",
      (evt) => {
        touchStartX = evt.changedTouches[0].screenX;
      },
      { passive: true },
    );
    bg.addEventListener(
      "touchend",
      (evt) => {
        const diff = touchStartX - evt.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) {
          this._navigateImage(diff > 0 ? 1 : -1);
        }
      },
      { passive: true },
    );
  };

  _navigateImage = (direction) => {
    const currentId = parseInt(this.getChosenImage());
    const nextId = currentId + direction;
    if (nextId < 0 || nextId >= this._images.length) return;
    this._lastDirection = direction;
    this._images[nextId].click();
  };

  showImage = (evt, top = 50, animation = false, box = null) => {
    const imgClass = "any-box_lightbox_images_" + this.id;
    const allImages = Array.from(document.querySelectorAll("." + imgClass));
    const filtered = allImages.filter((e) => e.src === evt.src);
    const notFiltered = allImages.filter((e) => e.src !== evt.src);

    filtered[0].style.display = "block";

    // First open: animate the whole box (open animation)
    if (this._isFirstOpen && animation && box) {
      this.globalAnimation.animate({
        el: box,
        duration: animation.duration,
        type: animation.type,
        top: top,
        direct: true,
      });
      this._isFirstOpen = false;
    } else {
      // Navigating between images: animate only the image
      let transitionType = this._imageTransition;
      // Auto direction-aware for slide
      if (transitionType === "slide") {
        transitionType = this._lastDirection >= 0 ? "slideLeft" : "slideRight";
      }
      this.globalAnimation.animateImage(
        filtered[0],
        transitionType,
        this._imageTransitionDuration,
      );
    }

    filtered[0].classList.add("display_" + this.id);
    filtered[0].classList.remove("hide_" + this.id);
    notFiltered.forEach((e) => {
      e.classList.add("hide_" + this.id);
      e.classList.remove("display_" + this.id);
      e.style.display = "none";
    });

    const butonDiv = document.getElementById("butonDiv_" + this.id);
    if (butonDiv) {
      butonDiv.setAttribute(
        "btn_id_anybox",
        parseInt(this.getChosenImage()) + 1,
      );
    }
    const infDiv = document.getElementById("infDiv_" + this.id);
    if (infDiv) {
      infDiv.innerText = parseInt(this.getChosenImage()) + 1;
    }
  };

  activeSlider = (color = "#fff", information) => {
    let butonDiv = document.createElement("div");
    butonDiv.id = "butonDiv_" + this.id;
    butonDiv.style.display = "flex";
    butonDiv.style.justifyContent = "center";
    butonDiv.style.alignItems = "center";
    butonDiv.style.gap = "20px";
    butonDiv.style.marginTop = "16px";

    let btn_left = this._createNavButton(color);
    btn_left.innerHTML = this.left;
    btn_left.children[0].style.fill = color;
    btn_left.children[0].style.display = "flex";

    let infDiv = null;
    if (information) {
      infDiv = document.createElement("div");
      infDiv.style.fontFamily = "Inter, Arial, Helvetica, sans-serif";
      infDiv.style.color = color;
      infDiv.style.fontSize = "14px";
      infDiv.style.letterSpacing = "0.02em";
      infDiv.style.opacity = "0.8";
      infDiv.style.minWidth = "100px";
      infDiv.style.textAlign = "center";
      infDiv.innerHTML = `<span id="infDiv_${this.id}">1</span> / ${this._images.length}`;
    }

    let btn_right = this._createNavButton(color);
    btn_right.innerHTML = this.right;
    btn_right.children[0].style.fill = color;
    btn_right.children[0].style.display = "flex";

    btn_left.addEventListener("click", () => {
      const id =
        parseInt(
          document
            .getElementById("butonDiv_" + this.id)
            .getAttribute("btn_id_anybox"),
        ) - 1;
      if (id - 1 >= 0) {
        this._lastDirection = -1;
        this._images[id - 1].click();
      }
    });

    btn_right.addEventListener("click", () => {
      const id =
        parseInt(
          document
            .getElementById("butonDiv_" + this.id)
            .getAttribute("btn_id_anybox"),
        ) - 1;
      if (id + 1 < this._images.length) {
        this._lastDirection = 1;
        this._images[id + 1].click();
      }
    });

    butonDiv.appendChild(btn_left);
    if (infDiv) {
      butonDiv.appendChild(infDiv);
    }
    butonDiv.appendChild(btn_right);
    return butonDiv;
  };

  _createNavButton = (color) => {
    let btn = document.createElement("button");
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
    btn.addEventListener("mouseenter", () => {
      btn.style.backgroundColor = "rgba(255,255,255,0.18)";
      btn.style.borderColor = "rgba(255,255,255,0.4)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.backgroundColor = "rgba(255,255,255,0.08)";
      btn.style.borderColor = "rgba(255,255,255,0.2)";
    });
    return btn;
  };

  minus = (type) => {
    const anim = this.globalAnimation.getAnimation(type);
    if (anim) {
      anim.reverse();
    }
    return this.duration;
  };

  getChosenImage = () => {
    const el = document.querySelector(".display_" + this.id);
    return el ? el.getAttribute("anybox_id") : "0";
  };
}

/* harmony default export */ const lightbox = (Lightbox);

;// CONCATENATED MODULE: ./js/anybox/modules/alertbox.js



class Alertbox extends base {
  svg = svg;

  status = {
    success: { color: "#198754", type: "success" },
    fail: { color: "#FC100D", type: "fail" },
    warning: { color: "#FFCC00", type: "warning" },
  };

  _theme = "light";

  constructor(lBsettings) {
    super();
    this._theme = lBsettings.theme || "light";
    this.run(lBsettings);
  }

  _colors = () => {
    const dark = this._theme === "dark";
    return {
      boxBg: dark ? "#18181b" : "#ffffff",
      textColor: dark ? "#e4e4e7" : "#111111",
      subTextColor: dark ? "#a1a1aa" : "#555555",
      borderColor: dark ? "rgba(255,255,255,0.08)" : "#e5e5e5",
      closeFill: dark ? "#a1a1aa" : "#111111",
      buttonHover: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
      shadow: dark
        ? "0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)"
        : "rgba(0, 0, 0, 0.12) 0px 8px 30px",
    };
  };

  run = (settings) => {
    let {
      bgColor,
      opacity,
      top,
      closeButton,
      message,
      headline,
      buttons,
      svgStatus,
      animation,
    } = settings;
    this.loadBaseElements(
      bgColor,
      opacity,
      top,
      closeButton,
      message,
      headline,
      buttons,
      svgStatus,
      animation,
    );
  };

  show = (status = false, animation) => {
    const bg = document.getElementById("bg_" + this.id);
    if (!bg) return;

    if (status) {
      const svgPlace = bg.querySelector("#svgPlace_" + this.id);
      const oldSvg = svgPlace.querySelector(".svgDiv");
      if (oldSvg) oldSvg.remove();
      let { color, type } = this.status[status];
      let svgDiv = this.globalAnimation.statusAnimation(color, type);
      svgPlace.appendChild(svgDiv);
    }

    if (animation) {
      const allEl = bg.querySelector("#all_" + this.id);
      allEl.parentElement.style.transform = "scale(0) translate(-50%,-50%)";
      let animOpts = {
        el: allEl,
        type: typeof animation === "object" ? animation.type : "center",
        duration: typeof animation === "object" ? animation.duration : 1000,
        top: 40,
      };
      this.globalAnimation.animate(animOpts);
    }

    bg.style.opacity = "1";
    bg.style.display = "block";
  };

  loadBaseElements = (
    color = "0,0,0",
    opacity = "0.5",
    top = "50%",
    closeButton = false,
    message = false,
    headline = false,
    buttons = false,
    svgStatus = false,
    animation = false,
  ) => {
    const c = this._colors();
    const bg = this.getBg();

    // Custom styled box for alertbox
    const box = document.createElement("div");
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

    const svgPlace = document.createElement("div");
    const all = document.createElement("div");
    all.id = "all_" + this.id;
    all.style.padding = "28px 24px 0";
    svgPlace.id = "svgPlace_" + this.id;
    box.style.fontFamily =
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

    let head = null;
    if (headline) {
      const hasText =
        typeof headline === "string"
          ? headline.length > 0
          : headline.text && headline.text.length > 0;
      if (hasText) {
        head = document.createElement(
          "h" + (typeof headline === "string" ? 3 : headline.level || 3),
        );
        head.innerText =
          typeof headline === "string" ? headline : headline.text;
        head.style.textAlign = "center";
        head.style.marginBottom = "4px";
        head.style.fontSize = "18px";
        head.style.fontWeight = "600";
        head.style.letterSpacing = "-0.01em";
        head.style.color =
          typeof headline === "object" && headline.color
            ? headline.color
            : c.textColor;
        if (typeof headline === "object" && headline.fontFamily) {
          head.style.fontFamily = headline.fontFamily;
        }
      }
    }

    let p = null;
    if (message) {
      const hasText =
        typeof message === "string"
          ? message.length > 0
          : message.text && message.text.length > 0;
      if (hasText) {
        p = document.createElement("p");
        p.innerText = typeof message === "string" ? message : message.text;
        p.style.textAlign = "center";
        p.style.margin = "0";
        p.style.padding = "0 12px 20px";
        p.style.fontSize = "14px";
        p.style.lineHeight = "1.5";
        p.style.color =
          typeof message === "object" && message.color
            ? message.color
            : c.subTextColor;
        if (typeof message === "object" && message.fontFamily) {
          p.style.fontFamily = message.fontFamily;
        }
      }
    }

    if (this.isColor(`rgba(${color},${opacity})`)) {
      bg.style.background = `rgba(${color},${opacity})`;
    } else {
      bg.style.background = "rgba(0,0,0,0.5)";
    }

    // Close button
    if (closeButton) {
      let cbColor = c.closeFill;
      let cbSize = 20;
      if (typeof closeButton === "object") {
        cbColor = closeButton.fill || c.closeFill;
        cbSize = closeButton.size || 20;
      }
      let closeDiv = document.createElement("div");
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

      let closeIcon = document.createElement("div");
      closeIcon.style.width = cbSize + "px";
      closeIcon.style.height = cbSize + "px";
      closeIcon.style.display = "flex";
      closeIcon.style.opacity = "0.5";
      closeIcon.innerHTML = this.svg;
      closeIcon.children[0].style.fill = cbColor;

      closeDiv.appendChild(closeIcon);
      closeDiv.addEventListener("click", () => this.defaultClickFunction());
      closeDiv.addEventListener("mouseenter", () => {
        closeDiv.style.background = c.buttonHover;
        closeIcon.style.opacity = "1";
      });
      closeDiv.addEventListener("mouseleave", () => {
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
      let { color: statusColor, type } = this.status[svgStatus];
      let svgDiv = this.globalAnimation.statusAnimation(statusColor, type);
      svgPlace.appendChild(svgDiv);
    }
    if (p) {
      all.appendChild(p);
    }

    // Buttons
    let btn = null;
    if (buttons) {
      btn = this.addButtons(buttons, closeButton);
    }
    if (btn) {
      all.appendChild(btn);
    }

    box.appendChild(all);
    bg.appendChild(box);
    document.body.appendChild(bg);

    if (animation) {
      this.globalAnimation.animate({
        el: bg.querySelector("#all_" + this.id),
        type: "center",
        duration: 1000,
      });
    }
  };

  defaultClickFunction = () => {
    const bg = document.getElementById("bg_" + this.id);
    if (!bg) return;
    bg.style.transition = "all .2s ease";
    bg.style.opacity = "0";
    setTimeout(() => {
      bg.style.display = "none";
    }, 220);
  };

  addButtons = (buttons, closeButton) => {
    const c = this._colors();
    const fillColor =
      typeof closeButton === "object" && closeButton.fill
        ? closeButton.fill
        : c.textColor;

    let buttonsDiv = document.createElement("div");
    buttonsDiv.style.display = "flex";
    buttonsDiv.style.flexWrap = "nowrap";
    buttonsDiv.style.borderTop = "1px solid " + c.borderColor;
    buttonsDiv.style.margin = "0 -24px";
    buttonsDiv.style.padding = "0";

    if (typeof buttons === "boolean" && buttons) {
      const btn = this._createButton("OK", fillColor, c);
      btn.style.borderRadius = "0 0 16px 16px";
      btn.onclick = this.defaultClickFunction;
      buttonsDiv.appendChild(btn);
      return buttonsDiv;
    }

    for (let i = 0; i < buttons.length; i++) {
      let btn = this._createButton(buttons[i].buttonName, fillColor, c);
      btn.onclick = buttons[i].function || this.defaultClickFunction;

      if (i !== 0) {
        btn.style.borderLeft = "1px solid " + c.borderColor;
      }
      // Round corners for edge buttons
      if (buttons.length > 1) {
        if (i === 0) btn.style.borderRadius = "0 0 0 16px";
        if (i === buttons.length - 1) btn.style.borderRadius = "0 0 16px 0";
      } else {
        btn.style.borderRadius = "0 0 16px 16px";
      }

      buttonsDiv.appendChild(btn);
    }

    return buttonsDiv;
  };

  _createButton = (text, color, c) => {
    let btn = document.createElement("button");
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
    btn.addEventListener("mouseenter", () => {
      btn.style.backgroundColor = c.buttonHover;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.backgroundColor = "transparent";
    });
    return btn;
  };
}

/* harmony default export */ const alertbox = (Alertbox);

;// CONCATENATED MODULE: ./js/anybox/modules/tooltip.js
let _tooltipIdCounter = 0;

class Tooltip {
  _id = "anybox-tooltip-" + ++_tooltipIdCounter + "-" + Date.now();
  _tooltipEl = null;
  _arrow = null;
  _showTimeout = null;
  _hideTimeout = null;
  _boundShow = null;
  _boundHide = null;
  _boundReposition = null;
  _targets = [];

  // Defaults
  _bgColor = "rgba(15,15,20,0.92)";
  _textColor = "#fff";
  _fontSize = 13;
  _padding = "6px 12px";
  _borderRadius = 6;
  _maxWidth = 260;
  _offset = 8;
  _placement = "top"; // top | bottom | left | right
  _delay = 0;
  _hideDelay = 0;
  _arrow_enabled = true;

  constructor(settings = {}) {
    if (settings.bgColor) this._bgColor = settings.bgColor;
    if (settings.textColor) this._textColor = settings.textColor;
    if (settings.fontSize) this._fontSize = settings.fontSize;
    if (settings.padding) this._padding = settings.padding;
    if (settings.borderRadius !== undefined)
      this._borderRadius = settings.borderRadius;
    if (settings.maxWidth) this._maxWidth = settings.maxWidth;
    if (settings.offset !== undefined) this._offset = settings.offset;
    if (settings.placement) this._placement = settings.placement;
    if (settings.delay !== undefined) this._delay = settings.delay;
    if (settings.hideDelay !== undefined) this._hideDelay = settings.hideDelay;
    if (settings.arrow !== undefined) this._arrow_enabled = settings.arrow;

    this._init(settings.selector || "[data-anybox-tooltip]");
  }

  _init = (selector) => {
    const els = document.querySelectorAll(selector);
    this._boundShow = (evt) => this._handleShow(evt);
    this._boundHide = (evt) => this._handleHide(evt);

    els.forEach((el) => {
      el.addEventListener("mouseenter", this._boundShow);
      el.addEventListener("mouseleave", this._boundHide);
      el.addEventListener("focus", this._boundShow);
      el.addEventListener("blur", this._boundHide);
      this._targets.push(el);
    });
  };

  _handleShow = (evt) => {
    clearTimeout(this._hideTimeout);
    const target = evt.currentTarget;
    const text =
      target.getAttribute("data-anybox-tooltip") ||
      target.getAttribute("title") ||
      "";
    if (!text) return;

    // Prevent native title
    if (target.hasAttribute("title")) {
      target.setAttribute("data-anybox-tooltip", target.getAttribute("title"));
      target.removeAttribute("title");
    }

    this._showTimeout = setTimeout(() => {
      this._createTooltip(text);
      this._positionTooltip(target);
      this._animateIn();
    }, this._delay);
  };

  _handleHide = () => {
    clearTimeout(this._showTimeout);
    this._hideTimeout = setTimeout(() => {
      this._animateOut();
    }, this._hideDelay);
  };

  _createTooltip = (text) => {
    this._removeTooltip();

    const el = document.createElement("div");
    el.id = this._id;
    el.style.position = "fixed";
    el.style.zIndex = "99999";
    el.style.backgroundColor = this._bgColor;
    el.style.color = this._textColor;
    el.style.fontSize = this._fontSize + "px";
    el.style.fontFamily =
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
    el.style.padding = this._padding;
    el.style.borderRadius = this._borderRadius + "px";
    el.style.maxWidth = this._maxWidth + "px";
    el.style.lineHeight = "1.4";
    el.style.wordWrap = "break-word";
    el.style.pointerEvents = "none";
    el.style.opacity = "0";
    el.style.whiteSpace = "normal";
    el.style.boxShadow = "0 4px 14px rgba(0,0,0,0.25)";
    el.textContent = text;

    // Arrow
    if (this._arrow_enabled) {
      const arrow = document.createElement("div");
      arrow.style.position = "absolute";
      arrow.style.width = "8px";
      arrow.style.height = "8px";
      arrow.style.backgroundColor = this._bgColor;
      arrow.style.transform = "rotate(45deg)";
      arrow.style.pointerEvents = "none";
      el.appendChild(arrow);
      this._arrow = arrow;
    }

    document.body.appendChild(el);
    this._tooltipEl = el;
  };

  _positionTooltip = (target) => {
    const el = this._tooltipEl;
    if (!el) return;

    const tr = target.getBoundingClientRect();
    const elW = el.offsetWidth;
    const elH = el.offsetHeight;
    const offset = this._offset;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    let placement = this._placement;
    let top, left;

    // Calculate ideal position
    const positions = {
      top: {
        top: tr.top - elH - offset,
        left: tr.left + tr.width / 2 - elW / 2,
      },
      bottom: {
        top: tr.bottom + offset,
        left: tr.left + tr.width / 2 - elW / 2,
      },
      left: {
        top: tr.top + tr.height / 2 - elH / 2,
        left: tr.left - elW - offset,
      },
      right: { top: tr.top + tr.height / 2 - elH / 2, left: tr.right + offset },
    };

    // Overflow detection — flip if needed
    const ideal = positions[placement];
    if (placement === "top" && ideal.top < 4) placement = "bottom";
    else if (placement === "bottom" && ideal.top + elH > vh - 4)
      placement = "top";
    else if (placement === "left" && ideal.left < 4) placement = "right";
    else if (placement === "right" && ideal.left + elW > vw - 4)
      placement = "left";

    const pos = positions[placement];
    top = pos.top;
    left = pos.left;

    // Clamp horizontal
    if (left < 4) left = 4;
    if (left + elW > vw - 4) left = vw - 4 - elW;

    // Clamp vertical
    if (top < 4) top = 4;
    if (top + elH > vh - 4) top = vh - 4 - elH;

    el.style.top = top + "px";
    el.style.left = left + "px";

    // Arrow positioning
    if (this._arrow_enabled && this._arrow) {
      const a = this._arrow;
      a.style.top = "";
      a.style.bottom = "";
      a.style.left = "";
      a.style.right = "";

      if (placement === "top") {
        a.style.bottom = "-4px";
        a.style.left =
          Math.min(Math.max(tr.left + tr.width / 2 - left - 4, 8), elW - 12) +
          "px";
      } else if (placement === "bottom") {
        a.style.top = "-4px";
        a.style.left =
          Math.min(Math.max(tr.left + tr.width / 2 - left - 4, 8), elW - 12) +
          "px";
      } else if (placement === "left") {
        a.style.right = "-4px";
        a.style.top =
          Math.min(Math.max(tr.top + tr.height / 2 - top - 4, 6), elH - 10) +
          "px";
      } else if (placement === "right") {
        a.style.left = "-4px";
        a.style.top =
          Math.min(Math.max(tr.top + tr.height / 2 - top - 4, 6), elH - 10) +
          "px";
      }
    }

    // Store placement for animation direction
    el.dataset.placement = placement;
  };

  _animateIn = () => {
    const el = this._tooltipEl;
    if (!el) return;
    const p = el.dataset.placement;
    const from =
      p === "top"
        ? "translateY(4px)"
        : p === "bottom"
          ? "translateY(-4px)"
          : p === "left"
            ? "translateX(4px)"
            : "translateX(-4px)";

    el.animate(
      [
        { opacity: 0, transform: from },
        { opacity: 1, transform: "translate(0)" },
      ],
      { duration: 150, fill: "forwards", easing: "ease-out" },
    );
  };

  _animateOut = () => {
    const el = this._tooltipEl;
    if (!el) return;
    const a = el.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 100,
      fill: "forwards",
      easing: "ease-in",
    });
    a.onfinish = () => this._removeTooltip();
  };

  _removeTooltip = () => {
    if (this._tooltipEl) {
      this._tooltipEl.remove();
      this._tooltipEl = null;
      this._arrow = null;
    }
  };

  destroy = () => {
    this._removeTooltip();
    this._targets.forEach((el) => {
      el.removeEventListener("mouseenter", this._boundShow);
      el.removeEventListener("mouseleave", this._boundHide);
      el.removeEventListener("focus", this._boundShow);
      el.removeEventListener("blur", this._boundHide);
    });
    this._targets = [];
  };
}

/* harmony default export */ const tooltip = (Tooltip);

;// CONCATENATED MODULE: ./js/anybox/modules/notification.js
let _notifContainers = {};

class Notification {
  // Defaults
  _position = "top-right"; // top-right | top-left | top-center | bottom-center | bottom-left | bottom-right
  _duration = 4000; // how long notification stays visible (ms)
  _animationType = "slide"; // slide | fade | bounce
  _animationDuration = 300;
  _maxWidth = 380;
  _gap = 10;
  _offset = 20;
  _showProgress = true;
  _closeOnClick = true;
  _pauseOnHover = true;

  _statusConfig = {
    success: { color: "#198754", icon: "&#x2714;", label: "Success" },
    danger: { color: "#FC100D", icon: "&#x2718;", label: "Error" },
    warning: { color: "#FFCC00", icon: "&#x26A0;", label: "Warning" },
  };

  constructor(settings = {}) {
    if (settings.position) this._position = settings.position;
    if (settings.duration !== undefined) this._duration = settings.duration;
    if (settings.animationType) this._animationType = settings.animationType;
    if (settings.animationDuration)
      this._animationDuration = settings.animationDuration;
    if (settings.maxWidth) this._maxWidth = settings.maxWidth;
    if (settings.gap !== undefined) this._gap = settings.gap;
    if (settings.offset !== undefined) this._offset = settings.offset;
    if (settings.showProgress !== undefined)
      this._showProgress = settings.showProgress;
    if (settings.closeOnClick !== undefined)
      this._closeOnClick = settings.closeOnClick;
    if (settings.pauseOnHover !== undefined)
      this._pauseOnHover = settings.pauseOnHover;
  }

  _getContainer = () => {
    const pos = this._position;
    if (_notifContainers[pos]) return _notifContainers[pos];

    const c = document.createElement("div");
    c.style.position = "fixed";
    c.style.zIndex = "99998";
    c.style.display = "flex";
    c.style.flexDirection = pos.startsWith("top") ? "column" : "column-reverse";
    c.style.gap = this._gap + "px";
    c.style.pointerEvents = "none";
    c.style.maxHeight = "100vh";
    c.style.overflow = "visible";

    const offset = this._offset + "px";
    if (pos.includes("top")) c.style.top = offset;
    if (pos.includes("bottom")) c.style.bottom = offset;
    if (pos.includes("right")) {
      c.style.right = offset;
      c.style.alignItems = "flex-end";
    }
    if (pos.includes("left")) {
      c.style.left = offset;
      c.style.alignItems = "flex-start";
    }
    if (pos === "top-center") {
      c.style.left = "50%";
      c.style.transform = "translateX(-50%)";
      c.style.alignItems = "center";
    }
    if (pos === "bottom-center") {
      c.style.left = "50%";
      c.style.transform = "translateX(-50%)";
      c.style.alignItems = "center";
    }

    document.body.appendChild(c);
    _notifContainers[pos] = c;
    return c;
  };

  show = (status = "success", options = {}) => {
    const title =
      options.title || this._statusConfig[status]?.label || "Notification";
    const message = options.message || "";
    const duration =
      options.duration !== undefined ? options.duration : this._duration;
    const animationType = options.animationType || this._animationType;
    const animationDuration =
      options.animationDuration || this._animationDuration;

    const statusCfg = this._statusConfig[status] || this._statusConfig.success;
    const container = this._getContainer();

    // Card
    const card = document.createElement("div");
    card.style.pointerEvents = "auto";
    card.style.display = "flex";
    card.style.alignItems = "flex-start";
    card.style.gap = "12px";
    card.style.padding = "14px 16px";
    card.style.minWidth = "280px";
    card.style.maxWidth = this._maxWidth + "px";
    card.style.width = "auto";
    card.style.backgroundColor = "#18181b";
    card.style.borderRadius = "12px";
    card.style.border = "1px solid rgba(255,255,255,0.08)";
    card.style.boxShadow = "0 8px 32px rgba(0,0,0,0.4)";
    card.style.fontFamily =
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
    card.style.cursor = this._closeOnClick ? "pointer" : "default";
    card.style.position = "relative";
    card.style.overflow = "hidden";

    // Color accent bar
    const accent = document.createElement("div");
    accent.style.position = "absolute";
    accent.style.top = "0";
    accent.style.left = "0";
    accent.style.width = "3px";
    accent.style.height = "100%";
    accent.style.backgroundColor = statusCfg.color;
    accent.style.borderRadius = "12px 0 0 12px";
    card.appendChild(accent);

    // Icon
    const icon = document.createElement("div");
    icon.style.width = "28px";
    icon.style.height = "28px";
    icon.style.borderRadius = "8px";
    icon.style.display = "flex";
    icon.style.alignItems = "center";
    icon.style.justifyContent = "center";
    icon.style.fontSize = "14px";
    icon.style.flexShrink = "0";
    icon.style.backgroundColor = statusCfg.color + "20";
    icon.style.color = statusCfg.color;
    icon.style.marginLeft = "4px";
    icon.innerHTML = statusCfg.icon;
    card.appendChild(icon);

    // Text content
    const content = document.createElement("div");
    content.style.flex = "1";
    content.style.minWidth = "0";

    const h = document.createElement("div");
    h.style.fontWeight = "600";
    h.style.fontSize = "13px";
    h.style.color = "#e4e4e7";
    h.style.marginBottom = message ? "2px" : "0";
    h.textContent = title;
    content.appendChild(h);

    if (message) {
      const p = document.createElement("div");
      p.style.fontSize = "12px";
      p.style.color = "#a1a1aa";
      p.style.lineHeight = "1.4";
      p.textContent = message;
      content.appendChild(p);
    }
    card.appendChild(content);

    // Close X
    const closeBtn = document.createElement("div");
    closeBtn.style.width = "18px";
    closeBtn.style.height = "18px";
    closeBtn.style.display = "flex";
    closeBtn.style.alignItems = "center";
    closeBtn.style.justifyContent = "center";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.color = "#52525b";
    closeBtn.style.fontSize = "14px";
    closeBtn.style.flexShrink = "0";
    closeBtn.style.borderRadius = "4px";
    closeBtn.style.transition = "color .15s, background .15s";
    closeBtn.innerHTML = "&#x2715;";
    closeBtn.addEventListener("mouseenter", () => {
      closeBtn.style.color = "#e4e4e7";
      closeBtn.style.backgroundColor = "rgba(255,255,255,0.08)";
    });
    closeBtn.addEventListener("mouseleave", () => {
      closeBtn.style.color = "#52525b";
      closeBtn.style.backgroundColor = "transparent";
    });
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this._dismiss(card, animationType, animationDuration);
    });
    card.appendChild(closeBtn);

    // Progress bar
    let progressBar = null;
    if (this._showProgress && duration > 0) {
      progressBar = document.createElement("div");
      progressBar.style.position = "absolute";
      progressBar.style.bottom = "0";
      progressBar.style.left = "0";
      progressBar.style.height = "2px";
      progressBar.style.backgroundColor = statusCfg.color;
      progressBar.style.width = "100%";
      progressBar.style.borderRadius = "0 0 12px 12px";
      progressBar.style.transformOrigin = "left";
      card.appendChild(progressBar);
    }

    container.appendChild(card);

    // Animate in
    this._animateIn(card, animationType, animationDuration);

    // Auto-dismiss timer with pause-on-hover
    if (duration > 0) {
      let remaining = duration;
      let startTime = Date.now();
      let timer = null;
      let progressAnim = null;

      const startTimer = () => {
        startTime = Date.now();
        timer = setTimeout(() => {
          this._dismiss(card, animationType, animationDuration);
        }, remaining);

        if (progressBar) {
          progressAnim = progressBar.animate(
            [
              { transform: `scaleX(${remaining / duration})` },
              { transform: "scaleX(0)" },
            ],
            {
              duration: remaining,
              fill: "forwards",
              easing: "linear",
            },
          );
        }
      };

      const pauseTimer = () => {
        clearTimeout(timer);
        remaining -= Date.now() - startTime;
        if (remaining < 0) remaining = 0;
        if (progressAnim) progressAnim.pause();
      };

      if (this._pauseOnHover) {
        card.addEventListener("mouseenter", pauseTimer);
        card.addEventListener("mouseleave", startTimer);
      }

      startTimer();
    }

    // Click to dismiss
    if (this._closeOnClick) {
      card.addEventListener("click", () => {
        this._dismiss(card, animationType, animationDuration);
      });
    }
  };

  _animateIn = (card, type, duration) => {
    const pos = this._position;
    let keyframes;

    if (type === "slide") {
      let from;
      if (pos.includes("right")) from = "translateX(110%)";
      else if (pos.includes("left")) from = "translateX(-110%)";
      else if (pos.startsWith("top")) from = "translateY(-110%)";
      else from = "translateY(110%)";

      keyframes = [
        { transform: from, opacity: 0 },
        { transform: "translate(0)", opacity: 1 },
      ];
    } else if (type === "bounce") {
      let from;
      if (pos.includes("right")) from = "translateX(110%)";
      else if (pos.includes("left")) from = "translateX(-110%)";
      else if (pos.startsWith("top")) from = "translateY(-110%)";
      else from = "translateY(110%)";

      keyframes = [
        { transform: from, opacity: 0 },
        { transform: "translate(0) scale(1.04)", opacity: 1, offset: 0.6 },
        { transform: "translate(0) scale(0.98)", opacity: 1, offset: 0.8 },
        { transform: "translate(0) scale(1)", opacity: 1 },
      ];
    } else {
      // fade
      keyframes = [
        { opacity: 0, transform: "scale(0.95)" },
        { opacity: 1, transform: "scale(1)" },
      ];
    }

    card.animate(keyframes, {
      duration: duration,
      fill: "forwards",
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    });
  };

  _dismiss = (card, type, duration) => {
    if (card._dismissed) return;
    card._dismissed = true;

    const pos = this._position;
    let keyframes;

    if (type === "slide") {
      let to;
      if (pos.includes("right")) to = "translateX(110%)";
      else if (pos.includes("left")) to = "translateX(-110%)";
      else if (pos.startsWith("top")) to = "translateY(-110%)";
      else to = "translateY(110%)";

      keyframes = [
        { transform: "translate(0)", opacity: 1 },
        { transform: to, opacity: 0 },
      ];
    } else if (type === "bounce") {
      let to;
      if (pos.includes("right")) to = "translateX(110%)";
      else if (pos.includes("left")) to = "translateX(-110%)";
      else if (pos.startsWith("top")) to = "translateY(-110%)";
      else to = "translateY(110%)";

      keyframes = [
        { transform: "translate(0)", opacity: 1 },
        { transform: to, opacity: 0 },
      ];
    } else {
      keyframes = [
        { opacity: 1, transform: "scale(1)" },
        { opacity: 0, transform: "scale(0.95)" },
      ];
    }

    const a = card.animate(keyframes, {
      duration: Math.min(duration, 200),
      fill: "forwards",
      easing: "ease-in",
    });
    a.onfinish = () => card.remove();
  };

  destroy = () => {
    const c = _notifContainers[this._position];
    if (c) {
      c.remove();
      delete _notifContainers[this._position];
    }
  };
}

/* harmony default export */ const notification = (Notification);

;// CONCATENATED MODULE: ./js/anybox/init.js




class Anybox {
  constructor(type, settings) {
    if (type.toLowerCase() === "lightbox") {
      return new lightbox(settings);
    } else if (type.toLowerCase() === "alertbox") {
      return new alertbox(settings);
    } else if (type.toLowerCase() === "tooltip") {
      return new tooltip(settings);
    } else if (type.toLowerCase() === "notification") {
      return new notification(settings);
    }
  }
}
/* harmony default export */ const init = (Anybox);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
