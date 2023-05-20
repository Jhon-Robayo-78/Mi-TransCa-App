import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer"


class Profile extends React.Component{
    handleChange = () =>{
        window.location.href='./'
    }
    handleChange2 = () =>{
        window.location.href='./edit'
    }
    
    
    render(){
        return(
        <div className="profile">
            <Navbar/>
            <div className="flex-wrapper-centered">
                <div className="content-wrapper" style={{textAlign:"center"}}>
                    <img src="./account-settings.svg" className="svg-image-colored" alt="account"/>
                    <br />
                    <span>Nombre: {userPrototype.firstName}</span><br/>
                    <span>Apellido: {userPrototype.lastName}</span><br/>
                    <span>Edad: {userPrototype.age}</span><br/>
                    <span>Email: {userPrototype.email}</span><br/>
                    <span>Teléfono: {userPrototype.contactNumber}</span><br/>
                    <button onClick={()=>this.handleChange2()}>Editar</button>
                    <button style={{backgroundColor:"red",color:"white",marginLeft:"20px"}} onClick={()=>this.handleChange()}>Salir</button>
                </div>
            </div>
            <Footer/>
        </div>
        )
    }
}

export default Profile;
