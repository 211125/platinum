import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup } from 'reactstrap';
import {useState} from "react";
import axios from "axios";
import Swal from 'sweetalert2';

function TableTutorados(){
    const [modaladd, setModaladd] = useState(false);
    const add = () => setModaladd(!modaladd);

    const [data,setData] = useState({
        numTR: "",
        numTRiesgo: "",
        numTCO: "",
        numBajaD: "",
        EBTemporal: ""
    });
    const url ='http://localhost:3000/api/atencion/create_data'

    function Enviar(e){
        e.preventDefault();
        axios.post(url,{
            numTR: data.numTR,
            numTRiesgo: data.numTRiesgo,
            numTCO: data.numTCO,
            numBajaD: data.numBajaD,
            EBTemporal: data.EBTemporal
        })
            .then(response => {
                Swal.fire({
                    title: 'DATOS AGREGADO EXITOSOS',
                    text: "",
                    icon: 'success',
                    confirmButtonColor: '#0e46ff',
                    confirmButtonText: 'Okay'
                })
            })
            .catch(error => {
                console.log(error)
                this.errored = true
                Swal.fire({
                    title: 'DATOS AGREGADO EXITOSOS',
                    text: "",
                    icon: 'error',
                    confirmButtonColor: '#0e46ff',
                    confirmButtonText: 'Okay'
                })
            })
    }

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)

    }
    return(
        <div>
            <button  onClick={add} className="Button">Actualizar</button>
            <table className="table1">
                <thead className="tr-back">
                <tr>
                    <td className="warning" >Número de tutorados detectados como irregular</td>
                    <td className="bg-danger" >Número de tutorados detectados en riesgo</td>
                    <td className="bg-success" >Número de tutorados canalizados oportunamente</td>
                    <td className="bg-purple" >Número de tutorados dados de baja definitiva o academica </td>
                    <td className="bg-primary" >Número de estudiantes con baja temporal </td>
                    <td className="bg-primary" >Accion</td>

                </tr>
                <tr className="tr-back">
                    <td> <input onChange={(e)=>handle(e)} id="numTR" value={data.numTR} type="tex" className="from-input"/></td>
                    <td> <input onChange={(e)=>handle(e)} id="numTRiesgo" value={data.numTRiesgo} n type="tex" className="from-input"/></td>
                    <td> <input onChange={(e)=>handle(e)} id="numTCO" value={data.numTCO} type="tex" className="from-input"/></td>
                    <td> <input onChange={(e)=>handle(e)} id="numBajaD" value={data.numBajaD} type="tex" className="from-input"/></td>
                    <td> <input onChange={(e)=>handle(e)} id="EBTemporal" value={data.EBTemporal} type="tex" className="from-input"/></td>

                    <td className="white2" ><button onClick={(e)=>Enviar(e)} className="Button">Agregar</button></td>
                </tr>

                </thead>
            </table>

            < div>
                <form>
                    <Modal isOpen={modaladd}>
                        <ModalHeader className="text-primary">Actualizar</ModalHeader>
                        <ModalBody>
                            <form className="was-validated" noValidate>
                                <FormGroup>

                                    <div>
                                        <Label for="price">Número de tutorados detectados como irregular</Label>
                                        <input type="number" className="form-control"
                                               id="nameProduc"
                                               required></input>
                                    </div>
                                    <div>
                                        <Label >Número de tutorados detectados en riesgo</Label>
                                        <input type="number" className="form-control"
                                               id="description"
                                               required></input>
                                    </div>
                                    <div>
                                        <Label >Número de tutorados canalizados oportunamente</Label>
                                        <input type="text" className="form-control"
                                               id="price"   required></input>
                                    </div>
                                    <div>
                                        <Label >Número de tutorados dados de baja definitiva o academica </Label>
                                        <input type="number" className="form-control"
                                               id="amount"   required></input>
                                    </div>
                                    <div>
                                        <Label >Número de estudiantes con baja temporal </Label>
                                        <input type="number" className="form-control"
                                               id="amount"   required></input>
                                    </div>
                                </FormGroup>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit"  color="primary">Guardar</Button>
                            <Button color="secondary" onClick={add}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </form>
            < /div>

        </div>
    )
}
export default TableTutorados;