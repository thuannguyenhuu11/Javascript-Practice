import formValidator from "../helpers/formValidate";

class AddEditAddressModalView {
  /**
   * Constructor of ModalView object.
   */
  constructor() {
    this.modalEl = document.querySelector(".modal");
    this.overlayEl = document.querySelector(".overlay");
    this.cancelModalBtnEl = this.modalEl.querySelectorAll(".modal__top__btn,.modal__buttons__cancel");
  }

  //----- RENDERING -----//

  /**
   * Display the modal for adding and editing a contact.
   * @param {String} contactId
   * @param {Object} contact
   */
  openModal = async (contactId, contact) => {
    this.modalEl.classList.add("modal--active");
    this.overlayEl.classList.add("overlay--active");
    if (contactId) {
      this.modalEl.setAttribute("data-id", contactId);
      this.modalEl.querySelector('input[name="name"]').value = contact.name;
      this.modalEl.querySelector('select[name="relation"]').value = contact.relation.id;
      this.modalEl.querySelector('input[name="phone"]').value = contact.phone;
      this.modalEl.querySelector('input[name="avatar"]').value = contact.avatar;
      this.modalEl.querySelector('input[name="email"]').value = contact.email;
    }
  };

  /**
   * Close adding or editing contact modal
   */
  closeModal = () => {
    this.modalEl.classList.remove("modal--active");
    this.overlayEl.classList.remove("overlay--active");
    this.modalEl.removeAttribute("data-id");
    this.modalEl.reset();
    this.modalEl.querySelectorAll("input").forEach(El => {
      El.classList.remove("input--warning");
      El.nextElementSibling.classList.remove("warning-text--active");
    });
  };

  //----- EVENT HANDLER -----//

  /**
   * Add event listener for form submission.
   * @param {Function} saveContact
   */
  addEventSubmission = saveContact => {
    this.modalEl.addEventListener("submit", async event => {
      event.preventDefault();
      const contact = {
        id: this.modalEl.getAttribute("data-id"),
        name: this.modalEl.name.value,
        relationId: this.modalEl.relation.value,
        phone: this.modalEl.phone.value,
        email: this.modalEl.email.value,
        avatar: this.modalEl.avatar.value,
      };
      if (formValidator(contact)) {
        saveContact(contact);
        this.closeModal();
      }
    });
  };

  /**
   * Add event listener for Cancel button in Adding or Editing modal.
   */
  addEventCancelModal = () => {
    console.log(this.cancelModalBtnEl);
    this.cancelModalBtnEl.forEach(el => el.addEventListener("click", () => this.closeModal()));
  };

  /**
   * Add event listener for overlay element(click outside the modal).
   */
  addEventClickOutside = () => {
    this.overlayEl.addEventListener("click", () => {
      this.closeModal();
      this.closeConfirmModal();
    });
  };
}

export default AddEditAddressModalView;
