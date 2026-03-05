import Animation from "./animations.js"

let _idCounter = 0

class Base{
    id = "anybox-" + (++_idCounter) + "-" + Date.now()
    globalAnimation = new Animation()
    _resizeHandler = null

    constructor(){
        this._resizeHandler = () => {
            const bg = document.getElementById("bg_" + this.id)
            if(!bg) return
            const box = bg.querySelector(".box_anybox")
            if(box){
                box.style.maxWidth = Math.min(window.innerWidth - 40, 500) + "px"
            }
        }
        window.addEventListener("resize", this._resizeHandler)
    }

    destroy(){
        if(this._resizeHandler){
            window.removeEventListener("resize", this._resizeHandler)
            this._resizeHandler = null
        }
        const bg = document.getElementById("bg_" + this.id)
        if(bg) bg.remove()
    }

    close = (animation = false) => {
        let d = 0
        if(animation){
            d = this.minus(animation.type)
        }
        setTimeout(() => {
            const bg = document.getElementById("bg_" + this.id)
            if(!bg) return
            bg.style.transition = "all .2s ease"
            bg.style.opacity = "0"
            setTimeout(() => {
                bg.style.display = "none"
            }, 220)
        }, d / 1.2)
    }

    getBg = (animation = false) => {
        const bg = document.createElement("div")
        bg.style.width = "100vw"
        bg.style.height = "100vh"
        bg.style.position = "fixed"
        bg.style.top = "0"
        bg.style.left = "0"
        bg.style.display = "none"
        bg.style.zIndex = "9999"
        bg.id = "bg_" + this.id
        bg.className = "bg_anybox"

        bg.addEventListener("click", (evt) => {
            if(evt.target.className === "bg_anybox"){
                this.close(animation)
            }
        })

        document.addEventListener("keydown", (evt) => {
            if(evt.key === "Escape"){
                const bg = document.getElementById("bg_" + this.id)
                if(bg && bg.style.display !== "none"){
                    this.close(animation)
                }
            }
        })

        return bg
    }

    getBox = (top) => {
        const box = document.createElement("div")
        box.classList.add("box_anybox")
        box.style.top = top + "%"
        box.style.left = "50%"
        box.style.backgroundColor = "white"
        box.style.position = "absolute"
        box.style.transition = "all .2s ease"
        box.style.transform = "translate(-50%,-50%)"
        box.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px"
        box.style.borderRadius = "15px"
        box.style.maxWidth = Math.min(window.innerWidth - 40, 500) + "px"
        box.style.width = "90%"
        box.style.willChange = "transform, opacity"
        return box
    }

    getCloseButton = (closeButton, animation = null) => {
        let color = "black"
        let location = "right"
        let size = 25
        if(typeof closeButton === "object"){
            color = closeButton.fill || "black"
            location = closeButton.location || "right"
            size = closeButton.size || 25
        }
        return this.addCloseButton(color, location, animation, animation ? animation.type : "opacity", size)
    }

    addCloseButton = (btnColor = "black", location = "right", animation = false, animationType = "opacity", size = 25) => {
        let div = document.createElement("div")
        div.style.position = "absolute"
        div.style.top = "-5px"
        div.style.cursor = "pointer"
        location === "right" ? div.style.right = "-5px" : div.style.left = "-5px"

        let obj = document.createElement("div")
        obj.style.width = size + "px"
        obj.style.height = size + "px"
        obj.innerHTML = this.svg

        obj.children[0].style.fill = btnColor

        obj.addEventListener("click", () => {
            this.close(animation)
        })

        div.appendChild(obj)
        return div
    }

    isColor = (strColor) => {
        const opt = new Option().style
        opt.color = strColor
        return opt.color !== ""
    }
}

export default Base
