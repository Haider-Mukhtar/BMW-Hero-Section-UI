import { createRoot } from "react-dom/client";
import App from "./app.tsx";
import "@/assets/css/index.css";
import Providers from "./components/providers.tsx";

createRoot(document.getElementById("root")!).render(
  <Providers>
    <App />
  </Providers>
);
