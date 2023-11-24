import Model from './models/model';
import View from './views/view';
import AddressController from './controllers/addressController';

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
    await controller.init();
  }
}
