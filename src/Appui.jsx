import React from "react";
import { Consulta } from "../src/pages/Consulta";
import { Context } from "../src/Components/Context";
import { Lista } from "../src/pages/Lista";
import { Item } from "../src/pages/Item";

function AppUI() {
 const { searchedTabla, 
         deleteDato,
       } = React.useContext(Context);

    return (
    <React.Fragment>
      <Consulta /> 

          <Lista>
          { searchedTabla && searchedTabla.map(tabla => (
            <Item
              key={tabla.numpedido}
              {...tabla}
              onDelete={() => deleteDato(tabla.numpedido)}
            />
          ))},
        </Lista>
      </React.Fragment>
    );
}


export { AppUI };