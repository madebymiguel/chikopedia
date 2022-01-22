// Make given index look like numbers found in pokedex in pokemon
// ex: input: 1, output: 001
export default function formatIndex(index: number): string {
  let formattedIndex: string;
  if (index < 10) {
    formattedIndex = "00" + index;
  } else if (index < 100) {
    formattedIndex = "0" + index;
  } else {
    formattedIndex = index + "";
  }
  return formattedIndex;
}
