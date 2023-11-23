import Template from '../templates/template';

class RelationView {
  /**
   * Constructor of RelationView object
   */
  constructor() {
    this.relationListEl = document.querySelector('.relation-list');
    this.relationDropDownEl = document.querySelector('.relation-dropdown');
  }

  //----- RENDERING -----//

  /**
   * Render the relation list in adding or editing modal.
   * @param {Array} relations
   */
  renderRelationList = (relations) => {
    relations.forEach((relation) => {
      this.renderRelation(relation);
    });
  };

  /**
   * Render a relation in relation list in adding or editing modal.
   * @param {Object} relation
   */
  renderRelation = (relation) => {
    const relationTemplate = Template.renderRelation(relation);
    this.relationListEl.innerHTML += relationTemplate;
  };
}

export default RelationView;
