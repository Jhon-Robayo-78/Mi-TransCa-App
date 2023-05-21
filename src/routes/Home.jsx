import React from "react";
import RowTable from "../components/rowTable";
import RowNews from "../components/rowNews";
import { Link } from "react-router-dom";
class Home extends React.Component {
    render(){
        return(
            <div className="Container-home">
                <div className="Horario">
                <table className="TablaHorarios">
                    <thead>
                        <tr>
                            <th colspan="2">En cuánto llega tu bus?</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.props.data.salidas.map( data =><RowTable key={data.code} data={data}/>)}
                    </tbody>
                    </table>
                </div>
                <div className="messages">
                   <Link to="https://www.colcard.com/puntos-de-recarga/"> <h4>puntos de recarga más cercanos</h4><img src="" width={50} alt="imagen de direccionador"/> </Link>
                </div>
                <div className="NewsPlace">
                    {this.props.data.noticias.map(data =><RowNews key={data.date} data={data}/>)}
                </div>
            </div>
        )
    }
}

export default Home;