export default async function fetchPokemonFromEvolutionChain(
  chainArray: string[]
) {
  const chainToBeFetched = [];
  for (let i = 0; i < chainArray.length; i++) {
    chainToBeFetched.push(
      fetch(`https://pokeapi.co/api/v2/pokemon/${chainArray[i]}`)
    );
  }
  const fetchedChainData = await Promise.all(chainToBeFetched);
  return await Promise.all(fetchedChainData.map((response) => response.json()));
}
