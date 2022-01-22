import upperCaseFirstLetter from "./upperCaseFirstLetter";

// Replace dash with space
export default function removeDash(word: string) {
  const splittedStringArray = word.split("-");

  for (let i = 0; i < splittedStringArray.length; i++) {
    splittedStringArray[i] = upperCaseFirstLetter(splittedStringArray[i]);
  }

  return splittedStringArray.join(" ");
}
