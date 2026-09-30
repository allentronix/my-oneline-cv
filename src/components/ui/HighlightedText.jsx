import { parseHighlights } from "../../utils/parseHighlights";
import "./HighlightedText.css";

// Renders text, wrapping any **double-asterisk** parts in an italic, underlined highlight.
function HighlightedText({ text }) {
  return parseHighlights(text).map((segment, index) =>
    segment.isHighlighted ? (
      <strong key={index} className="highlight">
        {segment.text}
      </strong>
    ) : (
      segment.text
    ),
  );
}

export default HighlightedText;
