// Splits text on **double asterisks** into segments, marking the wrapped parts.
// "a **b** c" -> [{ text: "a ", isHighlighted: false }, { text: "b", isHighlighted: true }, ...]
export function parseHighlights(text) {
  return text
    .split("**")
    .map((part, index) => ({ text: part, isHighlighted: index % 2 === 1 }))
    .filter((segment) => segment.text !== "");
}
