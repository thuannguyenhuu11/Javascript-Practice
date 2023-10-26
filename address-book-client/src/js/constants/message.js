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

//Regex for form validator.
export const REGEX = {
  NAME: /^[a-zA-Z\s]+$/,
  PHONE: /^\d{10}$/,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  AVATAR: /^[a-zA-Z\s]+$/,
};
