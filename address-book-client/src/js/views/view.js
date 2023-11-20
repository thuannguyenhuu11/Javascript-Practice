import ContactView from "./contactView";
import AddEditAddressModal from "./AddEditAddressModal";
import SnackbarView from "./snackbarView";

class View {
  /**
   * Constructor function for View object.
   */
  constructor() {
    this.contact = new ContactView();
    this.modal = new AddEditAddressModal();
    this.snackBar = new SnackbarView();
  }
}

export default View;
