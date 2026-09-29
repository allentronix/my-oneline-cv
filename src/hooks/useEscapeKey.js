import { useEffect } from "react";

// Calls `onEscape` when the Escape key is pressed, only while `isActive` is true.
function useEscapeKey(onEscape, isActive = true) {
  useEffect(() => {
    if (!isActive) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") onEscape();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onEscape, isActive]);
}

export default useEscapeKey;
