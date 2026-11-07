import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Le HTML pré-rendu contient des JSON-LD que les pages recréent au chargement
document.querySelectorAll("[data-prerender]").forEach((el) => el.remove());

createRoot(document.getElementById("root")!).render(<App />);
