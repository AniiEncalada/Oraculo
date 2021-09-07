import React from "react";
import { GiSeaDragon } from "react-icons/gi";
export const Carta = ({ palo, valor, girada, valorGrupo, cartaIndex }) => {
  const dispatch = useDispatch();
  const onClickCaraPosterior = () => {
    dispatch(girarCarta(valor, valorGrupo, cartaIndex));
  };
  return (
    <div className="carta">
      <div className={`carta-contenido ${girada ? "girada" : ""}`}>
        <div
          className="carta-cara carta-cara-posterior "
          onClick={onClickCaraPosterior}
        >
          <GiSeaDragon />
        </div>
        <div className="carta-cara carta-cara-frontal ">
          <div className="palo palo-superior">{palo}</div>
          <div className="valor">{valor}</div>
          <div className="palo palo-inferior">{palo}</div>
        </div>
      </div>
    </div>
  );
};
