import ContactView from "./contactView";
import RelationView from "./relationView";
import AddEditAddressModalView from "./addEditAddressModal";
import SnackbarView from "./snackbarView";

class View {
  /**
   * Constructor function for View object.
   */
  constructor() {
    this.contact = new ContactView();
    this.relation = new RelationView();
    this.modal = new AddEditAddressModalView();
    this.snackBar = new SnackbarView();
  }
}

export default View;
