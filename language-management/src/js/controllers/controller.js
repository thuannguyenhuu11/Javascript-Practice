class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  /**
   * Initializing the controller
   */
  init() {
    this.initModal();
  }

  //----- MODAL CONTROLLER -----//
  /**
   * Initializing the Relation interface and event handlers
   */
  async initModal() {
    this.view.modal.addEventAddContact(this.addContact);
    this.view.modal.addEventCancelModal();
  }

  addContact = () => {
    this.view.modal.renderModal();
  };
}

export default Controller;
