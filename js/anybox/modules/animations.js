function Animation(){
    this.animate = ({el,type, duration,top=0}) => {
        let start = performance.now();
        let v,t
        if(type == "top"){
            t = top.match(/%|px/g)
            v = top.replace(/%|px/g,"");
        }
        requestAnimationFrame(function animate(time) {
          let timeFraction = (time - start) / duration;
          if (timeFraction > 1) timeFraction = 1;
          switch(type){
                case "center":
                    const progressCenter = centerAnimation(timeFraction)
                    el.parentElement.style.transform = `scale(${progressCenter*1}) translate(-50%,-50%)`
                    el.parentElement.style.transformOrigin = "top left"
                    break;
                case "left":
                    const progressLeft = leftAnimation(timeFraction)
                    el.parentElement.style.left = progressLeft * 50 + '%';
                    break
                case "top":
                    const progressTop = topAnimation(timeFraction)
                    el.parentElement.style.top = progressTop *  parseInt(v)+ t;
                    break
                case "opacity":
                    const opaq = opacityAnimation(timeFraction)
                    el.parentElement.style.opacity = opaq;
                    break;
          }
          if (timeFraction < 1) {
            requestAnimationFrame(animate);
          }
        });
    }
    let centerAnimation = (timeFraction) => {
        if(timeFraction.toFixed(2) > "0.05" && timeFraction.toFixed(2) < "0.55"){
            return 1.2
        }

        return 1  
    } 
    let topAnimation = (timeFraction) => {
        if(timeFraction.toFixed(2) > "0.05" && timeFraction.toFixed(2) < "0.35"){
            return 1.2
        }
        return 1 
    }
    
    let leftAnimation = (timeFraction) => {
        if(timeFraction.toFixed(2) > "0.05" && timeFraction.toFixed(2) < "0.35"){
            return 1.2
        }
        return 1
    }
    let opacityAnimation = (timeFraction) => {
        return Math.sqrt(timeFraction,2)
    }
    this.opacityMinus = (el) => {
        el.style.opacity = "0"
    }
    this.topMinus = (el) => {
        el.style.top = "0"
    }
    this.leftMinus = (el) => {
        el.style.left = "0"
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
