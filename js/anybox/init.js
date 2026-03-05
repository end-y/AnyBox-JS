import Lightbox from "./modules/lightbox.js";
import Alertbox from "./modules/alertbox.js";
import Tooltip from "./modules/tooltip.js";
import Notification from "./modules/notification.js";
class Anybox {
  constructor(type, settings) {
    if (type.toLowerCase() === "lightbox") {
      return new Lightbox(settings);
    } else if (type.toLowerCase() === "alertbox") {
      return new Alertbox(settings);
    } else if (type.toLowerCase() === "tooltip") {
      return new Tooltip(settings);
    } else if (type.toLowerCase() === "notification") {
      return new Notification(settings);
    }
  }
}
export default Anybox;
