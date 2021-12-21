// evolutionPathArray is 2d array and consist of 1st axis as possible paths of evolution chain of pokemon
// and 2nd axis as pokemon in the possible path of evolution chain
// For example, Wurmple has 2 paths of 1) wurmple -> silcoon -> beautifly 2) wurmple -> cascoon -> dustox
// 1st element of 1st axis would be the first case above and 2nd element would be the second case above.

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
