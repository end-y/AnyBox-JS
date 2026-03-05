import Base from "./base.js";
import { left, right, svg } from "./svg.js";

class Lightbox extends Base {
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

export default Lightbox;
