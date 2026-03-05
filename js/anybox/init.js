import Lightbox from "./modules/lightbox.js"
import Alertbox from "./modules/alertbox.js"
class Anybox{
    constructor(type, settings){
        if(type.toLowerCase() === "lightbox"){
            return new Lightbox(settings)
        }else if(type.toLowerCase() === "alertbox"){
            return new Alertbox(settings)
        }
    }
}
export default Anybox
