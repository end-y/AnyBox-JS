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

export default Notification;
