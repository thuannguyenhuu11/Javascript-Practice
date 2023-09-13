class ModalView {
  constructor(controller) {
    this.modalEl = document.querySelector(".modal");
    this.overlayEl = document.querySelector(".overlay");
    this.addButton = document.querySelector(".features__add");

    // Handle event open modal.
    this.addButton.addEventListener("click", () => {
      controller.handleOpenModal();
    });
  }

  openModal() {
    this.modalEl.classList.add("modal--active");
    this.overlayEl.classList.add("overlay--active");
  }
}

export default ModalView;
