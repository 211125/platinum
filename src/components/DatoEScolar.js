import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup } from 'reactstrap';
import {useState} from "react";
import axios from "axios";
import Swal from 'sweetalert2';

function DatoEScolar() {
    const [modaladd, setModaladd] = useState(false);
    const add = () => setModaladd(!modaladd);

    const [data,setData] = useState({
        periodoEscolar: "",
        cuatrimestre: "",
        grupo: "",
        hombresTA: "",
        mujeresTA: "",
        hombresAtendidos: "",
        mujeresAtendidos: "",
        resuelto: "",
        canalizacion: "",
        casosTutor: "",
        casosCanaliacion: ""
    });
    const url = 'http://localhost:3000/api/tutorados/create_dataT';
    function Enviar(e){
        e.preventDefault();
        axios.post(url,{
            periodoEscolar: data.periodoEscolar,
            cuatrimestre: data.cuatrimestre,
            grupo: data.grupo,
            hombresTA: data.hombresTA,
            mujeresTA: data.mujeresTA,
            hombresAtendidos: data.hombresAtendidos,
            mujeresAtendidos: data.mujeresAtendidos,
            resuelto: data.resuelto,
            canalizacion: data.canalizacion,
            casosTutor: data.casosTutor,
            casosCanaliacion: data.casosCanaliacion
        })
        Swal.fire({
            title: 'DATOS AGREGADO EXITOSOS',
            text: "",
            icon: 'success',
            confirmButtonColor: '#0e46ff',
            confirmButtonText: 'Okay'
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
            <button  className="Button" onClick={add}>agregar</button>
            <table >
                <thead>
                <tr>
                    <td className="bg-primary" rowSpan="2">Periodo escolar</td>
                    <th colSpan="2" className="table-secondary">Tutorados</th>
                    <th colSpan="2" className="bg-success"># de tutorados asignados</th>
                    <th rowSpan="2" className="bg-danger">Total de horas dedicadas a la tutoría en el cuatrimestre</th>
                    <th colSpan="2" className="table-secondary"> # de casos atendidos y resueltos</th>
                    <th colSpan="2" className="table-secondary"> # de casos atendidos en seguimiento</th>
                    <td className="bg-primary" rowSpan="2" >Accion</td>
                </tr>
                <tr>
                    <td scope="col" className="bg-info">Cuatrimestre</td>
                    <td scope="col" className="bg-info">Grupo</td>
                    <td scope="col" className="bg-info">Hombres</td>
                    <td scope="col" className="table-success">Mujeres</td>
                    <td scope="col" className="table-success">Necesitó canalización</td>
                    <td scope="col" className="table-success">Resuelto por el tutor</td>
                    <td scope="col" className="table-success">Por el tutor</td>
                    <td scope="col" className="table-success">Canalizados</td>

                </tr>
                <tr className="tr-back">
                    <td><input onChange={(e)=>handle(e)} id="periodoEscolar" value={data.periodoEscolar} type="tex" className="from-input"/></td>
                    <td><input onChange={(e)=>handle(e)} id="cuatrimestre" value={data.cuatrimestre} type="tex" className="from-input"/></td>
                    <td> <input onChange={(e)=>handle(e)} id="grupo" value={data.grupo} type="tex" className="from-input"/></td>
                    <td><input onChange={(e)=>handle(e)} id="hombresTA" value={data.hombresTA} type="tex" className="from-input"/></td>
                    <td><input onChange={(e)=>handle(e)} id="mujeresTA" value={data.mujeresTA} type="tex" className="from-input"/></td>
                    <td><input onChange={(e)=>handle(e)} id="hombresAtendidos" value={data.hombresAtendidos} type="tex" className="from-input"/></td>
                    <td><input onChange={(e)=>handle(e)} id="mujeresAtendidos" value={data.mujeresAtendidos} type="tex" className="from-input"/></td>
                    <td><input onChange={(e)=>handle(e)} id="resuelto" value={data.resuelto} type="tex" className="from-input"/></td>
                    <td><input onChange={(e)=>handle(e)} id="casosTutor" value={data.casosTutor} type="tex" className="from-input"/></td>
                    <td><input onChange={(e)=>handle(e)} id="casosCanaliacion" value={data.casosCanaliacion} type="tex" className="from-input"/></td>
                    <td className="white2" ><button onClick={(e)=>Enviar(e)} className="Button">Agregar</button></td>
                </tr>
                </thead>
            </table>
            < div>
                <form>
                    <Modal isOpen={modaladd}>
                        <ModalHeader className="text-primary">Agregar</ModalHeader>
                        <ModalBody>
                            <form className="was-validated" noValidate>
                                <FormGroup>

                                    <div>
                                        <Label for="price">Periodo Escolar</Label>
                                        <input type="text" className="form-control"
                                               id="nameProduc"
                                               required></input>
                                    </div>
                                    <ModalHeader className="text-primary">Tutorados</ModalHeader>
                                    <div>
                                        <Label >Cuatrimestres</Label>
                                        <input type="number" className="form-control"
                                               id="description"
                                               required></input>
                                    </div>
                                    <div>
                                        <Label >grupo</Label>
                                        <input type="text" className="form-control"
                                               id="price"   required></input>
                                    </div>
                                    <ModalHeader className="text-primary">Tutorados</ModalHeader>
                                    <div>
                                        <Label >Numero de hombre</Label>
                                        <input type="number" className="form-control"
                                               id="amount"   required></input>
                                    </div>
                                    <div>
                                        <Label >Número de Mujeres </Label>
                                        <input type="number" className="form-control"
                                               id="amount"   required></input>
                                    </div>
                                    <div>
                                        <ModalHeader className="text-primary">Total de horas dedicadas a la tutoría en el cuatrimestre</ModalHeader>
                                        <Label >Total de horas</Label>
                                        <input type="number" className="form-control"
                                               id="amount"   required></input>
                                    </div>
                                    <ModalHeader className="text-primary"># de tutorados asignados</ModalHeader>
                                    <div>
                                        <Label >Necesitó canalización</Label>
                                        <input type="text" className="form-control"
                                               id="amount"   required></input>
                                    </div>
                                    <div>
                                        <Label >Resuelto por el tutor</Label>
                                        <input type="text" className="form-control"
                                               id="amount"   required></input>
                                    </div>
                                    <ModalHeader className="text-primary"># de casos atendidos en seguimiento</ModalHeader>

                                    <div>
                                        <Label >Por el tutor</Label>
                                        <input type="text" className="form-control"
                                               id="amount"   required></input>
                                    </div>
                                    <div>
                                        <Label >Canalizados</Label>
                                        <input type="text" className="form-control"
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
export default DatoEScolar;