import { v4 as uuidv4 } from 'uuid';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../constants/message';

class AddressController {
  /**
   * Constructor of Controller object
   * @param {Object} model
   * @param {Object} view
   */
  constructor(model, view) {
    this.model = model;
    this.view = view;
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
      this.loadListContacts();
      this.showInfo();
      this.view.contact.addEventAddContact(this.addContact);
      this.view.contact.addDelegateShowInfo(this.showInfo);
    } catch {
      this.displaySnackbar('warning', ERROR_MESSAGE.INIT_CONTACT_LIST);
    }
  };

  /**
   * Load and display the contact list.
   */
  loadListContacts = () => {
    const contacts = this.model.contact.filterList(
      this.view.contact.filterParams
    );
    try {
      this.view.contact.renderContactList(contacts);
    } catch {
      this.displaySnackbar('warning', ERROR_MESSAGE.RENDER_CONTACT_LIST);
    }
  };

  /**
   * Display the contact information by contact's id or by default.
   * @param {String} contactId
   */
  showInfo = async (contactId) => {
    if (contactId) this.model.contact.setContactInfo(contactId);
    const contactInfo = this.model.contact.getContactInfo();
    try {
      this.view.contact.renderContactInfo(
        contactInfo,
        this.confirmDelete,
        this.editContact
      );
    } catch {
      this.displaySnackbar('warning', ERROR_MESSAGE.RENDER_CONTACT_INFO);
    }
  };

  /**
   * Show the confirm modal when delete a contact.
   * @param {String} contactId
   */
  confirmDelete = async (contactId) => {
    let contact;
    try {
      contact = await this.model.contact.getContactById(
        contactId,
        this.model.relation.getRelationById
      );
    } catch {
      this.displaySnackbar('warning', ERROR_MESSAGE.GET_CONTACT_INFO);
    }
    try {
      this.view.modal.openConfirmModal(contact);
    } catch {
      this.displaySnackbar('warning', ERROR_MESSAGE.OPEN_CONFIRM_MODAL);
    }
  };

  /**
   * Show a modal when click add contact.
   */
  addContact = () => {
    try {
      this.view.modal.openModal();
    } catch {
      this.displaySnackbar('warning', ERROR_MESSAGE.OPEN_ADD_MODAL);
    }
  };

  /**
   * Delete a contact by ID action.
   * @param {String} contactId
   */
  deleteContact = async (contactId) => {
    try {
      await this.model.contact.deleteContactById(contactId);
      this.loadListContacts();
      this.showInfo();
      this.displaySnackbar('success', SUCCESS_MESSAGE.DELETE_CONTACT);
    } catch {
      this.displaySnackbar('warning', ERROR_MESSAGE.DELETE_CONTACT);
    }
  };

  /**
   * Show a modal for editing when click edit contact.
   * @param {String} contactId
   */
  editContact = async (contactId) => {
    let contact;
    try {
      contact = await this.model.contact.getContactById(
        contactId,
        this.model.relation.getRelationById
      );
    } catch {
      this.displaySnackbar('warning', ERROR_MESSAGE.GET_CONTACT_INFO);
    }
    try {
      this.view.modal.openModal(contactId, contact);
    } catch {
      this.displaySnackbar('warning', ERROR_MESSAGE.OPEN_EDIT_MODAL);
    }
  };

  /**
   * Add or edit a contact and display the new contact list.
   * @param {Object} contact
   */
  saveContact = async (contact) => {
    if (!contact.id) {
      try {
        const newContact = this.model.contact.createContact(contact);
        await this.model.contact.addContact(
          newContact,
          this.model.relation.getRelationById
        );
        this.displaySnackbar('success', SUCCESS_MESSAGE.ADD_CONTACT);
      } catch {
        this.displaySnackbar('warning', ERROR_MESSAGE.ADD_CONTACT);
      }
    } else {
      try {
        const newContact = this.model.contact.createContact(contact);
        await this.model.contact.editContact(
          newContact,
          this.model.relation.getRelationById
        );
        this.displaySnackbar('success', SUCCESS_MESSAGE.EDIT_CONTACT);
      } catch {
        this.displaySnackbar('warning', ERROR_MESSAGE.EDIT_CONTACT);
      }
    }
    this.loadListContacts();
    this.showInfo(contact.id);
  };

  //----- RELATION CONTROLLER -----//

  /**
   * Initializing the relation lists.
   */
  initRelations = async () => {
    try {
      await this.model.relation.init();
    } catch {
      this.displaySnackbar('warning', ERROR_MESSAGE.INIT_RELATION_LIST);
    }
    const relations = this.model.relation.getRelations();
    this.view.relation.renderRelationList(relations);
  };

  //----- MODAL CONTROLLER -----//

  /**
   * Initializing the modals.
   */
  initModal = async () => {
    this.view.modal.addEventSubmission(this.saveContact);
    this.view.modal.addEventDeleteConfirmed(this.deleteContact);
    this.view.modal.addEventCancelModal();
    this.view.modal.addEventCancelConfirmed();
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
