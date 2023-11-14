//Message for the form validator.
export const MESSAGE = {
  NAME_REQUIRED: "The contact name is required",
  INVALID_NAME: "The contact name is invalid",
  PHONE_REQUIRED: "The phone number is required",
  INVALID_PHONE: "The phone number is invalid",
  EMAIL_REQUIRED: "The email address is required",
  INVALID_EMAIL: "The email address is invalid",
  AVATAR_REQUIRED: "The avatar is required",
  INVALID_AVATAR: "The avatar is invalid",
  RELATION_REQUIRED: "The relation is required",
  INVALID_RELATION: "The relation is invalid",
};

//Message for alert the error while fetching or rendering.

export const ERROR_MESSAGE = {
  INIT_CONTACT_LIST: "Couldn't initialize contact list",
  INIT_RELATION_LIST: "Couldn't initialize relation list",
  RENDER_CONTACT_LIST: "Couldn't display contact list",
  RENDER_CONTACT_INFO: "Couldn't display contact info",
  OPEN_CONFIRM_MODAL: "Couldn't open confirm modal",
  OPEN_ADD_MODAL: "Couldn't open add modal",
  OPEN_EDIT_MODAL: "Couldn't open edit modal",
  DELETE_CONTACT: "Couldn't delete contact",
  GET_CONTACT: "Couln't get contact",
  ADD_CONTACT: "Couldn't add contact",
  EDIT_CONTACT: "Couldn't edit contact",
};

//Regex for form validator.
export const REGEX = {
  NAME: /^[a-zA-Z\s]+$/,
  PHONE: /^\d{10}$/,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  AVATAR: /^[a-zA-Z\s]+$/,
};
