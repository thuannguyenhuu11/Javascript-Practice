/**
 * Message for the form validator.
 */
export const MESSAGE = {
  NAME_REQUIRED: 'The contact name is required',
  INVALID_NAME: 'The contact name is invalid',
  PHONE_REQUIRED: 'The phone number is required',
  INVALID_PHONE: 'The phone number is invalid',
  EMAIL_REQUIRED: 'The email address is required',
  INVALID_EMAIL: 'The email address is invalid',
  AVATAR_REQUIRED: 'The avatar is required',
  INVALID_AVATAR: 'The avatar is invalid',
  CONFIRM_MESSAGE: 'Do you want to delete contact: ',
};

/**
 * Message for alert the error while fetching or rendering.
 */
export const ERROR_MESSAGE = {
  INIT_CONTACT_LIST: "Couldn't initialize contact list",
  INIT_RELATION_LIST: "Couldn't initialize relation list",
  RENDER_CONTACT_LIST: "Couldn't display contact list",
  RENDER_CONTACT_INFO: "Couldn't display contact info",
  OPEN_CONFIRM_MODAL: "Couldn't open confirm modal",
  OPEN_ADD_MODAL: "Couldn't open add modal",
  OPEN_EDIT_MODAL: "Couldn't open edit modal",
  GET_CONTACT_INFO: "Couldn't get contact info",
  DELETE_CONTACT: "Couldn't delete contact",
  ADD_CONTACT: "Couldn't add contact",
  EDIT_CONTACT: "Couldn't edit contact",
};

/**
 * Message for alert if the action be done successfully.
 */
export const SUCCESS_MESSAGE = {
  ADD_CONTACT: 'Add contact successfully',
  EDIT_CONTACT: 'Edit contact successfully',
  DELETE_CONTACT: 'Delete contact successfully',
};

/**
 * Regex for form validator.
 */
export const REGEX = {
  NAME: /^[a-zA-Z\s]+$/,
  PHONE: /^\d{10}$/,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  AVATAR: /\.(jpeg|jpg|png|gif|bmp|svg)$/i,
};

/**
 * Optinal API query for fetching data from json-server
 */
export const QUERY = {
  EXPAND_RELATION: '?_expand=relation',
};
