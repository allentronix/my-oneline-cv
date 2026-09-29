import { useEffect } from "react";

// Prevents the page behind an overlay from scrolling while `isLocked` is true.
function useLockBodyScroll(isLocked) {
  useEffect(() => {
    if (!isLocked) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLocked]);
}

export default useLockBodyScroll;
