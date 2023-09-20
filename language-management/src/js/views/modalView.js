import Event from "../events/event";

class ModalView {
  constructor() {
    this.openEvent = new Event();
    this.closeEvent = new Event();

    this.modalEl = document.querySelector(".modal");
    this.overlayEl = document.querySelector(".overlay");
    this.addBtnEl = document.querySelector(".features__add");
    this.cancelBtnEl = document.querySelector(".modal__buttons__cancel");

    // Attach event to the New-button using the handleOpenAddModal method
    this.addBtnEl.addEventListener("click", this.handleOpenAddModal.bind(this));

    // Attach event to the Cancel-button using the handleCloseAddModal method
    this.cancelBtnEl.addEventListener("click", this.handleCloseAddModal.bind(this));
  }

  // Handle open ADD-modal
  handleOpenAddModal() {
    this.modalEl.classList.add("modal--active");
    this.overlayEl.classList.add("overlay--active");
    this.openEvent.trigger();
  }

  // Handle close ADD-modal
  handleCloseAddModal() {
    this.modalEl.classList.remove("modal--active");
    this.overlayEl.classList.remove("overlay--active");
    this.closeEvent.trigger();
  }

  //Handle render logic
  render() {}
}

export default ModalView;
