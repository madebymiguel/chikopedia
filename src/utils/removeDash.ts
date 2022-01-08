import upperCaseFirstLetter from "./upperCaseFirstLetter";

export default function removeDash(word: string) {
  const splittedStringArray = word.split("-");

  for (let i = 0; i < splittedStringArray.length; i++) {
    splittedStringArray[i] = upperCaseFirstLetter(splittedStringArray[i]);
  }

  return splittedStringArray.join(" ");
}
