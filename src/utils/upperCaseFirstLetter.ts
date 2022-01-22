// Capitalize first letter of given string
export default function upperCaseFirstLetter(word: string) {
  const space = " ";
  const indexOfSpace = word.indexOf(space);
  if (indexOfSpace > 0) {
    return (
      word[0].toUpperCase() +
      word.substring(1, indexOfSpace + 1) +
      word[indexOfSpace + 1].toUpperCase() +
      word.substring(indexOfSpace + 2)
    );
  }
  return word[0].toUpperCase() + word.substring(1);
}
