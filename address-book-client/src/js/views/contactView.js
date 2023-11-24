import Template from '../templates/template';
class ContactView {
  /**
   * Constructor of ContactView object
   */
  constructor() {
    this.contactListEl = document.querySelector('.contacts__list');
    this.addBtnEl = document.querySelector('.features__add');
  }

  filterParams = {
    filter: {
      relation: '0',
    },
  };

  //----- RENDERING -----//

  /**
   * Display the contact list.
   * @param {Array} contacts
   */
  renderContactList = (contacts) => {
    this.contactListEl.innerHTML = '';
    contacts.forEach((contact) => {
      this.renderContact(contact);
    });
  };

  /**
   * Render a contact in contact list.
   * @param {Object} contact
   */
  renderContact = (contact) => {
    const contactTemplate = Template.renderContact(contact);
    this.contactListEl.innerHTML += contactTemplate;
  };

  //----- EVENT HANDLER -----//

  /**
   * Add event listener adding a contact action to the add contact button.
   * @param {Function} addContact
   */
  addEventAddContact = (addContact) => {
    this.addBtnEl.addEventListener('click', () => {
      addContact();
    });
  };
}

export default ContactView;
