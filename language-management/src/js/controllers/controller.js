import Model from "../models/model";
import View from "../views/view";

class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();

    // Connect the view addEvent to the model add method.
    this.view.openEvent.addListener(() => {
      this.model.open();
    });

    // Connect the view closeEvent to the model close method.
    this.view.closeEvent.addListener(() => {
      this.model.close();
    });

    this.view.formEvent.addListener(() => {
      this.model.handle();
    });
  }

  run() {
    this.view.handleSubmit();
  }
}

export default Controller;
