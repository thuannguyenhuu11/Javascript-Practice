import ContactService from "../services/contactService";
class ContactModel {
  constructor() {
    this.contacts = [];
  }

  async addContact(contactData) {
    try {
      const newContact = await ContactService.addContact(contactData);
      this.contacts.push(newContact);
      return newContact;
    } catch {
      this.displaySnackbar("warning", ERROR_MESSAGE.ADD_CONTACT);
    }
  }

  async getContacts() {
    try {
      this.contacts = await ContactService.getContacts();
      return this.contacts;
    } catch {
      this.displaySnackbar("warning", ERROR_MESSAGE.GET_CONTACT);
    }
  }
}

export default ContactModel;
