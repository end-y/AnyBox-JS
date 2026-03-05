# AnyBox.js

A lightweight, zero-dependency JavaScript library for creating elegant lightboxes and alert dialogs with smooth animations.

## Features

- **Zero dependencies** - Pure vanilla JavaScript, no frameworks needed
- **10 open animations** - center, left, right, top, bottom, opacity, flip, rotate, bounce, elastic
- **7 image transitions** - fade, slide, zoomIn, zoomOut, flipX, flipY
- **Dark & Light themes** - Built-in theme support for alertbox
- **Keyboard navigation** - Arrow keys for gallery, Escape to close
- **Touch support** - Swipe gestures for mobile devices
- **Multi-instance safe** - Multiple modals on the same page without conflicts
- **Web Animations API** - Hardware-accelerated, compositor-thread animations

## Installation

```html
<script src="anybox.min.js"></script>
```

## Lightbox

Add the `any-box_lightbox` class to your images:

```html
<img class="any-box_lightbox" src="image1.jpg">
<img class="any-box_lightbox" src="image2.jpg">
<img class="any-box_lightbox" src="image3.jpg">
```

Initialize the lightbox:

```js
let lightbox = new Anybox("lightbox", {
    bgColor: "0,0,0",
    opacity: "0.85",
    top: 50,
    animation: {
        type: "bounce",
        duration: 700
    },
    imageTransition: "slide",
    imageTransitionDuration: 350,
    slider: {
        buttonColor: "#fff",
        information: true
    },
    closeButton: {
        size: 22,
        fill: "#fff",
        location: "right"
    }
})
```

### Lightbox Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `bgColor` | `string` | `"0,0,0"` | Background color as RGB values |
| `opacity` | `string` | `"0.5"` | Background overlay opacity (0-1) |
| `top` | `number` | `50` | Vertical position as percentage |
| `animation` | `boolean\|object` | `false` | Open animation. `true` for default, or `{type, duration}` |
| `animation.type` | `string` | `"opacity"` | One of: `center`, `left`, `right`, `top`, `bottom`, `opacity`, `flip`, `rotate`, `bounce`, `elastic` |
| `animation.duration` | `number` | `1000` | Animation duration in milliseconds |
| `imageTransition` | `string` | `"fade"` | Image navigation transition: `fade`, `slide`, `zoomIn`, `zoomOut`, `flipX`, `flipY` |
| `imageTransitionDuration` | `number` | `350` | Transition duration in milliseconds |
| `slider` | `object\|false` | `false` | Slider navigation controls |
| `slider.buttonColor` | `string` | `"#111"` | Slider button color |
| `slider.information` | `boolean` | `false` | Show "1 / 3" image counter |
| `closeButton` | `object\|false` | `false` | Close button configuration |
| `closeButton.fill` | `string` | `"white"` | Close button color |
| `closeButton.size` | `number` | `28` | Close button size in pixels |
| `closeButton.location` | `string` | `"right"` | `"right"` or `"left"` |

## Alertbox

```js
let alertBox = new Anybox("alertbox", {
    bgColor: "0,0,0",
    opacity: "0.3",
    top: 40,
    theme: "dark",
    headline: {
        text: "Success!",
        level: 3
    },
    message: {
        text: "Your action was completed.",
        textAlign: "center"
    },
    svgStatus: "success",
    animation: true,
    buttons: [
        {
            buttonName: "OK",
            function: function() {
                alertBox.defaultClickFunction()
            }
        },
        {
            buttonName: "Cancel"
        }
    ],
    closeButton: {
        size: 20,
        location: "right"
    }
})
```

### Showing the Alertbox

```js
// Show with status and animation
alertBox.show("success", true)

// Show with custom animation type
alertBox.show("fail", { type: "bounce", duration: 700 })
alertBox.show("warning", { type: "elastic", duration: 800 })
```

### Alertbox Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `bgColor` | `string` | `"0,0,0"` | Background color as RGB values |
| `opacity` | `string` | `"0.5"` | Background overlay opacity (0-1) |
| `top` | `string\|number` | `"50%"` | Vertical position |
| `theme` | `string` | `"light"` | `"light"` or `"dark"` |
| `headline` | `string\|object` | `false` | Headline text or `{text, level, color, fontFamily}` |
| `message` | `string\|object` | `false` | Message text or `{text, color, fontFamily, textAlign}` |
| `svgStatus` | `string` | `false` | Animated SVG icon: `"success"`, `"fail"`, `"warning"` |
| `animation` | `boolean` | `false` | Enable open animation |
| `buttons` | `boolean\|array` | `false` | `true` for default OK button, or array of `{buttonName, function}` |
| `closeButton` | `object\|false` | `false` | Close button configuration |

## Methods

### `show(status, animation)`

Show the alertbox with a status and animation.

- `status` - `"success"`, `"fail"`, or `"warning"`
- `animation` - `true` for center animation, or `{type: "bounce", duration: 700}`

### `defaultClickFunction()`

Close the alertbox with a fade-out animation.

### `destroy()`

Remove the modal from the DOM and clean up event listeners.

## Animation Types

### Open Animations
Used when the modal first appears.

| Type | Description |
|------|-------------|
| `center` | Scale up from center |
| `bounce` | Scale with bounce effect |
| `elastic` | Elastic stretch effect |
| `flip` | 3D flip on Y axis |
| `rotate` | Rotate and scale in |
| `opacity` | Simple fade in |
| `top` | Slide down from top |
| `bottom` | Slide up from bottom |
| `left` | Slide in from left |
| `right` | Slide in from right |

### Image Transitions
Used when navigating between images in the lightbox. Only the image is animated, controls stay static.

| Type | Description |
|------|-------------|
| `fade` | Crossfade between images |
| `slide` | Direction-aware slide (auto left/right) |
| `slideLeft` | Slide from right to left |
| `slideRight` | Slide from left to right |
| `zoomIn` | Zoom in from smaller |
| `zoomOut` | Zoom in from larger |
| `flipX` | 3D flip on X axis |
| `flipY` | 3D flip on Y axis |

## Browser Support

Works in all modern browsers that support the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).

## License

MIT - [Ender Yazici](https://github.com/end-y)
