import { ERROR_MESSAGE } from "../constants/message";

class AddressController {
  constructor() {
    this.model = new Model();
    this.view = new View();
  }

  /**
   * Initializing the controller
   */
  init = async () => {
    await this.initRelations();
    await this.initContacts();
    this.initModal();
  };

  //----- CONTACT CONTROLLER -----//

  /**
   * Initializing the contact list and contact information.
   */
  initContacts = async () => {
    try {
      await this.model.contact.init();
    } catch {
      this.displaySnackbar("warning", ERROR_MESSAGE.INIT_CONTACT_LIST);
    }
    this.loadListContacts();
    this.showInfo();
    this.view.contact.addEventAddContact(this.addContact);
  };

  /**
   * Load and display the contact list.
   */
  loadListContacts = () => {
    const contacts = this.model.contact.filterList(this.view.contact.filterParams);
    try {
      this.view.contact.renderContactList(contacts);
    } catch {
      this.displaySnackbar("warning", ERROR_MESSAGE.RENDER_CONTACT_LIST);
    }
  };

  /**
   * Show a modal when click add contact.
   */
  addContact = () => {
    try {
      this.view.modal.openModal();
    } catch {
      this.displaySnackbar("warning", ERROR_MESSAGE.OPEN_ADD_MODAL);
    }
  };

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
