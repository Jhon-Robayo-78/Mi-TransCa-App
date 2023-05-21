import React from "react"

class EditProfile extends React.Component {
  
  state ={
    form:{
      _id: 0,
      nombre: 'Nombre placeholder',
      apellido: 'Apellido placeholder',
      age: 0,
      correo: 'example@mail.com',
      password:'',
      contactNumber:302
    }
  }
  sendData = () =>{
    window.location.href='./'
  }

  handleChange = async e =>{
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  render(){ 
    return (
      <div>
        <div className="flex-wrapper-centered">
          <div className="content-wrapper">
            <h1 className="reg">Editar cuenta</h1>
            <form onSubmit={this.sendData}>
              <label htmlFor="firstName">Nombre</label>
              <input type="text" name="nombre" placeholder="nombre" value={this.state.form.nombre} onChange={this.handleChange}/>
              <label htmlFor="lastName">Apellido</label>
              <input type="text" name="apellido" value={this.state.form.apellido} placeholder="apellido" onChange={this.handleChange}/>
              <label htmlFor="age">age</label>
              <input type="number" min="10" max="99" name="age" placeholder="edad" value={this.state.form.age} onChange={this.handleChange}/>
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" placeholder="Nueva contraseña" onChange={this.handleChange}/>
              <label htmlFor="contactNumber">Teléfono de contacto</label>
              <input type="text" name="contactNumber" value={this.state.form.contactNumber} placeholder="actualizar teléfono" onChange={this.handleChange}/>
              <button id="boton">Aplicar cambios</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
      
}
export default EditProfile;