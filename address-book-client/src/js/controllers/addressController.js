import Model from "../models/model";
import View from "../views/view";
import axios from "axios";
import API_BASE_URL from "../constants/url";

class AddressController {
  constructor() {
    this.model = new Model();
    this.view = new View();
  }

  addContact(contactData) {
    axios
      .post(`${API_BASE_URL}/contacts`, contactData)
      .then(response => {
        // Handle response from API
        console.log(response.data);

        // Render the new contact in the list
        this.view.modal.renderContact(response.data);

        // Close the modal after adding the contact
        this.view.modal.handleCloseAddModal();
      })
      .catch(error => {
        // Handle error (if any)
        console.error(error);
      });
  }
}

export default AddressController;
