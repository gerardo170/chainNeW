import React, { useState, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  FormGroup,List,ModalFooter,Button } from "reactstrap";
import './Table.css';
import { useEffect } from "react";
import { Context } from "../Components/Context";

function Trackings(props) {
const [newTracking, setTracking] = useState('');
const [newVia, setNewVia] = useState('');
const [newEmp, setNewEmp] = useState('');
const [newCant, setNewCant] = useState('');
const [newPeso, setNewPeso] = useState('');
const [newCosto, setNewCosto] = useState('');
const [NewStatus, setNewStatus] = useState('');
const [newTracking2, setTracking2] = useState('');
const [newEmp2, setNewEmp2] = useState('');
const [newCant2, setNewCant2] = useState('');
const [newPeso2, setNewPeso2] = useState('');
const [newCosto2, setNewCosto2] = useState('');
const [NewStatus2, setNewStatus2] = useState('');
const [newTracking3, setTracking3] = useState('');
const [newEmp3, setNewEmp3] = useState('');
const [newCant3, setNewCant3] = useState('');
const [newPeso3, setNewPeso3] = useState('');
const [newCosto3, setNewCosto3] = useState('');
const [NewStatus3, setNewStatus3] = useState('');
const [newTracking4, setTracking4] = useState('');
const [newEmp4, setNewEmp4] = useState('');
const [newCant4, setNewCant4] = useState('');
const [newPeso4, setNewPeso4] = useState('');
const [newCosto4, setNewCosto4] = useState('');
const [NewStatus4, setNewStatus4] = useState('');

const {
  addDato
} = useContext(Context);


const onSubmit = (event) => {
event.preventDefault();
addDato(newTracking,newVia,newEmp,newCant,newPeso,newCosto,NewStatus,
        newTracking2,newEmp2,newCant2,newPeso2,newCosto2,NewStatus2,
        newTracking3,newEmp3,newCant3,newPeso3,newCosto3,NewStatus3,
        newTracking4,newEmp4,newCant4,newPeso4,newCosto4,NewStatus4,);
}

  const [numero2, setnumero2] = useState({
    Cantidad_Pieza:0,
    Cantidad_Pieza2:0,
    Cantidad_Pieza3:0,
    Cantidad_Pieza4:0,
    Peso:0,
    Peso2:0,
    Peso3:0,
    Peso4:0,
  });
  const [Multiplicar, setMultiplicar] = useState();
  const [Multiplicar2, setMultiplicar2] = useState();
  const [Multiplicar3, setMultiplicar3] = useState();
  const [Multiplicar4, setMultiplicar4] = useState();
  
  useEffect(() => {
    const {Cantidad_Pieza,Cantidad_Pieza2,Cantidad_Pieza3,Cantidad_Pieza4,Peso,Peso2,Peso3,Peso4} = numero2;
    setMultiplicar(Number(Cantidad_Pieza)*Number(Peso))
    setMultiplicar2(Number(Cantidad_Pieza2)*Number(Peso2))
    setMultiplicar3(Number(Cantidad_Pieza3)*Number(Peso3))
    setMultiplicar4(Number(Cantidad_Pieza4)*Number(Peso4))
  }, [numero2]);

  const Multi = (event)=>{
    const {name,value}=event.target;
    setnumero2({...numero2,[name]:value});
  }

    return (
        <>
      <form onSubmit={onSubmit}>
      <FormGroup onChange={(event) => {setNewVia(event.target.value)}} value={newVia}>
        Via:
        <select className="form-select" aria-label="Default select example">
        <option selected value="Seleccione Via"></option>
          <option name='Maritima'>Maritima</option>
          <option name= 'Aereo' >Aereo</option>
        </select>
      </FormGroup>
      
      <FormGroup>
      <List>
        Tracking 1:
        <input  type="Number" min={0} onChange={(event) => {setTracking(event.target.value)}} value={newTracking}/>
  
        Tracking 2:
        <input  name='Peso' type="Number" min={0} onChange={(event) => {setTracking2(event.target.value)}} value={newTracking2}/>
    
        Tracking 3:
        <input  type="Number" min={0} onChange={(event) => {setTracking3(event.target.value)}} value={newTracking3}/>

        Tracking 4:
        <input  type="Number" min={0} onChange={(event) => {setTracking4(event.target.value)}} value={newTracking4}/>
          </List>
      </FormGroup>
       
       <FormGroup>
        <List>
          <div>
       Empresa_Envio 1 :
        <select onChange={(event) => {setNewEmp(event.target.value)}} value={newEmp}>
          <option selected value="Seleccione Empresa de envio"></option>
          <option value="Fedex">Fedex</option>
          <option value="DHL">DHL</option>
          <option value="LaserShip">LaserShip</option>
          <option value="UPS">UPS</option>
          <option value="USPS">USPS</option>
          <option value="Otros">Otros...</option>
        </select>

        Empresa_Envio 2 :
        <select onChange={(event) => {setNewEmp2(event.target.value)}} value={newEmp2}>
          <option selected value="Seleccione Empresa de envio"></option>
          <option value="Fedex">Fedex</option>
          <option value="DHL">DHL</option>
          <option value="LaserShip">LaserShip</option>
          <option value="UPS">UPS</option>
          <option value="USPS">USPS</option>
          <option value="Otros">Otros...</option>
        </select>

        Empresa_Envio 3 :
        <select onChange={(event) => {setNewEmp3(event.target.value)}} value={newEmp3}>
          <option selected value="Seleccione Empresa de envio"></option>
          <option value="Fedex">Fedex</option>
          <option value="DHL">DHL</option>
          <option value="LaserShip">LaserShip</option>
          <option value="UPS">UPS</option>
          <option value="USPS">USPS</option>
          <option value="Otros">Otros...</option>
        </select>
      
        Empresa_Envio 4 :
        <select onChange={(event) => {setNewEmp4(event.target.value)}} value={newEmp4}>
          <option selected value="Seleccione Empresa de envio"></option>
          <option value="Fedex">Fedex</option>
          <option value="DHL">DHL</option>
          <option value="LaserShip">LaserShip</option>
          <option value="UPS">UPS</option>
          <option value="USPS">USPS</option>
          <option value="Otros">Otros...</option>
        </select>
        </div>
        </List>
       </FormGroup>

       <FormGroup>
        <List>
          <div>
          <form onChange={(event) => {setNewCant(event.target.value)}} value={newCant}>
          Cantidad Pieza
          <input  type="Number" name='Cantidad_Pieza'  min={0} onChange=
          {Multi} value={numero2.Cantidad_Pieza}/>
          </form>
          
          <form onChange={(event) => {setNewPeso(event.target.value)}} value={newPeso}>
           Peso
          <input  type="Number" name='Peso'  min={0} onChange=
          {Multi} value={numero2.Peso}/>
          </form>
        
          <form onChange={(event) => {setNewCosto(event.target.value)}} value={newCosto}>
          Costo Envio:
          <input  name='Costo_Envio' value={Multiplicar}/>
          </form>
          </div>
        </List>
       </FormGroup>

       <FormGroup>
        <List>
          <div>
          <form onChange={(event) => {setNewCant2(event.target.value)}} value={newCant2}>
          Cantidad Pieza
          <input  type="Number" name='Cantidad_Pieza2'  min={0} onChange=
          {Multi} value={numero2.Cantidad_Pieza2}/>
          </form>
          
          <form onChange={(event) => {setNewPeso2(event.target.value)}} value={newPeso2}>
           Peso
          <input  type="Number" name='Peso2'  min={0} onChange=
          {Multi} value={numero2.Peso2}/>
          </form>
        
          <form onChange={(event) => {setNewCosto2(event.target.value)}} value={newCosto2}>
          Costo Envio:
          <input  name='Costo_Envio2' value={Multiplicar2}/>
          </form>
          </div>
        </List>
       </FormGroup>

       <FormGroup>
        <List>
          <div>
          <form onChange={(event) => {setNewCant3(event.target.value)}} value={newCant3}>
          Cantidad Pieza
          <input  type="Number" name='Cantidad_Pieza3'  min={0} onChange=
          {Multi} value={numero2.Cantidad_Pieza3}/>
          </form>
          
          <form onChange={(event) => {setNewPeso3(event.target.value)}} value={newPeso3}>
           Peso
          <input  type="Number" name='Peso3'  min={0} onChange=
          {Multi} value={numero2.Peso2}/>
          </form>
        
          <form onChange={(event) => {setNewCosto3(event.target.value)}} value={newCosto3}>
          Costo Envio:
          <input  name='Costo_Envio3' value={Multiplicar3}/>
          </form>
          </div>
        </List>
       </FormGroup>

       <FormGroup>
        <List>
          <div>
          <form onChange={(event) => {setNewCant4(event.target.value)}} value={newCant4}>
          Cantidad Pieza
          <input  type="Number" name='Cantidad_Pieza4'  min={0} onChange=
          {Multi} value={numero2.Cantidad_Pieza4}/>
          </form>
          
          <form onChange={(event) => {setNewPeso4(event.target.value)}} value={newPeso4}>
           Peso
          <input  type="Number" name='Peso4'  min={0} onChange=
          {Multi} value={numero2.Peso4}/>
          </form>
        
          <form onChange={(event) => {setNewCosto4(event.target.value)}} value={newCosto4}>
          Costo Envio:
          <input  name='Costo_Envio4' value={Multiplicar4}/>
          </form>
          </div>
        </List>
       </FormGroup>
       
       <FormGroup>
       <List>
        <div>
        Status:
        <select className="form-select" aria-label="Default select example" onChange={(event) => {setNewStatus(event.target.value)}} value={NewStatus}>
        <option selected value="Status"></option>
          <option value="Sin Entregar"> Sin Entregar </option>
          <option value="Entregado"> Entregado </option>
        </select>

        Status:
        <select className="form-select" aria-label="Default select example" onChange={(event) => {setNewStatus2(event.target.value)}} value={NewStatus2}>
        <option selected value="Status"></option>
          <option value="Sin Entregar"> Sin Entregar </option>
          <option value="Entregado"> Entregado </option>
        </select>

        Status:
        <select className="form-select" aria-label="Default select example" onChange={(event) => {setNewStatus3(event.target.value)}} value={NewStatus3}>
        <option selected value="Status"></option>
          <option value="Sin Entregar"> Sin Entregar </option>
          <option value="Entregado"> Entregado </option>
        </select>

        Status:
        <select className="form-select" aria-label="Default select example" onChange={(event) => {setNewStatus4(event.target.value)}} value={NewStatus4}>
        <option selected value="Status"></option>
          <option value="Sin Entregar"> Sin Entregar </option>
          <option value="Entregado"> Entregado </option>
        </select>
        </div>
       </List>
      </FormGroup>

      <ModalFooter>
      <Button onClick={onSubmit} color="primary">Guardar</Button>
     </ModalFooter>
      </form>
      </>
    );
}

export { Trackings };