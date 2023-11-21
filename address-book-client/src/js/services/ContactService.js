import { API_BASE_URL } from "../constants/urls";
import { QUERY } from "../constants/message";
import ApiRequest from "../helpers/apiRequest";

class ContactService {
  /**
   * Constructor of Contact Service object.
   */
  constructor() {
    this.apiRequest = new ApiRequest(API_BASE_URL, "/contacts");
  }

  /**
   * Get contact list from database.
   * @returns {Array} Contact list
   */
  getContactList = async () => {
    const data = await this.apiRequest.get(null, QUERY.EXPAND_RELATION);
    return data;
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
