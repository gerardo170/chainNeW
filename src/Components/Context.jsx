import React from "react";
import { UseLocalStorage } from "../Components/UseLocalStorage";

const Context = React.createContext();

function Provider(props) {
const { item: tablas,
        saveItem: saveTabla,
      } = UseLocalStorage('Datos_V1', []);
const [searchValue, setSearchValue] = React.useState('');


let searchedTabla = [];

if (!searchValue.length >= 1) {
  searchedTabla = tablas;
} else {
  searchedTabla = tablas.filter(tabla => {
    const TablaText = tabla.numpedido.toLowerCase();
    const searchTabla = searchValue.toLowerCase();
    return TablaText.includes(searchTabla);
  });
}

const addDato = ( numpedido,newDatoValue,date,nombre,empresa,currier,monto1,Tasa1,subtotal,monto2,
  total1,abono,total2,
  newTracking,
  newVia,
  newEmp,
  newCant,
  newPeso,
  newCosto,
  NewStatus,
  newTracking2,
  newVia2,
  newEmp2,
  newCant2,
  newPeso2,
  newCosto2,
  NewStatus2,
  newTracking3,
  newVia3,
  newEmp3,
  newCant3,
  newPeso3,
  newCosto3,
  NewStatus3,
  newTracking4, 
  newVia4,
  newEmp4,
  newCant4,
  newPeso4,
  newCosto4,
  NewStatus4,) => {
  
  const newTablas = [...tablas];
  newTablas.push({
    numpedido,newDatoValue,date,nombre,empresa,currier,monto1,Tasa1,subtotal,monto2,
    total1,abono,total2,newTracking,
    newVia,
    newEmp,
    newCant,
    newPeso,
    newCosto,
    NewStatus,
    newTracking2,
    newVia2,
    newEmp2,
    newCant2,
    newPeso2,
    newCosto2,
    NewStatus2,
    newTracking3,
    newVia3,
    newEmp3,
    newCant3,
    newPeso3,
    newCosto3,
    NewStatus3,
    newTracking4, 
    newVia4,
    newEmp4,
    newCant4,
    newPeso4,
    newCosto4,
    NewStatus4,
  });
  saveTabla(newTablas);
};


const deleteDato = (numpedido) => {
  const TablaIndex = tablas.findIndex(tabla => tabla.numpedido === numpedido);
  const newTablas = [...tablas];
  newTablas.splice(TablaIndex, 1);
  saveTabla(newTablas);
};

    return (
        <Context.Provider value={{
            addDato,
            searchValue,
            setSearchValue,
            searchedTabla,
            deleteDato,
        }}>
            {props.children}
        </Context.Provider>
    );
}

export { Context,Provider };