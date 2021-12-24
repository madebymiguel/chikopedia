import { SimplePokemon } from "../types/SimplePokemon";

export default function constructionSimplePokemon(
  name: string,
  id: number,
  sprite: string
): SimplePokemon {
  return { name, id, sprite };
}
