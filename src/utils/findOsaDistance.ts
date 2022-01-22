// Using Damerau–Levenshtein distance algorithm
// check wikipedia for the details: https://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance

export default function findOsaDistance(
  search: string,
  target: string
): number {
  const distanceArray = new Array(search.length + 1);
  for (let i = 0; i < distanceArray.length; i++) {
    distanceArray[i] = new Array(target.length + 1);
  }

  for (let i = 0; i <= search.length; i++) {
    distanceArray[i][0] = i;
  }
  for (let j = 0; j <= target.length; j++) {
    distanceArray[0][j] = j;
  }

  for (let searchIndex = 1; searchIndex <= search.length; searchIndex++) {
    for (let targetIndex = 1; targetIndex <= target.length; targetIndex++) {
      let cost;
      const searchChar = search[searchIndex - 1];
      const targetChar = target[targetIndex - 1];
      if (searchChar === targetChar) {
        cost = 0;
      } else {
        cost = 1;
      }
      const deletion: number = distanceArray[searchIndex - 1][targetIndex] + 1;
      const insertion: number = distanceArray[searchIndex][targetIndex - 1] + 1;
      const substitution: number =
        distanceArray[searchIndex - 1][targetIndex - 1] + cost;

      distanceArray[searchIndex][targetIndex] = Math.min(
        deletion,
        insertion,
        substitution
      );

      if (
        searchIndex > 1 &&
        targetIndex > 1 &&
        searchChar === target[targetIndex - 2] &&
        search[searchIndex - 2] === targetChar
      ) {
        const currentChar = distanceArray[searchIndex][targetIndex];
        const transposition =
          distanceArray[searchIndex - 2][targetIndex - 2] + 1;
        distanceArray[searchIndex][targetIndex] = Math.min(
          currentChar,
          transposition
        );
      }
    }
  }
  return distanceArray[search.length][target.length];
}
