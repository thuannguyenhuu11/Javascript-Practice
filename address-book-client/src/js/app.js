import Model from "../js/models/model";
import View from "../js/views/view";
import AddressController from "../js/controllers/addressController";

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
