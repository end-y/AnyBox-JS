import Base from "./base.js";
import { svg } from "./svg.js";

class Alertbox extends Base {
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

export default Alertbox;
