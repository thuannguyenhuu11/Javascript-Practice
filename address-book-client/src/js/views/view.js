import ContactView from "./contactView";
import AddEditAddressModal from "./AddEditAddressModal";

class View {
  /**
   * Constructor function for View object.
   */
  constructor() {
    this.contact = new ContactView();
    this.modal = new AddEditAddressModal();
  }
}

export default View;
