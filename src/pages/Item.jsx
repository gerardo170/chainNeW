import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table} from 'reactstrap';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './Item.css'

function Item(props) {
const {numpedido,fecha,cliente,currier,montocompra,tasa,subtotal,montoenvio,total1,abono,total2,
    track1,empEnvio1,cant1,status1,track2,empEnvio2,cant2,status2,track3,empEnvio3,
    cant3,status3,track4,empEnvio4,cant4,status4} = props
    return (
        <>
        <Table>
        <Grid container>
        <Grid item xs={12}>
        <Box border={2}>
        <thead>
        <tr>
        <th>Numero De Pedido</th>
        <th>Fecha</th>
        <th>Cliente</th>
        <th>Currier</th>
        <th>monto De Compra</th>
        <th>Tasa</th>
        <th>Subtotal</th>
        <th>Monto De envio</th>
        <th>total</th>
        <th>Abono</th>
        <th>Total</th>
        </tr>
        </thead>
        <tbody>
        <tr><th>{numpedido}</th>
        <th>{fecha}</th>
        <th>{cliente}</th>
        <th>{currier}</th>
        <th>{montocompra}</th>
        <th>{tasa}</th>
        <th>{subtotal}</th>
        <th>{montoenvio}</th>
        <th>{total1}</th>
        <th>{abono}</th>
        <th>{total2}</th></tr>
        <Button color="danger" onClick={props.onDelete}>Borrar</Button>
        </tbody>
        </Box>
        </Grid>
        </Grid>
        </Table>

        <Table>
        <Grid container>
        <Grid item xs={12}>
        <Box border={2}>
        <thead>
        <tr>
        <th>Tracking</th>
        <th>Empresa de Envio</th>
        <th>Cantidadr</th>
        <th>Status</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th>{track1}</th>
            <th>{empEnvio1}</th>
            <th>{cant1}</th>
            <th>{status1}</th></tr>
        </tbody>
        <thead>
        <tr>
        <th>Tracking</th>
        <th>Empresa de Envio</th>
        <th>Cantidadr</th>
        <th>Status</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th>{track1}</th>
            <th>{empEnvio1}</th>
            <th>{cant1}</th>
            <th>{status1}</th></tr>
        </tbody>
        <thead>
        <tr>
        <th>Tracking</th>
        <th>Empresa de Envio</th>
        <th>Cantidadr</th>
        <th>Status</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th>{track2}</th>
            <th>{empEnvio2}</th>
            <th>{cant2}</th>
            <th>{status2}</th></tr>
        </tbody>
        <thead>
        <tr>
        <th>Tracking</th>
        <th>Empresa de Envio</th>
        <th>Cantidadr</th>
        <th>Status</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th>{track3}</th>
            <th>{empEnvio3}</th>
            <th>{cant3}</th>
            <th>{status3}</th></tr>
        </tbody>
        <thead>
        <tr>
        <th>Tracking</th>
        <th>Empresa de Envio</th>
        <th>Cantidadr</th>
        <th>Status</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th>{track4}</th>
            <th>{empEnvio4}</th>
            <th>{cant4}</th>
            <th>{status4}</th></tr>
            <Button color="danger" onClick={props.onDelete}>Borrar</Button>
        </tbody>
        </Box>
        </Grid>
        </Grid>
        </Table>
        </>
    );
}

export { Item };