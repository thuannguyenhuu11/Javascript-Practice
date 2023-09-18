import Event from "../events/event";

class ModalView {
  constructor() {
    this.openEvent = new Event();
    this.closeEvent = new Event();

    this.modalEl = document.querySelector(".modal");
    this.overlayEl = document.querySelector(".overlay");
    this.addBtnEl = document.querySelector(".features__add");
    this.cancelBtnEl = document.querySelector(".modal__buttons__cancel");

    //Handle open ADD-modal
    this.handleOpenAddModal = () => {
      this.modalEl.classList.add("modal--active");
      this.overlayEl.classList.add("overlay--active");
      this.openEvent.trigger();
    };

    this.addBtnEl.addEventListener("click", this.handleOpenAddModal);

    //Handle close ADD-modal
    this.handleCloseAddModal = () => {
      this.modalEl.classList.remove("modal--active");
      this.overlayEl.classList.remove("overlay--active");
      this.closeEvent.trigger();
    };

    this.cancelBtnEl.addEventListener("click", this.handleCloseAddModal);
  }

  //Handle render logic
  render() {}
}

export default ModalView;
