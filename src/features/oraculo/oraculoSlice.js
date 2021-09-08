import { createSlice } from "@reduxjs/toolkit";
import { cartas, valores } from "../../utils/constants";

const initialState = {
  gano: 0,
  perdio: 0,
  grupos: [],
};

const oraculoSlices = createSlice({
  name: "oraculo",
  initialState,
  reducers: {
    asignarGrupos: (state, action) => {
      state.grupos = action.payload;
    },
    girar: (state, action) => {
      state.grupos[action.payload.grupoIndex].cartas[
        action.payload.cartaIndex
      ].girada = true;
      state.grupos[action.payload.grupoIndex].jugando = false;
    },
    mover: (state, action) => {
      state.grupos[action.payload.nuevoGrupoIndex].cartas.unshift(
        state.grupos[action.payload.grupoIndex].cartas.pop()
      );
      state.grupos[action.payload.grupoIndex].jugando = false;
      state.grupos[action.payload.nuevoGrupoIndex].jugando = true;
    },
  },
});

export const reset = () => (dispatch) => {
  var baraja = barajar(cartas);
  baraja = agrupar(baraja, 13);
  const grupos = baraja.map((item, index) => {
    return {
      nombre: valores[index],
      cartas: item,
      jugando: index === baraja.length - 1 ? true : false,
    };
  });

  dispatch(asignarGrupos(grupos));
};

const barajar = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const newIndex = Math.floor(Math.random() * (i + 1));
    const oldValue = array[newIndex];
    array[newIndex] = array[i];
    array[i] = oldValue;
  }

  return array;
};

const agrupar = (a, n) => {
  if (n < 2) return [a];

  var len = a.length,
    out = [],
    i = 0,
    size;

  if (len % n === 0) {
    size = Math.floor(len / n);
    while (i < len) {
      out.push(a.slice(i, (i += size)));
    }
  } else {
    n--;
    size = Math.floor(len / n);
    if (len % size === 0) size--;
    while (i < size * n) {
      out.push(a.slice(i, (i += size)));
    }
    out.push(a.slice(size * n));
  }

  return out;
};

export const girarCarta =
  (valor, valorGrupo, cartaIndex) => (dispatch, getState) => {
    const grupoIndex = getState().oraculo.grupos.findIndex(
      (item) => item.nombre === valorGrupo
    );

    const nuevoGrupoIndex = getState().oraculo.grupos.findIndex(
      (item) => item.nombre === valor
    );

    dispatch(girar({ grupoIndex, cartaIndex }));

    setTimeout(() => {
      dispatch(moverCarta(grupoIndex, nuevoGrupoIndex));
    }, 1000);
  };

export const moverCarta =
  (grupoIndex, nuevoGrupoIndex) => (dispatch, getState) => {
    console.log(`moviendo`);
    dispatch(mover({ grupoIndex, nuevoGrupoIndex }));
  };

export const { asignarGrupos, girar, mover } = oraculoSlices.actions;
export default oraculoSlices.reducer;
