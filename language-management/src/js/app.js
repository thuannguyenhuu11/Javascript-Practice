import View from "./views/view";
import Model from "./models/model";
import Controller from "./controllers/controller";

export class App {
  constructor() {}

  async startApp() {
    const controller = new Controller(new Model(), new View());
    controller.init();
  }
}
