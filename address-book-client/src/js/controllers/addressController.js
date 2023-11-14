import Model from "../models/model";
import View from "../views/view";
import { ERROR_MESSAGE } from "../constants/message";

class AddressController {
  constructor() {
    this.model = new Model();
    this.view = new View();

    // Event bindings
    this.view.modal.addBtnEl.addEventListener("click", () => this.view.modal.handleOpenAddModal());
    this.view.modal.cancelBtnEl.addEventListener("click", () => this.view.modal.handleCloseAddModal());
    this.view.modal.modalEl.addEventListener("submit", this.addContact.bind(this));
  }

  async addContact(event) {
    event.preventDefault();
    const contactData = new FormData(event.target);
    try {
      const newContact = await this.model.contact.addContact(contactData);
      this.view.contact.renderContact(newContact);
      this.view.modal.handleCloseAddModal();
    } catch (error) {
      this.displaySnackbar("warning", ERROR_MESSAGE.ADD_CONTACT);
    }
  }

  //----- SNACKBAR CONTROLLER -----//
  /**
   * Display the snackbar on top of the window.
   * @param {String} type
   * @param {String} message
   */
  displaySnackbar = (type, message) => {
    this.view.snackbar.showSnackbar(type, message);
  };
}

export default AddressController;
