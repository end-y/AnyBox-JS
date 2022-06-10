import Lightbox from "./modules/lightbox.js"
import Alertbox from "./modules/alertbox.js"
class Anybox{
    constructor(type, settings){
        if(type.toLowerCase() == "lightbox"){
            let lb = new Lightbox(settings)
        }else if(type.toLowerCase() == "alertbox"){
            let al = new Alertbox(settings)
            return al
        }
    }
    
}
export default Anybox