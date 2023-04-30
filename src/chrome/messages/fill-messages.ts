import { MessagePassingActions } from "../message/message-actions";
import { fillInput, fillSelect, fillTextarea } from "../utils/fill-inputs";

const fillForm = () => {
  const inputs = document.querySelectorAll("input");
  const textareas = document.querySelectorAll("textarea");
  const selects = document.querySelectorAll("select");

  console.log({ inputs });

  inputs.forEach((input) => {
    fillInput(input);
  });

  textareas.forEach((textarea) => {
    fillTextarea(textarea);
  });

  selects.forEach((select) => {
    fillSelect(select);
  });

  return true;
};

export const Messages: Record<MessagePassingActions, any> = {
  fillForm,
};
