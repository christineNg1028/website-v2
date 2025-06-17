import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export const ScrollToTop = () => {
  const location = useLocation();
  const navigationType = useNavigationType(); // 'POP', 'PUSH', or 'REPLACE'

  useEffect(() => {
    if (navigationType === "PUSH") {
      // Only scroll to top on forward navigation (not back)
      window.scrollTo(0, 0);
    }
  }, [location, navigationType]);

  return null;
};
