import Event from "../events/event";

class Model {
  constructor() {
    this.addContactEvent = new Event();
  }

  add() {
    // Your logic for adding a contact goes here.
    // For example, add a contact to a list.
    // You can trigger the event after the action is done.
    this.addContactEvent.trigger();
  }
}

export default Model;
