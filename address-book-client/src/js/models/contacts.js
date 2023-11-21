import ContactService from "../services/contactService";
import Contact from "./contact";

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
  parseData = data => {
    return data.map(item => new Contact(item));
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

  setContactInfo = id => {
    const data = this.contactList.find(contact => contact.id === id);
    this.contactInfo = new Contact(data);
  };

  /**
   * Get contact infomation by ID.
   * @param {String} id
   * @returns {Object} contact information object.
   */
  getContactById = async id => {
    const data = await this.service.getContactById(id);
    this.contactInfo = new Contact(data);
    return this.contactInfo;
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
}

export default Contacts;
