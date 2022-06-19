import Animation from "./animations.js"
import Base from "./base.js";
import {left,right, svg} from "./svg.js"
class Lightbox extends Base{
    left = left;
    right = right;
    svg = svg
    constructor(lBsettings){
        super()
        this.run(lBsettings)
    }
    run = (settings) => {
        const srcs = this.getSrcs()
        let {bgColor, opacity, top, closeButton, animation,slider} = settings
        this.loadBaseElements(srcs,bgColor,opacity,top,closeButton, animation, slider)
    }

    getSrcs = () => {
        const imgs = this.getImages()
        const srcs = imgs.map(e => e.src);
        return srcs
    }

    getImages = () => Array.from(document.querySelectorAll(".any-box_lightbox"))

    loadBaseElements = (srcs, color="0,0,0", opacity="0.5", top="50%", closeButton=false, animation=false, slider=false) => {
        if(typeof animation == "boolean" && animation){
            animation = {}
            animation.type = "opacity"
            animation.duration = 1000
        }

        const bg = this.getBg(animation)

        const box = this.getBox(top)
        box.style.paddingBlock = "50px"
        if(this.isColor(`rgba(${color},${opacity})`)){
            bg.style.background = `rgba(${color},${opacity})`
        }else{
            bg.style.background = `rgba(0,0,0,0.5)`
        }
        

        if(slider){
            let element = this.activeSlider(slider.buttonColor, slider.information)
            box.appendChild(element)
        }

        if(animation.type == "opacity"){
            box.style.opacity = "0"
        } 
        if (animation.type == "top"){
            box.style.top = "0%"    
        }else{
            box.style.top = top
        }
        if(animation.type == "left"){
            box.style.left = "0%"
        }else{
            box.style.left = "50%"
        }
        

        for(let i=0; i<srcs.length; i++){
            let img = new Image()
            img.src = srcs[i]
            img.setAttribute("anybox_id", i)
            img.style.display = "none"
            img.style.margin = "auto"
            img.style.width = "100%"
            img.style.height = "auto"
            img.className = "any-box_lightbox_images"
            box.appendChild(img)
        }

        let images = this.getImages()
        for(let image of images){
            image.addEventListener("click", (evt) => {
                bg.style.display = "block"
                box.style.maxWidth = evt.currentTarget.naturalWidth + 50 + "px"
                box.style.width = "100%"
                this.showImage(evt.currentTarget,top,animation)
            })
        }

        if(closeButton){
            let cb = this.getCloseButton(closeButton,animation)
            box.appendChild(cb)
        }
        bg.appendChild(box)
        document.body.appendChild(bg)
    }

    isColor = (strColor) => new Option().style.color = strColor !== '';
    
    showImage = (evt,top="50%",animation=false) => {
        const filtered = Array.from(document.querySelectorAll(".any-box_lightbox_images")).filter(e => e.src == evt.src)
        const notFiltered = Array.from(document.querySelectorAll(".any-box_lightbox_images")).filter(e => e.src != evt.src)
        if(animation){
            let animate = new Animation().animate({
                el:filtered[0],
                duration: animation.duration,
                type: animation.type,
                top:top
            })
        }

        filtered[0].parentElement
        filtered[0].style.display = "block"
        filtered[0].classList.add("display_anybox") 
        filtered[0].classList.remove("hide_anybox") 
        notFiltered.forEach(e => {
            e.classList.add("hide_anybox")
            e.classList.remove("display_anybox")
            e.style.display = "none"
        })
        document.getElementById("butonDiv_anybox").setAttribute("btn_id_anybox",parseInt(this.getChosenImage())+1)
        if(document.getElementById("infDiv")){
            document.getElementById("infDiv").innerText = parseInt(this.getChosenImage())+1
        }
        
    }
    activeSlider = (color="#111", information) => {
        let butonDiv = document.createElement("div")
            butonDiv.style.position = "absolute";
            butonDiv.id = "butonDiv_anybox"
            butonDiv.style.bottom =  "-30px";
            butonDiv.style.width = "100%";
            butonDiv.style.display = "flex";
            butonDiv.style.justifyContent =  "space-between";
            butonDiv.style.alignItems = "center"

            let btn_left = document.createElement("button")
            btn_left.style.width = "30px"
            btn_left.style.border = "2px solid" + color
            btn_left.style.borderRadius = "5px"
            btn_left.style.backgroundColor = "transparent"
            let infDiv = ""
            if(information){
                infDiv = document.createElement("div")
                infDiv.style.fontFamily = "Arial, Helvetica, sans-serif"
                infDiv.innerHTML = `<span id="infDiv"></span> of ${this.getSrcs().length} images`
            }

            let btn_right = document.createElement("button")
            btn_right.style.width = "30px"
            btn_right.style.border = "2px solid" + color
            btn_right.style.borderRadius = "5px"
            btn_right.style.backgroundColor = "transparent"
            
            btn_left.innerHTML = this.left
            btn_right.innerHTML = this.right

            btn_right.children[0].style.fill = color
            btn_left.children[0].style.fill = color
            
            btn_left.children[0].style.display = "flex"
            btn_right.children[0].style.display = "flex"
            
            btn_left.addEventListener("click", () => {
                let id = parseInt(document.getElementById("butonDiv_anybox").getAttribute("btn_id_anybox"))-1
                let images = this.getImages()
                if(images[id-1]){
                    document.querySelector(".bg_anybox").click()
                    images[id-1].click()                    
                }
            })

            btn_right.addEventListener("click", () => {
                let id = parseInt(document.getElementById("butonDiv_anybox").getAttribute("btn_id_anybox"))-1
                let images = this.getImages()
                if(images[id+1]){
                    document.querySelector(".bg_anybox").click()
                    images[id+1].click()
                }
            })

            
            
            butonDiv.appendChild(btn_left)
            if(information && typeof infDiv != "string"){
                butonDiv.appendChild(infDiv)
            }
            butonDiv.appendChild(btn_right)
            return butonDiv
    }
    addCloseButton = (btnColor = "black", location="right",animation=false,animationType="opacity",size=25) => {
        let div = document.createElement("div")
        div.style.position = "absolute"
        div.style.top = "-5px"
        location == "right" ? div.style.right =  "-5px" : div.style.left = "-5px"

        let obj = document.createElement("div")
        obj.style.width = size +"px"
        obj.style.height = size + "px"
        obj.innerHTML = this.svg

        obj.children[0].style.fill = btnColor

        obj.addEventListener("click", (evt) => {
            document.body.querySelector(".bg_anybox").style.display = "none"
            if(animation){
                this.minus(animationType)
            }
        })

        div.appendChild(obj)
       
        return div
    }
    minus = (type) => {
        switch(type){
            case "opacity":
                new Animation().opacityMinus(document.querySelector(".bg_anybox").children[0])
                break
            case "top":
                new Animation().topMinus(document.querySelector(".bg_anybox").children[0])
                break
            case "left":
                new Animation().leftMinus(document.querySelector(".bg_anybox").children[0])
                break
        }
    }
    getChosenImage = () => document.querySelector(".display_anybox").getAttribute("anybox_id")
}

export default Lightbox