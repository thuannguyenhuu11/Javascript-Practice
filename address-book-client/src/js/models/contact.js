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
    } catch (error) {
      console.error("Error in adding contact:", error);
      throw error;
    }
  }

  async getContacts() {
    try {
      this.contacts = await ContactService.getContacts();
      return this.contacts;
    } catch (error) {
      console.error("Error in getting contacts:", error);
      throw error;
    }
  }
}

export default ContactModel;
