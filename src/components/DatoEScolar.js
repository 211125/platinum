import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup } from 'reactstrap';
import {useEffect, useState} from "react";
import axios from "axios";
import Swal from 'sweetalert2';

function DatoEScolar() {
    const [modaladd, setModaladd] = useState(false);
    const add = () => setModaladd(!modaladd);

    const [data,setData] = useState({
        id : "",
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

    /*get*/
    const URL = 'http://localhost:3000/api/tutorados/view_dataT'
    const [blogs, setBlog] = useState([])
    useEffect( ()=>{
        getBlogs()
    },[])
    const getBlogs = async () => {
        const res = await axios.get(URL)
        setBlog(res.data)
    }
    /*actualizar*/
    const [data2, setData2] = useState({
        id: '',
        periodoEscolar: '',
        cuatrimestre: '',
        grupo: '',
        hombresTA: '',
        mujeresTA: '',
        hombresAtendidos: '',
        mujeresAtendidos: '',
        resuelto: '',
        canalizacion: '',
        casosTutor: '',
        casosCanaliacion: ''
    })

    function handle2(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)

    }
  const url2="http://localhost:3000/api/tutorados/update_dataT"
    function axiosPut(){
        axios.put(url2,{
            id: data2.id,
            periodoEscolar1: data2.periodoEscolar,
            cuatrimestre1: data2.cuatrimestre,
            grupo1: data2.grupo,
            hombresTA1: data2.hombresTA,
            mujeresTA1: data2.mujeresTA,
            hombresAtendidos1: data2.hombresAtendidos,
            mujeresAtendidos1: data2.mujeresAtendidos,
            resuelto1: data2.resuelto,
            canalizacion1: data2.canalizacion,
            casosTutor1: data2.casosTutor,
            casosCanaliacion1: data2.casosCanaliacion
        })
            .then(res =>{
                console.log(res.data)
            })
            .catch(err=>{console.log(err)})

    }

    const postDelete = (id,e) =>{
        e.preventDefault();
        axios.delete(`http://localhost:3000/api/tutorados/delete_dataT?id=${id}`)
            .then(res => console.log(res))
            .catch(err =>{
                console.log(err)
                console.log(`http://localhost:3000/api/tutorados/delete_dataT?id=${id}`)
            } )

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
                <tbody>
                { blogs.map ( (blog) => (
                    <tr key={ blog.id}>

                        <td className="tr-back"> { blog.periodoEscolar } </td>
                        <td className="tr-back"> { blog.cuatrimestre } </td>
                        <td className="tr-back"> { blog.grupo } </td>
                        <td className="tr-back"> { blog.hombresTA } </td>
                        <td className="tr-back"> { blog.mujeresTA } </td>
                        <td className="tr-back"> { blog.hombresAtendidos } </td>
                        <td className="tr-back"> { blog.mujeresAtendidos } </td>
                        <td className="tr-back"> { blog.resuelto } </td>
                        <td className="tr-back"> { blog.casosTutor } </td>
                        <td className="tr-back"> { blog.casosCanaliacion } </td>
                        <td className="white2" ><button onClick={(e) => postDelete(data.id, e)} className="Button">eliminar</button><button onClick={add} className="Button">actualizar</button></td>
                    </tr>
                )) }
                </tbody>
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
                                        <input type="text" className="form-control" onChange={(e)=>handle2(e)} id="id" value={data2.periodoEscolar}
                                               id="periodoEscolar1"
                                               required></input>
                                    </div>
                                    <ModalHeader className="text-primary">Tutorados</ModalHeader>
                                    <div>
                                        <Label >Cuatrimestres</Label>
                                        <input type="text" className="form-control" onChange={(e)=>handle2(e)} value={data2.cuatrimestre}
                                               id="cuatrimestre1"
                                               required></input>
                                    </div>
                                    <div>
                                        <Label >grupo</Label>
                                        <input type="text" className="form-control"onChange={(e)=>handle2(e)} value={data2.grupo}
                                               id="grupo1"   required></input>
                                    </div>
                                    <ModalHeader className="text-primary">Tutorados</ModalHeader>
                                    <div>
                                        <Label >Numero de hombre</Label>
                                        <input type="number" className="form-control" onChange={(e)=>handle2(e)} value={data2.hombresTA }
                                               id="hombresTA1"   required></input>
                                    </div>
                                    <div>
                                        <Label >Número de Mujeres </Label>
                                        <input type="number" className="form-control" onChange={(e)=>handle2(e)} value={data2.mujeresTA }
                                               id="mujeresTA1"   required></input>
                                    </div>
                                    <div>
                                        <ModalHeader className="text-primary">Total de horas dedicadas a la tutoría en el cuatrimestre</ModalHeader>
                                        <Label >Total de horas</Label>
                                        <input type="number" className="form-control" onChange={(e)=>handle2(e)} value={data2.resuelto }
                                               id="resuelto1"   required></input>
                                    </div>
                                    <ModalHeader className="text-primary"># de tutorados asignados</ModalHeader>
                                    <div>
                                        <Label >Necesitó canalización</Label>
                                        <input type="text" className="form-control" onChange={(e)=>handle2(e)} value={data2.hombresAtendidos }
                                               id="hombresAtendidos1"   required></input>
                                    </div>
                                    <div>
                                        <Label >Resuelto por el tutor</Label>
                                        <input type="text" className="form-control" onChange={(e)=>handle2(e)} value={data2.mujeresAtendidos }
                                               id="ujeresAtendidos1"   required></input>
                                    </div>
                                    <ModalHeader className="text-primary"># de casos atendidos en seguimiento</ModalHeader>

                                    <div>
                                        <Label >Por el tutor</Label>
                                        <input type="text" className="form-control" onChange={(e)=>handle2(e)} value={data2.casosTutor }
                                               id="casosTutor1"   required></input>
                                    </div>
                                    <div>
                                        <Label >Canalizados</Label>
                                        <input type="text" className="form-control" onChange={(e)=>handle2(e)} value={data2.hombresAtendidos }
                                               id="hombresAtendidos1"   required></input>
                                    </div>
                                </FormGroup>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" onClick={()=>axiosPut()} color="primary">Guardar</Button>
                            <Button color="secondary" onClick={add}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </form>
            < /div>
        </div>
    )
}
export default DatoEScolar;