import Model from "../models/model";
import View from "../views/view";

class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();

    // Connect the view's addEvent to the model's add method.
    this.view.addEvent.addListener(() => {
      this.model.add();
    });
  }
}

export default Controller;
