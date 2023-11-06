import contactService from "../services/ContactService";
​
class ContactModel {
  async addContact(contactData) {
    return await contactService.addContact(contactData);
  }
}
​
export default ContactModel;