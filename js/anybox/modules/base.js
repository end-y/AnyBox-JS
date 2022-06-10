class Base{
    id = Date.now()
    constructor(){

    }
    getBg = (animation = false) => {
        const bg = document.createElement("div")
        bg.style.width = "100%"
        bg.style.height = "100%"
        bg.style.position = "absolute"
        bg.style.top = "0"
        bg.style.left = "0"
        bg.style.display = "none"
        bg.id = "bg_anybox-" + this.id
        bg.className = "bg_anybox"
        bg.addEventListener("click", (evt) => {
            if(evt.target.className == "bg_anybox"){
                document.getElementById("bg_anybox-"+this.id).style.display = "none"
                if(animation){
                    this.minus(animation.animationType)
                }
            }
        })
        return bg
    }
    getBox = (top) => {
        const box = document.createElement("div");
        box.classList.add("box_anybox")
        box.style.top = top
        box.style.left = "50%"
        box.style.backgroundColor = "white"
        box.style.position = "absolute"
        box.style.transition = "all .2s ease"
        box.style.transform = "translate(-50%,-50%)"
        box.style.boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px";
        box.style.borderRadius = "15px"
        
        return box
    }
    getCloseButton = (closeButton,animation = null) => {
        let color = ""
        let location = ""
        let size = 25;
        if(typeof closeButton == "object"){
            color = closeButton.fill
            location = closeButton.location
            size = closeButton.size
        }
        let cb = ""
        if(animation){
            cb = this.addCloseButton(color, location, animation, animation.type,size)
        }else{
            cb = this.addCloseButton(color, location, false, null,size)
        }
        return cb
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
        console.log(this.id)
        obj.addEventListener("click", (evt) => {
            document.getElementById("bg_anybox-"+this.id).style.display = "none"
            if(animation){
                this.minus(animationType)
            }
        })

        div.appendChild(obj)
       
        return div
    }
    isColor = (strColor) => new Option().style.color = strColor !== '';
}

export default Base