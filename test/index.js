let lightBox = new Anybox("lightbox",{
    bgColor:"0,0,0",
    opacity:"0.3",
    top: 40,
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
    top: 40,
    closeButton: {
        size: 25,
        fill: "#111",
        location:"right"
    }
})
success.addEventListener("click", () => {
    alertBox.show("success",true)
})
fail.addEventListener("click", () => {
    alertBox.show("fail",true)
})
warning.addEventListener("click", () => {
    alertBox.show("warning")
})
function alert1(){
    alert("hello")
}