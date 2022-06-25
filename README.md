# AnyBox-JS

You can create fancy alertbox or lightbox

## TODOS
  1.prepare react version

### Lightbox

````
new Anybox("lightbox",{
    bgColor:"0,0,0",
    opacity:"0.3",
    top: "40%", 
    slider:{
        buttonColor:"#111",
        information:true
    },
    animation: {
        type:"left",
        duration:1000
    },
    closeButton: {
        size: 25,
        fill: "#111",
        location:"right"
    }
})
````
`bgColor:` It describes lightbox's background color

`opacity:` It describes lightbox's background's opacity. Type: an integer between 0 and 1.

`top`: You can arrange the vertical position of the lightbox. Type: String between 0% and 100%

`slider`: You can moniterize all images through the slider. Type: Boolean || Object

`buttonColor`: You can determine the color of slider buttons Type: String

`information`:  It shows information text like "1 of 3 images", "2 of 3 images". Type: Boolean

`animation`: It activates the animation. Type: Boolean || Object

`type`: It describes animation type. Type: String. "left", "top", "opacity".

`duration`: It describes animation duration. Type: Integer

`closeButton`: It shows the close button and it defines properties of close button. Type: Boolean || Integer

### Alertbox

`````
let alertBox = new Anybox("alertbox",{
    bgColor:"0,0,0",
    headline: {
        text: "Alert Box",
        color:"#111",
        level: 3,
        fontFamily:"Arial, Helvetica, sans-serif"
    },
    message:{
        text: "Hello world.This is alert message",
        color:"#111",
        fontFamily:"Arial, Helvetica, sans-serif",
        textAlign:"center"
    },
    animation: true,
    svgStatus: "warning",
    buttons:[
        {
            "buttonName": "OK",
            "function" : alert1
        },
        {
            "buttonName": "Cancel"
        },
        {
            "buttonName":"Warning"
        },
    ],
    opacity:"0.3",
    top: "40%",
    closeButton: {
        size: 25,
        fill: "#111",
        location:"right"
    }
})
`````

`bgColor:` It describes alertbox's background color. Type: String

`headline`: You can arrange head text, color, font family or alignment Type: Boolean || Object

`animation`: It activates the animation. Type: Boolean

`svgStatus`: You can determine how react alertbox. Type: String. "fail" | "success" | "warning

`buttons`: You can create buttons for the alertbox and you can assign button name and function to them. Type: Object[]

`opacity:` It describes alertbox's background's opacity. Type: an integer between 0 and 1.

`top`: You can arrange the vertical position of the alertbox. Type: String between 0% and 100%

`closebutton`: It shows the close button and it defines properties of close button. Type: Boolean || Integer

