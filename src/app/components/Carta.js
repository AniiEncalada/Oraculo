import React from "react";
import { GiSeaDragon } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { girarCarta } from "../../features/oraculo/oraculoSlice";
export const Carta = ({
  palo,
  valor,
  girada,
  valorGrupo,
  cartaIndex,
  habilitada,
}) => {
  const dispatch = useDispatch();
  const onClickCaraPosterior = () => {
    if (habilitada) dispatch(girarCarta(valor, valorGrupo, cartaIndex));
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
