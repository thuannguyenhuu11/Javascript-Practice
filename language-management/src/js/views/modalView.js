import Event from "../events/event";
import { MESSAGE } from "../constants/message";

class ModalView {
  constructor() {
    this.openEvent = new Event();
    this.closeEvent = new Event();
    this.formEvent = new Event();

    this.modalEl = document.querySelector(".modal");
    this.overlayEl = document.querySelector(".overlay");
    this.addBtnEl = document.querySelector(".features__add");
    this.cancelBtnEl = document.querySelector(".modal__buttons__cancel");

    // Attach event to the New-button using the handleOpenAddModal method
    this.addBtnEl.addEventListener("click", this.handleOpenAddModal.bind(this));

    // Attach event to the Cancel-button using the handleCloseAddModal method
    this.cancelBtnEl.addEventListener("click", this.handleCloseAddModal.bind(this));

    this.nameInput = this.modalEl.name;
    this.nameError = this.nameInput.nextElementSibling;
    this.phoneInput = this.modalEl.phone;
    this.phoneError = this.phoneInput.nextElementSibling;
    this.emailInput = this.modalEl.email;
    this.emailError = this.emailInput.nextElementSibling;
    this.avatarInput = this.modalEl.avatar;
    this.avatarError = this.avatarInput.nextElementSibling;

    this.modalEl.addEventListener("submit", this.handleSubmit.bind(this));
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

  handleSubmit(e) {
    e.preventDefault();
    this.validateForm();
    this.formEvent.trigger();
  }

  //----- VALIDATE FORM -----//

  validateForm() {
    // Expressions for validation
    const nameRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Get values from the input fields
    const name = this.nameInput.value;
    const phone = this.phoneInput.value;
    const email = this.emailInput.value;

    // Validation checks
    let isValid = true;

    // Clear any previous error messages and styles
    this.modalEl.name.classList.remove("input--warning");
    this.nameError.textContent = "";
    this.modalEl.phone.classList.remove("input--warning");
    this.phoneError.textContent = "";
    this.modalEl.email.classList.remove("input--warning");
    this.emailError.textContent = "";

    if (name.trim() === "") {
      this.modalEl.name.classList.add("input--warning");
      this.nameError.textContent = `${MESSAGE.NAME_REQUIRED}`;
      this.nameError.classList.add("warning-text--active");
      isValid = false;
    } else if (!nameRegex.test(name)) {
      this.modalEl.name.classList.add("input--warning");
      this.nameError.textContent = `${MESSAGE.INVALID_NAME}`;
      this.nameError.classList.add("warning-text--active");
      isValid = false;
    }

    if (phone.trim() === "") {
      this.modalEl.phone.classList.add("input--warning");
      this.phoneError.textContent = `${MESSAGE.PHONE_REQUIRED}`;
      this.phoneError.classList.add("warning-text--active");
      isValid = false;
    } else if (!phoneRegex.test(phone)) {
      this.modalEl.phone.classList.add("input--warning");
      this.phoneError.textContent = `${MESSAGE.INVALID_PHONE}`;
      this.phoneError.classList.add("warning-text--active");
      isValid = false;
    }

    if (email.trim() === "") {
      this.modalEl.email.classList.add("input--warning");
      this.emailError.textContent = `${MESSAGE.EMAIL_REQUIRED}`;
      this.emailError.classList.add("warning-text--active");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      this.modalEl.email.classList.add("input--warning");
      this.emailError.textContent = `${MESSAGE.INVALID_EMAIL}`;
      this.emailError.classList.add("warning-text--active");
      isValid = false;
    }

    if (isValid) {
      this.modalEl.reset();
    }

    return isValid;
  }

  //Handle render logic
  render() {}
}

export default ModalView;
