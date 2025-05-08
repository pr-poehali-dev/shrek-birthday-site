import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// @ts-ignore - добавляем тип для canvas-confetti
declare global {
  interface Window {
    confetti: any;
  }
}

// Импортируем canvas-confetti через CDN
const confettiScript = document.createElement("script");
confettiScript.src =
  "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
document.head.appendChild(confettiScript);

createRoot(document.getElementById("root")!).render(<App />);
