import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup } from 'reactstrap';
import {useState} from "react";
function TableAfirmativa() {
    const [modaladd, setModaladd] = useState(false);
    const add = () => setModaladd(!modaladd);
    return(

        <div>
            <button  onClick={add} className="Button">agregar</button>

            <table >
                <thead>
                <tr>
                    <td className="white2" >1</td>
                    <td className="white" >Establece días y horarios fijos para encontrarse con sus tutorados</td>
                    <td className="white"><input type="tex" className="input-boolean"/></td>
                    <td className="white2" rowSpan="4"><button className="Button">eliminar</button><button className="Button">actualizar</button></td>


                </tr>
                <tr>
                    <td className="white" >2</td>
                    <td className="white" >El alumno acude para pedirle una tutoría cuando sea necesario</td>
                    <td className="white"></td>

                </tr>
                <tr className="tr-back">
                    <td className="white" >3</td>
                    <td className="white" >Se comunica con los alumnos a través del correo electrónico</td>
                    <td className="white"></td>
                </tr>
                <tr className="tr-back">
                    <td className="white" >4</td>
                    <td className="white" >si utiliza algún otro sistema, descríbalo por favor.</td>
                    <td className="white"></td>
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
                                        <Label for="price">Establece días y horarios fijos para encontrarse con sus tutorados</Label>
                                        <input type="text" className="form-control"
                                               id="nameProduc"
                                               required></input>
                                    </div>
                                    <div>
                                        <Label >El alumno acude para pedirle una tutoría cuando sea necesario</Label>
                                        <input type="text" className="form-control"
                                               id="description"
                                               required></input>
                                    </div>
                                    <div>
                                        <Label >Se comunica con los alumnos a través del correo electrónico</Label>
                                        <input type="text" className="form-control"
                                               id="price"   required></input>
                                    </div>
                                    <div>
                                        <Label >Número de tutorados dados de baja definitiva o academica </Label>
                                        <input type="number" className="form-control"
                                               id="amount"   required></input>
                                    </div>
                                    <div>
                                        <Label >si utiliza algún otro sistema, descríbalo por favor.</Label>
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
export default TableAfirmativa;