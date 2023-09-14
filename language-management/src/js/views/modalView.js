import Event from "../events/event";

class ModalView {
  constructor() {
    this.addEvent = new Event();
    this.addButton = document.querySelector(".features__add");
    this.modal = document.querySelector(".modal");
    this.overlay = document.querySelector(".overlay");

    this.addButton.addEventListener("click", () => {
      // Add your logic here to handle the button click event.
      // For example, add the 'modal--active' class to the modal.
      this.modal.classList.add("modal--active");
      // Add the 'overlay--active' class to the overlay.
      this.overlay.classList.add("overlay--active");

      // Trigger the add event after the action is done.
      this.addEvent.trigger();
    });
  }
}

export default ModalView;
