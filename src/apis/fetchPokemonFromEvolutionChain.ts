export default async function fetchPokemonFromEvolutionChain(
  pathArray: string[][]
) {
  const chainToBeFetched = [];
  for (
    let evolutionPath = 0;
    evolutionPath < pathArray.length;
    evolutionPath++
  ) {
    for (
      let pokemonInPath = 0;
      pokemonInPath < pathArray[pokemonInPath].length;
      pokemonInPath++
    ) {
      chainToBeFetched.push(
        fetch(
          `https://pokeapi.co/api/v2/pokemon/${pathArray[evolutionPath][pokemonInPath]}`
        )
      );
    }
  }
  const fetchedChainData = await Promise.all(chainToBeFetched);
  return await Promise.all(fetchedChainData.map((response) => response.json()));
}
