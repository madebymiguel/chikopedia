// evolutionPathArray is 2d array and consist of 1st axis as possible paths of evolution chain of pokemon
// and 2nd axis as pokemon in the possible path of evolution chain
// ex. for the case of wurmple's evolution chain, it would look like:
// [
//   [wurmple, silcoon, beautifly],
//   [wurmple, cascoon, dustox]
// ]

export default async function fetchPokemonFromEvolutionChain(
  evolutionPathArray: string[][]
) {
  const chainToBeFetched = [];
  for (
    let evolutionPath = 0;
    evolutionPath < evolutionPathArray.length;
    evolutionPath++
  ) {
    for (
      let pokemonInPath = 0;
      pokemonInPath < evolutionPathArray[evolutionPath].length;
      pokemonInPath++
    ) {
      chainToBeFetched.push(
        fetch(
          `https://pokeapi.co/api/v2/pokemon/${evolutionPathArray[evolutionPath][pokemonInPath]}`
        )
      );
    }
  }
  const fetchedChainData = await Promise.all(chainToBeFetched);
  return await Promise.all(fetchedChainData.map((response) => response.json()));
}
