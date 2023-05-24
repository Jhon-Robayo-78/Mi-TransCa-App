import React from "react";
import RowTable from "../components/rowTable";
import RowNews from "../components/rowNews";
import { Link } from "react-router-dom";
class Home extends React.Component {
    render(){
        return(
            <div>
                <div className="content-wrapper">
                    <h1>En cuánto llega tu bus?</h1>
                    <div className="flex-container-spaced" style={{width:"45%"}}>
                        <p>Estación</p>
                        <input type="text" className="form-control" placeholder="La Bodeguita" disabled/>
                    </div> 
                    {this.props.data.salidas.map( data =><RowTable key={data.code} data={data}/>)}
                </div>
                <div className="content-wrapper">
                   <Link to="https://www.colcard.com/puntos-de-recarga/"> 
                        <div className="flex-container-spaced">
                            <h1>Busca puntos de recarga cercanos</h1>
                            <img src="./nearme.svg" alt="imagen de direccionador"/> 
                        </div>
                   </Link>
                </div>
                <div className="content-wrapper">
                    <h1>Noticias más recientes</h1>
                    {this.props.data.noticias.map(data =><RowNews key={data.date} data={data}/>)}
                </div>
            </div>
        )
    }
}

export default Home;