import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormGroup,List,ModalFooter,Button } from "reactstrap";
import {Box,ChakraProvider,extendTheme} from "@chakra-ui/react";
import {StepsStyleConfig, Steps, Step, useSteps} from "@chakra-ui-steps";
import './Table.css';
import { useEffect } from "react";

const [total, setTotal] = useState();
const [resta, setResta] = useState();

  const [numero, setnumero] = useState({
    MontoDeCompras:0,
    MontoDeEnvios:0,
    TasaVenta:0,
    abono:0
  });
  const [suma, setsuma] = useState();
  
  useEffect(() => {
    const {MontoDeCompras,TasaVenta,MontoDeEnvios,abono} = numero;
    setsuma(Number(MontoDeCompras)+Number(TasaVenta))
    setTotal(Number(suma)+Number(MontoDeEnvios));
    setResta(Number(abono)-Number(total));
  }, [numero,suma,total]);

  const sumar = (event)=>{
    const {name,value}=event.target;
    setnumero({...numero,[name]:value});
  }

  const theme = extendTheme({
    components: {
      Steps: StepsStyleConfig,
    },
  });

  const Tabla; React.FC = () => {
   const {activeStep} = useSteps({
    initialStep: 0,
   });

    return (
    <ChakraProvider theme={theme}>
      <Box p={5}>
        <>
      <Steps>
      <form>
      <FormGroup>
        Numero de Pedido:
        <input className="form-control" name='Numero de Pedido' type="number"/>
      </FormGroup>

      <FormGroup>
          Fecha:
        <input  className="form-control" name='Fecha' type="date"/>
      </FormGroup>
      
      <FormGroup>
          Cliente:
        <input  className="form-control" name='Cliente'/>
      </FormGroup>
      
      <FormGroup>
         Empresa_Envio:
        <select  name="Empresa_Envio" className="form-select" aria-label="Default select example">
          <option selected value="Seleccione Empresa de envio"/>
          <option value="Fedex">Fedex</option>
          <option value="DHL" >DHL</option>
          <option value="LaserShip" >LaserShip</option>
          <option value="UPS" >UPS</option>
          <option value="USPS" >USPS</option>
          <option value="Otros" >Otros...</option>
        </select>
      </FormGroup>
      
      <FormGroup>
         Currier:
        <select className="form-select" aria-label="Default select example">
        <option selected value="Seleccione Currier"></option>
          <option value="WM import">WM import</option>
        </select>

        <label>
           o Ingrese otro currier:
          <input className="form-control" name='Otros' type="text"/>
           </label>
      </FormGroup>

      <FormGroup>
        <List>
          Monto de compras
        <input  type="Number" name="MontoDeCompras" min={0} 
        onChange= {sumar} value={numero.MontoDeCompras} />

          Tasa de Venta
        <input  name='TasaVenta' type="Number" min={0} onChange=
        {sumar} value={numero.TasaVenta} />
          
          SubTotal
          <input name='total1' value={suma}/>
          </List>
      </FormGroup>

      <FormGroup>
        <List>
        Monto de Envio:
        <input  type="Number" name="MontoDeEnvios" min={0} onChange=
        {sumar} value={numero.MontoDeEnvios}/>

           Total
          <input name='total2' value={total}/>
        </List>
      </FormGroup>

      <FormGroup>
        <List>
          Abono
        <input  name="abono" type="Number" min={0} onChange=
        {sumar} value={numero.abono}/>

        Total 
          <input name='total2' value={resta}/>
          </List>
      </FormGroup>
      
      <ModalFooter>
     <Button color="primary">Guardar</Button>
     </ModalFooter>
      </form>
      </Steps>
      </>
      </Box>
    </ChakraProvider>
    );
  };

  export { Tabla };