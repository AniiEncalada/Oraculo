import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../features/oraculo/oraculoSlice";
import { Grupo } from "../components/Grupo";

export const Main = () => {
  const oraculo = useSelector((state) => state.oraculo);
  console.log(oraculo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);
  return (
    <div className="main">
      <div className="groups">
        {oraculo.grupos.map((item, index) => (
          <Grupo key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
