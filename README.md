# AnyBox.js

A lightweight, zero-dependency JavaScript library for creating elegant lightboxes, alert dialogs, tooltips, and toast notifications with smooth animations.

## Features

- **Zero dependencies** - Pure vanilla JavaScript, no frameworks needed
- **10 open animations** - center, left, right, top, bottom, opacity, flip, rotate, bounce, elastic
- **7 image transitions** - fade, slide, zoomIn, zoomOut, flipX, flipY
- **Dark & Light themes** - Built-in theme support for alertbox
- **Smart tooltips** - Auto-positioned with overflow detection and flip behavior
- **Toast notifications** - Stackable, 6 positions, progress bar, pause-on-hover
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

## Tooltip

Add `data-anybox-tooltip` attributes to your elements:

```html
<button data-anybox-tooltip="Save your changes">Save</button>
<span data-anybox-tooltip="Click to copy">Copy Link</span>
```

Initialize the tooltip:

```js
let tooltip = new Anybox("tooltip", {
    placement: "top",
    bgColor: "rgba(15,15,20,0.92)",
    textColor: "#fff",
    fontSize: 13,
    maxWidth: 260,
    offset: 8,
    arrow: true,
    delay: 0,
    hideDelay: 0
})
```

The tooltip automatically detects viewport overflow and flips its position to stay visible.

### Tooltip Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `selector` | `string` | `"[data-anybox-tooltip]"` | CSS selector to attach tooltips |
| `placement` | `string` | `"top"` | Preferred position: `"top"`, `"bottom"`, `"left"`, `"right"` |
| `bgColor` | `string` | `"rgba(15,15,20,0.92)"` | Background color |
| `textColor` | `string` | `"#fff"` | Text color |
| `fontSize` | `number` | `13` | Font size in pixels |
| `padding` | `string` | `"6px 12px"` | CSS padding |
| `borderRadius` | `number` | `6` | Border radius in pixels |
| `maxWidth` | `number` | `260` | Maximum width in pixels |
| `offset` | `number` | `8` | Distance from target element in pixels |
| `arrow` | `boolean` | `true` | Show arrow pointing to target |
| `delay` | `number` | `0` | Delay before showing (ms) |
| `hideDelay` | `number` | `0` | Delay before hiding (ms) |

## Notification

Create a notification instance and call `show()` to display toast notifications:

```js
let notification = new Anybox("notification", {
    position: "top-right",
    duration: 4000,
    animationType: "slide",
    animationDuration: 300,
    showProgress: true,
    pauseOnHover: true,
    closeOnClick: true
})

// Show notifications
notification.show("success", {
    title: "Saved!",
    message: "Your changes have been saved."
})

notification.show("danger", {
    title: "Error",
    message: "Something went wrong."
})

notification.show("warning", {
    title: "Warning",
    message: "This action cannot be undone."
})
```

Notifications are stackable — multiple notifications can appear at once and auto-dismiss with a progress bar.

### Notification Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `position` | `string` | `"top-right"` | Position: `"top-right"`, `"top-left"`, `"top-center"`, `"bottom-center"`, `"bottom-left"`, `"bottom-right"` |
| `duration` | `number` | `4000` | Auto-dismiss time in ms. `0` to disable |
| `animationType` | `string` | `"slide"` | Enter/exit animation: `"slide"`, `"fade"`, `"bounce"` |
| `animationDuration` | `number` | `300` | Animation duration in ms |
| `maxWidth` | `number` | `380` | Maximum card width in pixels |
| `showProgress` | `boolean` | `true` | Show progress bar countdown |
| `closeOnClick` | `boolean` | `true` | Click notification to dismiss |
| `pauseOnHover` | `boolean` | `true` | Pause auto-dismiss timer on hover |
| `gap` | `number` | `10` | Space between stacked notifications |
| `offset` | `number` | `20` | Distance from viewport edge |

### show(status, options)

| Parameter | Type | Description |
|-----------|------|-------------|
| `status` | `string` | `"success"`, `"danger"`, or `"warning"` |
| `options.title` | `string` | Notification title (defaults to status label) |
| `options.message` | `string` | Notification body text |
| `options.duration` | `number` | Override instance duration for this notification |
| `options.animationType` | `string` | Override animation type for this notification |

## Methods

### `show(status, animation)`

Show the alertbox with a status and animation.

- `status` - `"success"`, `"fail"`, or `"warning"`
- `animation` - `true` for center animation, or `{type: "bounce", duration: 700}`

### `defaultClickFunction()`

Close the alertbox with a fade-out animation.

### `destroy()`

Remove the modal from the DOM and clean up event listeners. Works on all types (lightbox, alertbox, tooltip, notification).

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
