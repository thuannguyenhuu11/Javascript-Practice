import AddEditAddressModal from "./AddEditAddressModal";

class View {
  /**
   * Constructor function for View object.
   */
  constructor(controller) {
    this.modal = new AddEditAddressModal(controller);
  }
}

export default View;
