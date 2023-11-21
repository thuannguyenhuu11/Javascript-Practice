import Model from "./models/model";
import View from "./views/view";
import AddressController from "./controllers/addressController";

export class App {
  /**
   * Constructor off App object
   */
  constructor() {
    this.controller = new AddressController(new Model(), new View());
  }

  /**
   * Function for starting the App
   */
  async start() {
    await this.controller.init();
  }
}
