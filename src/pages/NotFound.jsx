import React from "react";

import "@styles/NotFount.scss";

export const NotFound = () => {
  return (
    <div className="notFound-container">
      <h1 className="notFound-number animated hinge">404</h1>
      <h3>Pagina No Encontrada</h3>
      <button className="primary-button">Volver</button>
    </div>
  );
};
