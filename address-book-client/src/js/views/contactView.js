import Template from "../templates/template";

/**
 * Constructor of ContactView object
 */
class ContactView {
  constructor() {
    this.contactListEl = document.querySelector(".contacts__list");
  }

  //----- RENDERING -----//

  /**
   * Display the contact list.
   * @param {Array} contacts
   */
  renderContactList = contacts => {
    this.contactListEl.innerHTML = "";
    contacts.forEach(contact => {
      this.renderContact(contact);
    });
  };

  /**
   * Render a contact in contact list.
   * @param {Object} contact
   */
  renderContact = contact => {
    const contactTemplate = Template.renderContact(contact);
    this.contactListEl.innerHTML += contactTemplate;
  };
}

export default ContactView;
