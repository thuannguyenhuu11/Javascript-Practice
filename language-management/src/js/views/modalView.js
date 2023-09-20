import Event from "../events/event";
import { MESSAGE } from "../constants/message";

class ModalView {
  constructor() {
    this.openEvent = new Event();
    this.closeEvent = new Event();

    this.modalEl = document.querySelector(".modal");
    this.overlayEl = document.querySelector(".overlay");
    this.addBtnEl = document.querySelector(".features__add");
    this.cancelBtnEl = document.querySelector(".modal__buttons__cancel");

    this.nameInput = this.modalEl.name;
    this.nameError = this.nameInput.nextElementSibling;
    this.phoneInput = this.modalEl.phone;
    this.phoneError = this.phoneInput.nextElementSibling;
    this.emailInput = this.modalEl.email;
    this.emailError = this.emailInput.nextElementSibling;
    this.avatarInput = this.modalEl.avatar;
    this.avatarError = this.avatarInput.nextElementSibling;

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

  //----- VALIDATE FORM -----//
  validateForm(name, phone, email) {
    // Expressions for validation
    const nameRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation checks
    const isNameValid = nameRegex.test(name);
    const isPhoneValid = phoneRegex.test(phone);
    const isEmailValid = emailRegex.test(email);

    if (name.trim() === "") {
      this.modalEl.name.classList.add("input--warning");
      this.nameError.textContent = `${MESSAGE.NAME_REQUIRED}`;
      this.nameError.classList.add("warning-text--active");
      return false;
    } else if (!isNameValid) {
      this.modalEl.name.classList.add("input--warning");
      this.nameError.textContent = `${MESSAGE.INVALID_NAME}`;
      this.nameError.classList.add("warning-text--active");
      return false;
    }

    if (phone.trim() === "") {
      this.modalEl.phone.classList.add("input--warning");
      this.phoneError.textContent = `${MESSAGE.PHONE_REQUIRED}`;
      this.phoneError.classList.add("warning-text--active");
      return false;
    } else if (!isPhoneValid) {
      this.modalEl.phone.classList.add("input--warning");
      this.phoneError.textContent = `${MESSAGE.INVALID_PHONE}`;
      this.phoneError.classList.add("warning-text--active");
      return false;
    }

    if (email.trim() === "") {
      this.modalEl.email.classList.add("input--warning");
      this.emailError.textContent = `${MESSAGE.EMAIL_REQUIRED}`;
      this.emailError.classList.add("warning-text--active");
      return false;
    } else if (!isEmailValid) {
      this.modalEl.email.classList.add("input--warning");
      this.emailError.textContent = `${MESSAGE.INVALID_EMAIL}`;
      this.emailError.classList.add("warning-text--active");
      return false;
    }

    this.modalEl.reset();
    return true;
  }
}

export default ModalView;
