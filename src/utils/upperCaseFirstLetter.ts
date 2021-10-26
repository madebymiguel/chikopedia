export default function upperCaseFirstLetter(word: string) {
  const firstLetter = word[0].toLocaleUpperCase();
  return firstLetter + word.substring(1);
}
