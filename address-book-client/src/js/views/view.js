import ContactView from './contactView';
import RelationView from './relationView';
import AddEditAddressModal from './addEditAddressModalView';
import SnackbarView from './snackbarView';

class View {
  /**
   * Constructor function for View object.
   */
  constructor() {
    this.contact = new ContactView();
    this.relation = new RelationView();
    this.modal = new AddEditAddressModal();
    this.snackbar = new SnackbarView();
  }
}

export default View;
