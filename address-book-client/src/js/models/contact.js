import ContactService from "../services/contactService";
​
class ContactModel {
  async addContact(contactData) {
    return await ContactService.addContact(contactData);
  }
}
​
export default ContactModel;