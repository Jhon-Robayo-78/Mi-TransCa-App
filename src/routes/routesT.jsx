import React from "react";
import Row from "../components/row";
class RoutesT extends React.Component{
    render(){
        return(
        <div className="RoutesT">
            {this.props.data.map( data =><Row key={data.code} data={data}/>)}
        </div>
        )
    } 
}

export default RoutesT;