class ModalView {
  constructor() {
    this.modalEl = document.querySelector(".modal");
    this.overlayEl = document.querySelector(".overlay");
    this.addBtnEl = document.querySelector(".features__add");
    this.cancelBtnEl = document.querySelector(".modal__top__btn");
  }

  //----- RENDERING -----//
  renderModal() {
    this.modalEl.classList.add("modal--active");
    this.overlayEl.classList.add("overlay--active");
  }

  //----- EVENT HANDLER -----//
  addEventAddContact = addContact => {
    this.addBtnEl.addEventListener("click", () => {
      addContact();
    });
  };

  addEventCancelModal = () => {
    this.cancelBtnEl.addEventListener("click", () => {
      this.modalEl.classList.remove("modal--active");
      this.overlayEl.classList.remove("overlay--active");
    });
  };
}

export default ModalView;
