import FullNamesJSON from "../../assets/full-names.json";
import namesSurnamesJSON from "../../assets/names-surnames.json";
import {
  generateRandomNumber,
  generateRandomString,
  getRandomElement,
} from "./get-random-element";

export const getFormattedName = () => {
  const names = FullNamesJSON.map((record) => record.name_2.split(" ")[0]);
  const surnames = FullNamesJSON.map((record) => record.name_2.split(" ")[1]);

  return { name: getRandomElement(names), surname: getRandomElement(surnames) };
};

export const getRandomName = () => {
  const names = namesSurnamesJSON.names;

  return getRandomElement(names);
};

export const getRandomSurname = () => {
  const surnames = namesSurnamesJSON.surnames;

  return getRandomElement(surnames);
};

export const getRandomEmail = () => {
  const randomNumber = generateRandomNumber(3, 10);
  const randString = generateRandomString(randomNumber, true).toLowerCase();

  return `${randString}@sheavse.com`;
};

export const getRandomPassword = () =>
  generateRandomString(generateRandomNumber(8, 15));

export const getRandomHexColor = () => {
  // Generate a random number between 0 and 16777215 (0xFFFFFF)
  const randomColor = Math.floor(Math.random() * 16777215);

  // Convert the number to hexadecimal and pad with zeros to 6 digits
  return "#" + randomColor.toString(16).padStart(6, "0");
};

export const generateRandomDate = () => {
  // Generate a random date between Jan 1, 2000 and Dec 31, 2025
  var minYear = 2000;
  var maxYear = new Date().getFullYear();
  var startDate = new Date(minYear, 0, 1);
  var endDate = new Date(maxYear, 11, 31);
  var randomDate = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );

  // Get the year, month, and day values
  var year = randomDate.getFullYear();
  var month = randomDate.getMonth() + 1; // add 1 to get 1-indexed month
  var day = randomDate.getDate();

  // Format the date as a string
  return year + "-" + ("0" + month).slice(-2) + "-" + ("0" + day).slice(-2);
};
