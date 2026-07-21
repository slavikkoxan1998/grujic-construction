import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls the window to the top on every route change.
 * Placed inside BrowserRouter so it has access to useLocation.
 *
 * On the initial page load (refresh) it also disables the browser's
 * automatic scroll restoration and forces the top of the page - otherwise
 * a reload could jump back to a remembered position or a stale #anchor
 * at the bottom of the page.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
