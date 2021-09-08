import React from "react";
import { Carta } from "./Carta";

export const Grupo = ({ nombre, cartas, jugando }) => {
  return (
    <div className={`grupo ${jugando ? "jugando" : ""}`}>
      <div className="grupo-cartas">
        {cartas.map((item, index) => (
          <Carta
            key={index}
            {...item}
            valorGrupo={nombre}
            cartaIndex={index}
            habilitada={index === cartas.length - 1}
          />
        ))}
      </div>
      <div className="grupo-valor">{nombre}</div>
    </div>
  );
};
