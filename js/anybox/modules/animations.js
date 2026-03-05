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

export default Animation;
