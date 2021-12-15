export default async function fetchPokemonFromEvolutionChain(
  chainArray: string[][]
) {
  const chainToBeFetched = [];
  for (let i = 0; i < chainArray.length; i++) {
    console.log(i);
    for (let j = 0; j < chainArray[i].length; j++) {
      console.log(chainArray[i][j]);
      chainToBeFetched.push(
        fetch(`https://pokeapi.co/api/v2/pokemon/${chainArray[i][j]}`)
      );
    }
  }
  const fetchedChainData = await Promise.all(chainToBeFetched);
  return await Promise.all(fetchedChainData.map((response) => response.json()));
}
