import ContactService from '../services/contactService';
import Contact from './contact';

class Contacts {
  /**
   * Constructor of Contacts object.
   */
  constructor() {
    this.service = new ContactService();
    this.contactList; // List of contacts.
  }

  /**
   * Initializing the Contacts model.
   */
  init = async () => {
    const data = await this.service.getContactList();
    this.contactList = this.parseData(data);
  };

  /**
   * Parse the data array to array of Contact object.
   * @param {Array} data
   * @returns {Array} array of Contact object.
   */
  parseData = (data) => {
    return data.map((item) => new Contact(item));
  };

  /**
   * Getters and Setters.
   */
  getContactList = () => {
    return this.contactList;
  };

  /**
   * Add contact to contact list and database.
   * @param {Object} data
   */
  addContact = async (data, getRelationById) => {
    console.log(data);
    let contact = new Contact(data);
    await this.service.addContact(contact);
    contact = { ...contact, relation: getRelationById(contact.relationId) };
    this.contactList.push(contact);
    console.log(this.contactList);
    this.contactInfo = contact;
  };

  /**
   * Filter and search contact in contact displaying list.
   * @param {Object} params
   * @returns {Array} result list after filter
   */
  filterList = (params) => {
    const { filter } = params;
    const result = this.contactList.filter((contact) => {
      let isMatchFilter = true;
      // Match with filter
      if (filter.relation !== '0') {
        isMatchFilter = contact.relation.id === filter.relation;
      }
      return isMatchFilter;
    });
    return result;
  };
}

export default Contacts;
