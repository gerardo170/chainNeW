import React from "react";
import { AppUI } from './Appui';
import { Provider } from '../src/Components/Context';


// const Tabla = [
//   {numpedido: '134', fecha: '17/7/2023', cliente:'Jose', currier:'342', 
//   montocompra:'12',tasa:'12',subtotal:'24',montoenvio:'2',
//    total1:'25',abono:'5',total2:'20',
//    track1:'444',track2:'443',track3:'442',track4:'441', 
//    empEnvio1:'fedex',empEnvio2:'fedex',empEnvio3:'fedex',empEnvio4:'fedex',
//    cant1:'4',cant2:'4',cant3:'4',cant4:'4',
//    status1:'entregado',status2:'entregado',status3:'entregado',status4:'entregado'},
// ];


function Appi() {


    return (
        <Provider>
          <AppUI/>
        </Provider>
    );
}

export { Appi };