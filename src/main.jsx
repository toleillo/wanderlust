import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// After a new deploy the JS chunk hashes change. Any user with a stale cached
// HTML gets "Failed to fetch dynamically imported module". Reloading once
// fetches the fresh HTML (Vercel doesn't cache it) and resolves the mismatch.
window.addEventListener("vite:preloadError", () => {
  window.location.reload();
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
