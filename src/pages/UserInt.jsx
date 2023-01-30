import {useState,useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  FormGroup,List,ModalFooter,Button, Form } from "reactstrap";
import './Table.css';
import { useEffect } from "react";
import { Context } from "../Components/Context";

export default function UserInt(props) {
const [newDatoValue, numpedido] = useState('');
const [date, setDate] = useState('');
const [nombre, setNombre] = useState('');
const [empresa, setEmpresa] = useState('');
const [currier, setCurrier] = useState('');
const [monto1, setMonto1] = useState('');
const [Tasa1, setTasa1] = useState('');
const [subtotal, setSubtotal] = useState('');
const [monto2, setMonto2] = useState('');
const [total1, setTotal1] = useState('');
const [abono, setAbono] = useState('');
const [total2, setTotal2] = useState('');

const {
  addDato
} = useContext(Context);



const onSubmit = (event) => {
event.preventDefault();
addDato(newDatoValue,date,nombre,empresa,currier,monto1,
  Tasa1,subtotal,monto2,total1,abono,total2);
};

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
    return (
        <>
      <form onSubmit={onSubmit}>
       
      <FormGroup onChange={(event) => {numpedido(event.target.value)}} value={newDatoValue}>
        Numero de Pedido:
        <input className="form-control" name='Numero de Pedido' type="number"/>
      </FormGroup>

      <FormGroup onChange={(event) => {setDate(event.target.value)}} value={date}>
          Fecha:
        <input  className="form-control" name='Fecha' type="date"/>
      </FormGroup>

      <FormGroup onChange={(event) => {setNombre(event.target.value)}} value={nombre}>
          Cliente:
        <input  className="form-control" name='Cliente'/>
      </FormGroup>
     
      <FormGroup  onChange={(event) => {setEmpresa(event.target.value)}} value={empresa}>
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

      <FormGroup  onChange={(event) => {setCurrier(event.target.value)}} value={currier}>
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
          <Form  onChange={(event) => {setMonto1(event.target.value)}} value={monto1}>
          Monto de compras
        <input  type="Number" name="MontoDeCompras" min={0} 
        onChange= {sumar} value={numero.MontoDeCompras} />
        </Form>

        <Form  onChange={(event) => {setTasa1(event.target.value)}} value={Tasa1}> 
          Tasa de Venta
        <input  name='TasaVenta' type="Number" min={0} onChange=
        {sumar} value={numero.TasaVenta} />
        </Form>
          
          <Form  onChange={(event) => {setSubtotal(event.target.value)}} value={subtotal}>
          SubTotal
          <input name='total1' value={suma}/>
          </Form>
          </List>
      </FormGroup>


     
      <FormGroup>
        <List>
        <Form  onChange={(event) => {setMonto2(event.target.value)}} value={monto2}>
        Monto de Envio:
        <input  type="Number" name="MontoDeEnvios" min={0} onChange=
        {sumar} value={numero.MontoDeEnvios}/>
        </Form>
          
          <Form  onChange={(event) => {setTotal1(event.target.value)}} value={total1}>
           Total
          <input name='total2' value={total}/>
          </Form>
        </List>
      </FormGroup>


     
      <FormGroup>
        <List>
          <Form  onChange={(event) => {setAbono(event.target.value)}} value={abono}>
          Abono
        <input  name="abono" type="Number" min={0} onChange=
        {sumar} value={numero.abono}/>
        </Form>
        
        <Form onChange={(event) => {setTotal2(event.target.value)}} value={total2}>
        Total 
          <input name='total2' value={resta}/>
        </Form>
          </List>
      </FormGroup>

      <ModalFooter>
      <Button onClick={onSubmit} color="primary">Guardar</Button>
     </ModalFooter>

      </form>
      </>
    );
}

export { UserInt };