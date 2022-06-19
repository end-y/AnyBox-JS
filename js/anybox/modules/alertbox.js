import Animation from "./animations.js"
import Base from "./base.js"
import {success, svg, fail, warning} from "./svg.js"
class Alertbox extends Base{
    success = success
    svg = svg
    fail = fail
    warning = warning
    status = {
        "success":{
            svg: this.success,
            color: "#198754",
            dash: "150"
        },
        "fail":{
            svg: this.fail,
            color: "#FC100D",
            dash: "400"
        },
        "warning":{
            svg: this.warning,
            color: "#FFCC00",
            dash: "150"
        }
    }
    constructor(lBsettings){
        super()
        this.run(lBsettings)
        window.addEventListener("resize", () => {
            console.log(window.innerHeight)
            console.log(window.innerWidth)
        })
    }
    run = (settings) => {
        let {bgColor, opacity, top, closeButton,message,headline, buttons, svgStatus,animation} = settings
        this.loadBaseElements(bgColor,opacity,top,closeButton,message,headline, buttons, svgStatus, animation)
    }
    show = (status=false, animation) => {
        if(status){
            document.getElementById("bg_anybox-"+this.id).querySelector(".svgDiv").remove()
            let {svg, color, dash} = this.status[status]
            let svgDiv = new Animation().statusAnimation(svg,color,dash)
            document.getElementById("bg_anybox-"+this.id).querySelector("#svgPlace").appendChild(svgDiv)
        }
        if(animation){
            document.getElementById("bg_anybox-"+this.id).querySelector("#all").parentElement.style.transform= "scale(0) translate(-50%,-50%)"
            new Animation().animate({
                el: document.getElementById("bg_anybox-"+this.id).querySelector("#all"),
                type: "center",
                duration:1000
            })
        }
        
        document.getElementById("bg_anybox-"+this.id).style.display = "block"
    }
    loadBaseElements = (color="0,0,0", opacity="0.5", top="50%", closeButton=false, message=false, headline=false, buttons=false, svgStatus=false,animation=false) => {
        const bg = this.getBg()
        const box = this.getBox(top)
        const svgPlace = document.createElement("div");
        const all = document.createElement("div")
        all.id = "all"
        svgPlace.id = "svgPlace"
        let head = ""
        let p = ""
        box.style.fontFamily = "sans-serif"
        if(headline && (headline.length > 0 || headline.text.length > 0)){
            if(typeof headline == "string"){
                head = document.createElement("h3")
                head.innerText = headline
                head.style.paddingLeft = "20px"
                head.style.paddingBottom = "10px"
                head.style.borderBottom = "1px solid #cdcdcd"
            }else{
                head = document.createElement("h"+headline.level)
                head.innerText = headline.text
                head.style.paddingLeft = "20px"
                head.style.paddingBottom = "10px"
                head.style.fontFamily = headline.fontFamily
                head.style.borderBottom = "1px solid #cdcdcd"
                head.style.color = headline.color

            }

        }
        
        let btn
        if(buttons){
            btn = this.addButtons(buttons, closeButton)
        }

        if(message && (message.length > 0 || message.text.length > 0)){
            if(typeof message == "string"){
                p = document.createElement("p");
                p.innerText = message
                p.style.paddingInline = "50px"
            }else{
                p = document.createElement("p");
                p.innerText = message.text
                p.style.fontFamily = message.fontFamily
                p.style.color = message.color
                switch(message.textAlign){
                    case "center":
                        p.style.paddingInline = "50px"
                        break
                    case "left":
                        p.style.paddingRight = "50px"
                        p.style.paddingLeft = "20px"
                        break
                    case "right":
                        p.style.paddingLeft = "50px"
                        p.style.paddingRight = "20px"
                        break
                }
            }
        }

        if(this.isColor(`rgba(${color},${opacity})`)){
            bg.style.background = `rgba(${color},${opacity})`
        }else{
            bg.style.background = `rgba(0,0,0,0.5)`
        }
        
        if(closeButton){
            let cb = this.getCloseButton(closeButton,false)
            all.appendChild(cb)
        }
        if(head){
            all.appendChild(head)
        }
        all.appendChild(svgPlace)
        if(svgStatus){
            let {svg, color, dash} = this.status[svgStatus]
            let svgDiv = new Animation().statusAnimation(svg,color,dash)
            svgPlace.appendChild(svgDiv)
        }
        
        if(p){
            all.appendChild(p)
        }
        if(btn){
            all.appendChild(btn)
        }
        box.appendChild(all)
        bg.appendChild(box)
        document.body.appendChild(bg)
        if(animation){
            new Animation().animate({
                el: document.getElementById("bg_anybox-"+this.id).querySelector("#all"),
                type: "center",
                duration:1000
            })
        }
    }
    defaultClickFunction = () => {
        document.getElementById("bg_anybox-"+this.id).style.display = "none"
    }
    addButtons = (buttons,closeButton) => {
        console.log(closeButton.fill)
        let buttonsDiv = document.createElement("div")
        buttonsDiv.style.display = "flex"
        buttonsDiv.style.flexWrap = "no-wrap"
        buttonsDiv.style.borderTop = "1px solid #cdcdcd"
        buttonsDiv.style.justifyContent = "space-around"
        buttonsDiv.style.paddingBlock ="10px"
        if(typeof buttons == "boolean" && buttons){
            const btn = document.createElement("button")
            btn.innerText = "OK"
            btn.onclick = this.defaultClickFunction
            btn.style.cursor = "pointer"
            btn.style.color = closeButton.fill || "#000"
            buttonsDiv.appendChild(btn)
            return buttonsDiv
        }else{
            let btn
            for(let i=0; i<buttons.length; i++){
                btn = document.createElement("button")
                btn.style.cursor = "pointer"
                if(buttons.length %2 ==0){
                    if(i != 0 ){
                        btn.style.border = "none"
                        btn.style.borderLeft = "1px solid" + (closeButton.fill || "#000")
                    }else{
                        btn.style.border = "none"
                    }
                }else{
                    if(i == 0 || i == buttons.length-1){
                        btn.style.border = "none"
                    }else{
                        btn.style.border = "none"
                        btn.style.borderLeft = "1px solid" + (closeButton.fill || "#000")  
                        btn.style.borderRight = "1px solid" + (closeButton.fill || "#000")  
                    }
                }
                
                btn.innerText = buttons[i].buttonName
                btn.style.flexGrow = "1"
                btn.style.color = closeButton.fill || "#000"
                btn.style.backgroundColor = "transparent"
                btn.onclick = buttons[i].function || this.defaultClickFunction
                buttonsDiv.appendChild(btn)
            }
        
            return buttonsDiv
        }
    }
}

export default Alertbox