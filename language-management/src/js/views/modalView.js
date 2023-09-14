import Event from "../events/event";

class ModalView {
  constructor() {
    this.openEvent = new Event();
    this.closeEvent = new Event();

    this.modalEl = document.querySelector(".modal");
    this.overlayEl = document.querySelector(".overlay");
    this.addBtnEl = document.querySelector(".features__add");
    this.cancelBtnEl = document.querySelector(".modal__top__btn");

    this.addBtnEl.addEventListener("click", () => {
      this.modalEl.classList.add("modal--active");
      this.overlayEl.classList.add("overlay--active");
      this.openEvent.trigger();
    });

    this.cancelBtnEl.addEventListener("click", () => {
      this.modalEl.classList.remove("modal--active");
      this.overlayEl.classList.remove("overlay--active");
      this.closeEvent.trigger();
    });
  }

  //Handle render logic
  render() {}
}

export default ModalView;
