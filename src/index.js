import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./context/Context";


ReactDOM.render(
    <ContextProvider>
      <App />
    </ContextProvider>,
  document.getElementById("root")
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(() => {
        console.log('Service worker registrado');
      })
      .catch((error) => {
        console.error('Error al registrar sw: ', error);
      });
  });
}