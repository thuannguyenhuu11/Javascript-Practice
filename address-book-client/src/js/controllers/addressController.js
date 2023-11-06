import Model from "../models/model";
import View from "../views/view";

class AddressController {
  constructor() {
    this.model = new Model();
    this.view = new View();
  }

  async addContact(contactData) {
    try {
      const newContact = await this.model.contact.addContact(contactData);
      this.view.modal.renderContact(newContact);
      this.view.modal.handleCloseAddModal();
    } catch (error) {
      console.error("Error in adding contact:", error);
    }
  }
}

export default AddressController;
