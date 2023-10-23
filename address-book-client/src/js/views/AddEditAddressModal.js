import Event from "../events/event";
import { MESSAGE, REGEX } from "../constants/message";

class AddEditAddressModal {
  constructor() {
    this.openEvent = new Event();
    this.closeEvent = new Event();

    this.modalEl = document.querySelector(".modal");
    this.overlayEl = document.querySelector(".overlay");
    this.addBtnEl = document.querySelector(".features__add");
    this.cancelBtnEl = document.querySelector(".modal__buttons__cancel");

    this.nameInput = this.modalEl.name;
    this.nameError = this.nameInput.nextElementSibling;
    this.relationInput = this.modalEl.relation;
    this.relationError = this.relationInput.nextElementSibling;
    this.phoneInput = this.modalEl.phone;
    this.phoneError = this.phoneInput.nextElementSibling;
    this.emailInput = this.modalEl.email;
    this.emailError = this.emailInput.nextElementSibling;
    this.avatarInput = this.modalEl.avatar;
    this.avatarError = this.avatarInput.nextElementSibling;

    // Object to store field validation data
    this.fields = [
      { name: "name", regex: REGEX.NAME, errorElement: this.nameError, requiredMessage: MESSAGE.NAME_REQUIRED, invalidMessage: MESSAGE.INVALID_NAME },
      { name: "relation", regex: REGEX.NAME, errorElement: this.relationError, requiredMessage: MESSAGE.RELATION_REQUIRED, invalidMessage: MESSAGE.INVALID_RELATION },
      { name: "phone", regex: REGEX.PHONE, errorElement: this.phoneError, requiredMessage: MESSAGE.PHONE_REQUIRED, invalidMessage: MESSAGE.INVALID_PHONE },
      { name: "email", regex: REGEX.EMAIL, errorElement: this.emailError, requiredMessage: MESSAGE.EMAIL_REQUIRED, invalidMessage: MESSAGE.INVALID_EMAIL },
      { name: "avatar", regex: REGEX.AVATAR, errorElement: this.avatarError, requiredMessage: MESSAGE.AVATAR_REQUIRED, invalidMessage: MESSAGE.INVALID_AVATAR },
    ];

    // Attach event to the New-button using the handleOpenAddModal method
    this.addBtnEl.addEventListener("click", this.handleOpenAddModal.bind(this));

    // Attach event to the Cancel-button using the handleCloseAddModal method
    this.cancelBtnEl.addEventListener("click", this.handleCloseAddModal.bind(this));

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

    // Clear any previous error messages and styles
    this.resetModal();
    this.modalEl.reset();

    this.closeEvent.trigger();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.validateForm();
  }

  //----- VALIDATE FORM -----//

  validateForm() {
    let isValid = true;

    this.resetModal();

    // Loop through each field to perform validation
    for (const field of this.fields) {
      const inputEl = this.modalEl[field.name];
      const value = inputEl.value;

      const isValidField = field.regex.test(value);

      // Validate field and show error message if needed
      if (value.trim() === "") {
        this.showErrorMessage(inputEl, field.errorElement, field.requiredMessage);
        isValid = false;
      } else if (!isValidField) {
        this.showErrorMessage(inputEl, field.errorElement, field.invalidMessage);
        isValid = false;
      } else {
        this.clearErrorMessage(inputEl, field.errorElement);
      }
    }

    return isValid;
  }
  // Method to show error message and apply warning styling
  showErrorMessage(inputElement, errorElement, errorMessage) {
    inputElement.classList.add("input--warning");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("warning-text--active");
  }

  // Method to clear error message and remove warning styling
  clearErrorMessage(inputElement, errorElement) {
    inputElement.classList.remove("input--warning");
    errorElement.textContent = "";
    errorElement.classList.remove("warning-text--active");
  }

  // Clear any previous error messages and styles
  resetModal() {
    for (const field of this.fields) {
      const inputElement = this.modalEl[field.name];
      const errorElement = field.errorElement;

      inputElement.classList.remove("input--warning");
      errorElement.textContent = "";
      errorElement.classList.remove("warning-text--active");
    }
  }
}

export default AddEditAddressModal;
