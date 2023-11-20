import ApiRequest from "../helpers/APIrequest";
import API_BASE_URL from "../constants/url";

class ContactService {
  constructor() {
    this.apiRequest = new ApiRequest(API_BASE_URL, "/contacts");
  }

  /**
   * Get contact list from database.
   * @returns {Array} Contact list
   */
  getContactList = async () => {
    return await this.apiRequest.get(null, "?_expand=relation");
  };

  /**
   * Get contact by Id from database.
   * @param {String} id
   * @returns {Object} Contact object
   */
  getContactById = async id => {
    return await this.apiRequest.get(id, "?_expand=relation");
  };

  /**
   * Add contact to database.
   * @param {Object} contact
   */
  addContact = async contact => {
    await this.apiRequest.post(contact);
  };
}

export default ContactService;
