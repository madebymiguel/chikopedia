// Example: input: "generation-1", output: 1
export default function formatGeneration(generation: string) {
  return generation.split("-")[1].toUpperCase();
}
