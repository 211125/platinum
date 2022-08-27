import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup } from 'reactstrap';
import {useState} from "react";

function TableTutorados(){
    const [modaladd, setModaladd] = useState(false);
    const add = () => setModaladd(!modaladd);
    return(
        <div>
            <button  onClick={add} className="Button">agregar</button>
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
                    <td> </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="white2" ><button className="Button">eliminar</button><button className="Button">actualizar</button></td>
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