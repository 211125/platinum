import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup } from 'reactstrap';
import {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
function TableAfirmativa() {
    const [modaladd, setModaladd] = useState(false);
    const add = () => setModaladd(!modaladd);

    const [data,setData] = useState({
        pregunta_1: "",
        pregunta_2: "",
        pregunta_3: "",
        pregunta_4: ""
    });
    const url ='http://localhost:3000/api/encuesta/create_preguntas';

    function Enviar(e){
        e.preventDefault();
        axios.post(url,{
            pregunta_1: data.pregunta_1,
            pregunta_2: data.pregunta_2,
            pregunta_3: data.pregunta_3,
            pregunta_4: data.pregunta_4
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
            <button  onClick={add} className="Button">actualizar</button>

            <table >
                <thead>
                <tr>
                    <td className="white2" >1</td>
                    <td className="white" >Establece días y horarios fijos para encontrarse con sus tutorados</td>
                    <td className="white"><input onChange={(e)=>handle(e)} id="pregunta_1" value={data.pregunta_1}  type="tex" className="input-boolean"/></td>
                    <td className="white2" rowSpan="4"><button className="Button">eliminar</button><button className="Button" onClick={(e => Enviar(e))}>Agregar</button></td>


                </tr>
                <tr>
                    <td className="white" >2</td>
                    <td className="white" >El alumno acude para pedirle una tutoría cuando sea necesario</td>
                    <td className="white"><input type="tex" className="input-boolean" onChange={(e)=>handle(e)} id="pregunta_2" value={data.pregunta_2} /></td>


                </tr>
                <tr className="tr-back">
                    <td className="white" >3</td>
                    <td className="white" >Se comunica con los alumnos a través del correo electrónico</td>
                    <td className="white"><input type="tex" className="input-boolean" onChange={(e)=>handle(e)} id="pregunta_3" value={data.pregunta_3} /></td>
                </tr>
                <tr className="tr-back">
                    <td className="white" >4</td>
                    <td className="white" >si utiliza algún otro sistema, descríbalo por favor.</td>
                    <td className="white"><input type="tex" className="input-boolean" onChange={(e)=>handle(e)} id="pregunta_4" value={data.pregunta_4} /></td>
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