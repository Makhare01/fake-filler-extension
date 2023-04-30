export type InputTypes =
  | "CHECKBOX"
  | "COLOR"
  | "DATE"
  | "EMAIL"
  | "NUMBER"
  | "PASSWORD"
  | "RADIO"
  | "RANGE"
  | "SEARCH"
  | "TEL"
  | "TEXT"
  | "URL";

const INPUT_TYPES: Record<string, InputTypes> = {
  checkbox: "CHECKBOX",
  color: "COLOR",
  date: "DATE",
  email: "EMAIL",
  number: "NUMBER",
  password: "PASSWORD",
  radio: "RADIO",
  range: "RANGE",
  search: "SEARCH",
  tel: "TEL",
  text: "TEXT",
  url: "URL",
};

export const getInputFormattedType = (type: string) => INPUT_TYPES[type];
