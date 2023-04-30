import {
  generateRandomBoolean,
  generateRandomNumber,
  generateRandomPhoneNumber,
  generateRandomText,
  generateRandomURL,
} from "../get-random-element";
import {
  generateRandomDate,
  getRandomEmail,
  getRandomHexColor,
  getRandomName,
  getRandomPassword,
  getRandomSurname,
} from "../input";
import { getInputFormattedType } from "./fill-input-utils";

const randPassword = getRandomPassword();

const setInputValue = (input: HTMLInputElement, value: any) => {
  input.value = value;
  input.setAttribute("value", value);
};

const setTextInputValue = (input: HTMLInputElement) => {
  const inputName = input.name.toLowerCase();
  const type = getInputFormattedType(input.type);

  if (
    inputName === "firstname" ||
    inputName === "first-name" ||
    inputName === "name" ||
    inputName === "username"
  ) {
    setInputValue(input, getRandomName());
    return;
  }

  if (
    inputName === "lastname" ||
    inputName === "last-name" ||
    inputName === "surname"
  ) {
    setInputValue(input, getRandomSurname());
    return;
  }

  if (
    inputName === "dateofbirth" ||
    inputName === "date" ||
    inputName === "birthdate" ||
    inputName === "date-of-birth" ||
    inputName === "birth" ||
    inputName.includes("date") ||
    inputName.includes("birth")
  ) {
    setInputValue(input, generateRandomDate());
    return;
  }

  if (
    type === "TEL" ||
    inputName === "phonenumber" ||
    inputName === "phone-number" ||
    inputName === "phone" ||
    inputName.includes("phone")
  ) {
    setInputValue(input, generateRandomPhoneNumber());
    return;
  }

  if (
    type === "URL" ||
    inputName.includes("website") ||
    inputName.includes("url")
  ) {
    setInputValue(input, generateRandomURL());
    return;
  }

  if (inputName.includes("number") || inputName.includes("code")) {
    setInputValue(input, generateRandomNumber(0, 1000));
    return;
  }

  if (type === "SEARCH" || type === "TEXT")
    setInputValue(input, generateRandomText(1, 1, 1));
};

const selectRadioButton = (input: HTMLInputElement) => {
  const name = input.name;
  const radioButtons = document.getElementsByName(name);

  const randIndex = generateRandomNumber(0, radioButtons.length - 1);

  const randEl = radioButtons[randIndex] as HTMLInputElement;
  randEl.checked = true;
};

export const fillInput = (input: HTMLInputElement) => {
  const type = getInputFormattedType(input.type);

  switch (type) {
    case "CHECKBOX":
      input.checked = generateRandomBoolean();
      break;
    case "COLOR":
      setInputValue(input, getRandomHexColor());
      break;
    case "EMAIL":
      setInputValue(input, getRandomEmail());
      break;
    case "NUMBER":
      setInputValue(input, generateRandomNumber(0, 1000));
      break;
    case "PASSWORD":
      setInputValue(input, randPassword);
      break;
    case "RANGE":
      setInputValue(input, generateRandomNumber(0, 100).toString());
      break;
    case "DATE":
      setInputValue(input, generateRandomDate());
      break;
    case "RADIO":
      selectRadioButton(input);
      break;
    default:
      setTextInputValue(input);
  }
};

export const fillTextarea = (textarea: HTMLTextAreaElement) => {
  const value = generateRandomText(5, 4, 20);
  textarea.setAttribute("value", value);
  textarea.value = value;
};

export const fillSelect = (select: HTMLSelectElement) => {
  const options = select.querySelectorAll("option");
  const randIndex = generateRandomNumber(0, options.length - 1);

  select.value = options[randIndex].value;
  select.setAttribute("value", options[randIndex].value);
};
