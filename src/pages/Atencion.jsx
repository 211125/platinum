import React, { Component } from 'react';
import axios from "axios";


import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';


class Atencion extends Component {
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
        await axios.post("http://localhost:3000/api/alumnos/create_estudiantes?",this.state.form).then(response=>{

            this.peticionGet();
        }).catch(error=>{
            console.log(error.message);
        })
    }

    peticionPut=()=>{
        axios.put("http://localhost:3000/api/alumnos/update_estudiantes?"+this.state.form.id, this.state.form).then(response=>{

            this.modalInsertar();
            this.peticionGet();
        })
    }


    peticionDelete=(id)=>{

        axios.delete(`http://localhost:3000/api/alumnos/delete_estudiantes?id=${id}`, {
            data: this.state.form,
        })
            .then(response=>{
                this.setState({modalEliminar: false});
                this.peticionGet();

                console.log(response)

            })
            .catch(err =>{
                console.log(err)
                console.log(`http://localhost:3000/api/reporte/delete?id=${id}`)

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
            <div className="App">
                <br /><br /><br />

                <br /><br />
                <table className="table ">
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
                    </thead>
                    <tbody>
                    {this.state.data.map(empresa=>{
                        return(
                            <tr className="tr-back">
                                <td className="tr-back">{empresa.matricula}</td>
                                <td className="tr-back">{empresa.apellidoP}</td>
                                <td className="tr-back">{empresa.apellidoM}</td>
                                <td className="tr-back">{empresa.nombres}</td>
                                <td className="tr-back">{empresa.sexo}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={()=>{this.seleccionarEmpresa(empresa); this.modalInsertar()}}>actualizar</button>
                                    {"   "}
                                    <button className="btn btn-danger" onClick={()=>{this.seleccionarEmpresa(empresa); this.setState({modalEliminar: true})}}>eliminar</button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>



                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader style={{display: 'block'}}>
                        <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                    </ModalHeader>
                    <ModalBody>

                        <div className="form-group">
                            <label htmlFor="id">ID</label>
                            <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: ''}/>
                            <br />
                            <label htmlFor="nombre">Cubiculo</label>
                            <input className="form-control" type="text" name="apellidoP" id="apellidoP" onChange={this.handleChange} value={form?form.apellidoP: ''}/>
                            <br />
                            <label htmlFor="nombre">Numero de Cubiculo</label>
                            <input className="form-control" type="text" name="numeroAula" id="numeroAula" onChange={this.handleChange} value={form?form.numeroAula: ''}/>
                            <br />
                            <label htmlFor="energiaElec">Energia Electrica</label>
                            <input className="form-control" type="text" name="energiaElec" id="energiaElec" onChange={this.handleChange} value={form?form.energiaElec:''}/>
                            <br />
                            <label htmlFor="infraestructura">Infraestructura</label>
                            <input className="form-control" type="text" name="infraestructura" id="infraestructura" onChange={this.handleChange} value={form?form.infraestructura:''}/>
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        {this.state.tipoModal=='insertar'?
                            <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                                Insertar
                            </button>: <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
                                Actualizar
                            </button>
                        }
                        <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                    </ModalFooter>
                </Modal>


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
            </div>



        );
    }
}
export default Atencion;