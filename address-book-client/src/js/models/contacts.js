import ContactService from '../services/contactService';
import Contact from './contact';

class Contacts {
  /**
   * Constructor of Contacts object.
   */
  constructor() {
    this.service = new ContactService();
    this.contactList; // List of contacts.
    this.contactInfo; // Contact information for displaying.
  }

  /**
   * Initializing the Contacts model.
   */
  init = async () => {
    const data = await this.service.getContactList();
    this.contactList = this.parseData(data);
    this.contactInfo = this.contactList[0];
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

  getContactInfo = () => {
    return this.contactInfo;
  };

  setContactInfo = (id) => {
    const data = this.contactList.find((contact) => contact.id === id);
    this.contactInfo = new Contact(data);
  };

  /**
   * Get contact infomation by ID.
   * @param {String} id
   * @returns {Object} contact information object.
   */
  getContactById = async (id) => {
    const data = await this.service.getContactById(id);
    this.contactInfo = new Contact(data);
    return this.contactInfo;
  };

  /**
   * Create a new contact object.
   * @param {Object} data
   * @returns {Contact} new contact object.
   */
  createContact = (data) => {
    const newContact = new Contact({
      id: uuidv4(),
      name: data.name,
      relationId: data.relationId,
      phone: data.phone,
      email: data.email,
      avatar: data.avatar,
    });
    return newContact;
  };

  /**
   * Add contact to contact list and database.
   * @param {Object} data
   */
  addContact = async (data, getRelationById) => {
    let contact = new Contact(data);
    await this.service.addContact(contact);
    contact = { ...contact, relation: getRelationById(contact.relationId) };
    this.contactList.push(contact);
    this.contactInfo = contact;
  };

  /**
   * Update contact in contact list and database.
   * @param {Object} data
   */
  editContact = async (data, getRelationById) => {
    let contact = new Contact(data);
    await this.service.editContact(contact);
    contact = { ...contact, relation: getRelationById(contact.relationId) };
    this.contactList = this.contactList.map((item) => {
      if (item.id === contact.id) {
        this.contactInfo = contact;
        return contact;
      }
      return item;
    });
  };

  /**
   * Delete contact from contact list and database.
   * @param {String} id
   */
  deleteContactById = async (id) => {
    await this.service.deleteContactById(id);
    this.contactList = this.contactList.filter((item) => item.id !== id);
    this.contactInfo = this.contactList[0];
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
    this.contactInfo = result[0];
    return result;
  };
}

export default Contacts;
