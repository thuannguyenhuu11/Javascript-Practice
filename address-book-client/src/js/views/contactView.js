import Template from '../templates/template';
class ContactView {
  /**
   * Constructor of ContactView object
   */
  constructor() {
    this.contactListEl = document.querySelector('.contacts__list');
    this.infoEl = document.querySelector('.info');
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

  /**
   * Render contact infomation.
   * @param {Object} contactInfo
   */
  renderContactInfo = (contactInfo) => {
    if (contactInfo) {
      this.infoEl.innerHTML = Template.renderContactInfo(contactInfo);
    } else {
      this.infoEl.innerHTML = '';
    }
  };

  //----- EVENT HANDLER -----//
  /**
   * Add delegate lisnter showing contact information actions to each contact element.
   * @param {Function} showInfo
   */
  addDelegateShowInfo = (showInfo) => {
    this.contactListEl.addEventListener('click', (event) => {
      this.contactListEl
        .querySelector(this.contactEl + '.contact-item--active')
        ?.classList.remove('contact-item--active');
      const el = event.target.closest(this.contactEl);
      if (el) {
        el.classList.add('contact-item--active');
        const contactId = el.getAttribute('data-id');
        showInfo(contactId);
      }
    });
  };

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
