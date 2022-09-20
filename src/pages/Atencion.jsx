import React, { Component } from 'react';
import axios from "axios";
import logo from "../assets/img/logo.png";
import {Modal, ModalBody, ModalFooter} from "reactstrap";



const url="http://localhost:3000/api/alumnos/create_estudiantes?";
const url1="http://localhost:3000/api/reporte/update?";


class Reporte extends Component {
    state={
        data:[],
        modalInsertar: false,
        modalEliminar: false,
        form:{
            id: "",
            matricula: "",
            apellidoP: "",
            apellidoM: "",
            nombres: "",
            sexo: ""
        }
    }

    peticionGet=()=>{
        axios.get('http://localhost:3000/api/alumnos/view_estudiantes').then(response=>{
            this.setState({data: response.data});
        }).catch(error=>{
            console.log(error.message);
        })
    }

    peticionPost=async()=>{
        delete this.state.form.id;
        await axios.post(url,this.state.form).then(response=>{
            this.modalInsertar();
            this.peticionGet();
        }).catch(error=>{
            console.log(error.message);
        })
    }

    peticionPut=()=>{
        axios.put(url1+this.state.form.id, this.state.form).then(response=>{

            this.modalInsertar();
            this.peticionGet();
        })
    }


    peticionDelete=(id,e)=>{

        e.preventDefault();
        axios.delete(`http://localhost:3000/api/alumnos/delete_estudiantes?id=${id}`, {
            data: this.state.form,
        })
            .then(response=>{


                console.log(response)

            })
            .catch(err =>{
                console.log(err)
                console.log( this.state.form)
                console.log(`http://localhost:3000/api/alumnos/delete_estudiantes?id=${id}`)

            } )
    }


    modalInsertar=()=>{
        this.setState({modalInsertar: !this.state.modalInsertar});
    }

    seleccionarEmpresa=(empresa)=>{
        this.setState({
            tipoModal: 'actualizar',
            form: {
                id: empresa.id,
                matricula: empresa.matricula,
                apellidoP: empresa.apellidoP,
                apellidoM: empresa.apellidoM,
                nombres: empresa.nombres,
                sexo: empresa.sexo
            }
        })
    }

    handleChange=async e=>{
        e.persist();
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    componentDidMount() {
        this.peticionGet();
    }


    render(){
        const {form}=this.state;
        return (

            <div>

            <form>
                <button  className="Button" >agregar</button>
                <table >
                    <thead>
                    <tr>
                        <td className="bg-primary" >Matricula</td>
                        <th  className="table-secondary">Apellido Paterno</th>
                        <th  className="bg-success">Apellido Materno</th>
                        <th  className="bg-danger">Nombre</th>
                        <th  className="table-secondary">sexo</th>

                    </tr>

                    <tr className="tr-back">
                        <td><input  type="tex" name="matricula" id="matricula"  className="from-input" onChange={this.handleChange}  /></td>
                        <td><input  name="apellidoP" id="apellidoP" type="tex" className="from-input"onChange={this.handleChange} /></td>
                        <td> <input name="apellidoM" id="apellidoM"  type="tex" className="from-input" onChange={this.handleChange} /></td>
                        <td><input  name="nombres" id="nombres"  type="tex" className="from-input" onChange={this.handleChange} /></td>
                        <td><input name="sexo" id="sexo" className="from-input" onChange={this.handleChange} /></td>

                        <td className="white2" ><button  className="Button" onClick={()=>this.peticionPost()}>Agregar</button></td>
                    </tr>

                    {this.state.data.map(empresa=>{
                        return(
                            <tr>
                                <td className="tr-back">{empresa.id}</td>
                                <td className="tr-back">{empresa.matricula}</td>
                                <td className="tr-back">{empresa.apellidoP}</td>
                                <td className="tr-back">{empresa.apellidoM}</td>
                                <td className="tr-back">{empresa.nombres}</td>
                                <td className="tr-back">{empresa.sexo}</td>
                                <td>


                                    <button className="btn btn-danger" onClick={()=>this.peticionDelete(this.state.form.id)}>eliminar</button>
                                </td>
                            </tr>
                        )
                    })}

                    </thead>
                    <tbody>

                    </tbody>
                </table>

                    </form>
                <Modal isOpen={this.state.modalEliminar}>
                    <ModalBody>
                        Estás seguro que deseas eliminar a la empresa {form && form.id}
                        <label htmlFor="id">ID</label>
                        <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: ''}/>
                        <br />
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-danger" onClick={()=>this.peticionDelete(this.state.form.id)}>Sí</button>
                        <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
                    </ModalFooter>
                </Modal>
                < /div>


        );
    }
}
export default Reporte;