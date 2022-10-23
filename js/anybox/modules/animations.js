function Animation(){
    this.ca;
    this.ta;
    this.la;
    this.oa;
    this.animate = ({el,type, duration,top=50}) => {
        switch(type){
            case "center":
                centerAnimation(el.parentElement,top,duration)
                break;
            case "left":
                leftAnimation(el.parentElement,duration)
                break
            case "top":
                topAnimation(el.parentElement,top,duration)
                break
            case "opacity":
                opacityAnimation(el.parentElement,duration,top)
                break;
        }
    }
    let centerAnimation = (el,top=50,duration=1000) => {
        el.style.top = top+"%"
        el.style.transformOrigin = "top left"
        this.ca = el.animate([
            {transform:`scale(0) translate(-50%,-50%)`},
            {transform: `scale(1.1) translate(-50%,-50%)`},
            {transform: `scale(1) translate(-50%,-50%)`},
            {transform: `scale(1) translate(-50%,-50%)`},
            {transform: `scale(1) translate(-50%,-50%)`},
            {transform: `scale(1) translate(-50%,-50%)`},
        ],
        {
            duration,
            fill:"forwards"
        }) 
    } 
    let topAnimation = (el,top=50,duration=1000) => {
        el.style.transformOrigin = "center"
        this.ta = el.animate([
            {top:"0%"},
            {top: top+5+"%"},
            {top: top+"%"},
            {top: top+"%"},
            {top: top+"%"},
            {top: top+"%"},
        ],
        {
            duration,
            fill:"forwards"
        })
    }
    
    let leftAnimation = (el,duration=1000) => {
        this.la = el.animate([
            {left:"0%"},
            {left:"55%"},
            {left:"50%"},
            {left:"50%"},
            {left:"50%"},
            {left:"50%"},
        ],
        {
            duration,
            fill:"forwards"
        })
    }
    let opacityAnimation = (el,duration=1000, top=50) => {
        el.style.top = top+"%"
        this.oa = el.animate([
            {opacity:"0"},
            {opacity:"1"}
        ],
        {
            duration,
            fill:"forwards"
        })
    }
    this.getAnimation = (type) => {
        let an = {
            "center": this.ca,
            "left": this.la,
            "top":this.ta,
            "opacity": this.oa
        }
        return an[type];
    }
    this.opacityMinus = (el) => {
        el.reverse()
        // el.style.opacity = "0"
    }
    this.topMinus = (el) => {
        el.reverse()
        // el.style.top = "0%"
    }
    this.leftMinus = (el) => {
        el.reverse()
        // el.style.left = "0%"
    }
    
    this.statusAnimation = (success, color="#000", dash="80") => {
        let svgDiv = document.createElement("div")
        svgDiv.style.position = "relative"
        svgDiv.style.width = "75px"
        svgDiv.style.height = "75px"
        svgDiv.style.margin = "auto"
        svgDiv.style.marginBottom= "30px"
        svgDiv.classList.add("svgDiv")

        let svg = document.createElement("div")
        svg.style.border = "2px dashed " + color
        svg.style.borderRadius = "50%"
        svg.style.width = "70px"
        svg.style.height = "70px"
        svgDiv.innerHTML = success;
        let anim1 = svg.animate([
            // keyframes
            { transform: 'scale(0)' },
            { transform: 'scale(1.1) ' },
            { transform: 'scale(1.3) ' },
            { transform: 'scale(1.3) ' },
            { transform: 'scale(1.3) ' },
            { transform: 'scale(1.1) ' },
            { transform: 'scale(1.0) ' },
          ], {
            // timing options
            duration: 600,
            easing:"ease-in",
          })
        svgDiv.querySelector("svg").querySelector("path").style.strokeDasharray = dash
        svgDiv.querySelector("svg").querySelector("path").style.strokeDashoffset = dash
        svgDiv.querySelector("svg").querySelector("path").style.fill = "transparent"
        svgDiv.querySelector("svg").setAttribute("stroke", color)
        let svgAnim = svgDiv.querySelector("svg").querySelector("path").animate([
            // keyframes
            { strokeDashoffset: 0 },
            ], {
            // timing options
            duration: 1250,
            fill:"forwards"
        })
        svgAnim.onfinish = () => {
            svgDiv.querySelector("svg").querySelector("path").animate([
                // keyframes
                { fill: color },
                ], {
                // timing options
                duration: 300,
                fill:"forwards"
            })
        }
        anim1.onfinish = () => {
            svg.animate([
                // keyframes
                { transform: 'rotate(0deg) ' },
                { transform: 'rotate(360deg) ' },
              ], {
                // timing options
                duration: 3000,
                iterations: Infinity
              })
                
        }
        svgDiv.appendChild(svg)
        return svgDiv
    } 
}

export default Animation
