import Event from "../events/event";
class Model {
  constructor() {
    this.openContactEvent = new Event();
    this.closeModalEvent = new Event();
    this.handleFormEvent = new Event();
  }

  open() {
    // logic for opening modal add-contact.
    this.openModalEvent.trigger();
  }

  close() {
    // logic for closing modal add-contact.
    this.closeModalEvent.trigger();
  }

  handle() {
    this.handleFormEvent.trigger();
  }
}

export default Model;
