import Model from "../js/models/model";
import View from "../js/views/view";
import AddressController from "../js/controllers/addressController";

export class App {
  /**
   * Constructor off App object
   */
  constructor() {}

  /**
   * Function for starting the App
   */
  async start() {
    const controller = new AddressController(new Model(), new View());
  }
}
