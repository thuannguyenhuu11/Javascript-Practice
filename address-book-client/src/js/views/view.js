import ContactView from "./contactView";
<<<<<<< HEAD
import RelationView from "./relationView";
import AddEditAddressModalView from "./addEditAddressModal";
import SnackbarView from "./snackbarView";
=======
import AddEditAddressModal from "./AddEditAddressModal";
>>>>>>> parent of 69b1f57 (refactor code and add relation select)

class View {
  /**
   * Constructor function for View object.
   */
  constructor() {
    this.contact = new ContactView();
<<<<<<< HEAD
    this.relation = new RelationView();
    this.modal = new AddEditAddressModalView();
    this.snackBar = new SnackbarView();
=======
    this.modal = new AddEditAddressModal();
>>>>>>> parent of 69b1f57 (refactor code and add relation select)
  }
}

export default View;
