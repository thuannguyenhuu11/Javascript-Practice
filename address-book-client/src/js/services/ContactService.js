import axios from "axios";
import API_BASE_URL from "../constants/url";

class ContactService {
  /**
   * Adds a new contact to the server.
   * @param {Object} contactData - The data of the contact to be added.
   * @returns {Object} - The response data from the server after adding the contact.
   * @throws Will throw an error if the operation fails.
   */
  async addContact(contactData) {
    try {
      const response = await axios.post(`${API_BASE_URL}/contacts`, contactData);
      return response.data;
    } catch (error) {
      // Here we are throwing the error to be caught by the calling function
      throw new Error(error.response ? error.response.data : error.message);
    }
  }

  async getContacts() {
    try {
      const response = await axios.get(`${API_BASE_URL}/contacts`);
      return response.data;
    } catch (error) {
      console.error("Error in getting contacts:", error);
      throw error;
    }
  }
}

export default new ContactService();
