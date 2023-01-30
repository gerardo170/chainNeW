import React from "react";
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Sidebar from '../src/Components/Sidebar';
import { Table } from '../src/pages/Table';
import './App.scss';
import { Appi } from "../src/Appi";

function App() {
  return (
    <Router>
      <div className="flex">
      <Sidebar />
      <div className='content w-100'>
        <Routes>
        <Route path="/tabla" exact={true} element={<Table/>}/>
        <Route path="/reporte" exact={true} element={<Appi/>} />
        </Routes>
      </div>
      </div>
      </Router>
  );
}

export default App;