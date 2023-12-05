import ContactService from '../services/contactService';
import Contact from './contact';
import { v4 as uuidv4 } from 'uuid';

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
