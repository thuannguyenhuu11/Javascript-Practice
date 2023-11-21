<<<<<<< HEAD
import { v4 as uuidv4 } from "uuid";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "../constants/message";
class AddressController {
  /**
   * Constructor of Controller object
   * @param {Object} model
   * @param {Object} view
   */
  constructor(model, view) {
    this.model = model;
    this.view = view;
=======
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
>>>>>>> parent of 69b1f57 (refactor code and add relation select)
  }

  async addContact(event) {
    event.preventDefault();
    const contactData = new FormData(event.target);
    try {
      const newContact = await this.model.contact.addContact(contactData);
      this.view.contact.renderContact(newContact);
      this.view.modal.handleCloseAddModal();
    } catch {
      this.displaySnackbar("warning", ERROR_MESSAGE.ADD_CONTACT);
    }
<<<<<<< HEAD
    this.loadListContacts();
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
=======
  }
>>>>>>> parent of 69b1f57 (refactor code and add relation select)

  /**
   * Add or edit a contact and display the new contact list.
   * @param {Object} contact
   */
  saveContact = async contact => {
    if (!contact.id) {
      contact = {
        id: uuidv4(),
        name: contact.name,
        relationId: contact.relationId,
        phone: contact.phone,
        email: contact.email,
        avatar: contact.avatar,
      };
      try {
        await this.model.contact.addContact(contact, this.model.relation.getRelationById);
        this.displaySnackbar("success", SUCCESS_MESSAGE.ADD_CONTACT);
      } catch {
        this.displaySnackbar("warning", ERROR_MESSAGE.ADD_CONTACT);
      }
    }
    this.loadListContacts();
  };

  //----- RELATION CONTROLLER -----//

  /**
   * Initializing the relation lists.
   */
  initRelations = async () => {
    try {
      await this.model.relation.init();
    } catch {
      this.displaySnackbar("warning", ERROR_MESSAGE.INIT_RELATION_LIST);
    }
    const relations = this.model.relation.getRelations();
    this.view.relation.renderRelationList(relations);
    this.view.relation.renderRelationDropdownList(relations);
  };

  //----- MODAL CONTROLLER -----//

  /**
   * Initializing the modals.
   */
  initModal = async () => {
    this.view.modal.addEventSubmission(this.saveContact);
    this.view.modal.addEventCancelModal();
    this.view.modal.addEventClickOutside();
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
