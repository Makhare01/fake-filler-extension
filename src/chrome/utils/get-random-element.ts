import { range } from "fp-ts/NonEmptyArray";
import WordsJSON from "../../assets/words-array.json";

export const generateRandomBoolean = (): boolean => {
  return Math.random() < 0.5;
};

export const getRandomElement = <T>(arr: T[]) =>
  arr[Math.floor(Math.random() * arr.length)];

export const generateRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const generateRandomString = (
  length: number,
  onlyString?: boolean
): string => {
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_-+=[]{}\\|;:'\",.<>/?";

  const allCharacters =
    lowercaseLetters + uppercaseLetters + numbers + specialCharacters;

  const characters = onlyString
    ? lowercaseLetters + uppercaseLetters
    : allCharacters;

  return range(0, length)
    .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
    .join("");
};

export const generateRandomURL = () => {
  // Generate a random string of length 10
  const randomString = generateRandomString(10, true);

  // List of possible domains and top-level domains
  const domains = ["example", "google", "yahoo", "reddit", "facebook"];
  const tlds = ["com", "org", "net", "edu"];

  // Choose a random domain and top-level domain
  const domain = domains[Math.floor(Math.random() * domains.length)];
  const tld = tlds[Math.floor(Math.random() * tlds.length)];

  // Combine the random string, domain, and top-level domain to form the URL
  return "https://" + randomString + "." + domain + "." + tld;
};

export const generateRandomPhoneNumber = () => {
  const numbers = range(0, 7)
    .map((i) => generateRandomNumber(0, 9))
    .join("");

  // for example +995512345678
  return `+995 5${numbers}`;
};

export const generateRandomText = (
  sentenceCount: number,
  minWords: number,
  maxWords: number
) => {
  const words = WordsJSON as {
    WORDS: Array<string>;
  };

  const resultArr = range(0, sentenceCount).map((_, i) => {
    const wordCount =
      Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords;

    let sentence = range(0, wordCount)
      .map((_, i) => {
        const index = Math.floor(Math.random() * words.WORDS.length);
        const word = words.WORDS[index];
        return word;
      })
      .join(" ");

    sentence = sentence[0] + sentence.slice(1);

    if (i < sentenceCount - 1) {
      sentence += ",";
    }
    return sentence;
  });

  return resultArr.join(" ") + ".";
};
