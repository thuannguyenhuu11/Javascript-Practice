class Template {
  /**
   * Constructor of Template object.
   */
  constructor() {}

  /**
   * HTML Template for render an Contact object.
   * @param {Object} contact
   * @returns {HTMLElement} Template for rendering contact list row.
   */
  static renderContact = contact => `
          <li class="contact-item row" data-id="${contact.id}">
              <div class="contact-item__avatar col-2">
                  <img src="${contact.avatar}" alt="avatar" />
              </div>
              <div class="contact-item__info col-3">
                  <p class="contact-item__info__name text text--black text--semibold text--lg">${contact.name}</p>
                  <p class="text text--gray text--xs text--medium">${contact.relation.name}</p>
              </div>
              <p class="contact-item__phone col-3 text text--black text--medium text--sm">${contact.phone}</p>
              <p class="text text--black col-4 text--semibold text--sm">${contact.email}</p>
          </li>
      `;

  /**
   * HTML Template for the relation list in modal.
   * @param {Object} relation
   * @returns {HTMLElement} HTML element for displaying relation in relation list in adding, editing form.
   */
  static renderRelation = relation => `
          <option value="${relation.id}">${relation.name}</option>
      `;

  /**
   * HTML Template for the relation list filter's dropdown.
   * @param {Object} relation
   * @returns {HTMLElement} HTML element for displaying relation in filter options.
   */
  static renderRelationDropDown = relation => `  
          <input type="radio" id="${relation.id}" name="filter_option" value="${relation.id}">     
          <label class="relation-dropdown__li text text--gray text--normal text--lg" for="${relation.id}">${relation.name}</label>
      `;
}

export default Template;
