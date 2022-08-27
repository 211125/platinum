import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup } from 'reactstrap';
import {useState} from "react";
function DatoEScolar() {
    const [modaladd, setModaladd] = useState(false);
    const add = () => setModaladd(!modaladd);

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
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
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