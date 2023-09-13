class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  handleOpenModal() {
    this.view.openModal();
  }
}

export default Controller;
