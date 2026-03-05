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

export default Tooltip;
