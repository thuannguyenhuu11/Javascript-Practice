import Model from "../models/model";
import View from "../views/view";

class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
  }
}

export default Controller;
