import Contacts from "./contact";
import Relations from "./relations";

class Model {
  constructor() {
    this.contact = new Contacts();
    this.relation = new Relations();
  }
}

export default Model;
