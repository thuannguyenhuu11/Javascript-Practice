import Model from "../models/model";
import View from "../views/view";

class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();

    // Connect the view addEvent to the model add method.
    this.view.openEvent.addListener(() => {
      this.model.add();
    });

    // Connect the view closeEvent to the model close method.
    this.view.closeEvent.addListener(() => {
      this.model.close();
    });
  }
}

export default Controller;
