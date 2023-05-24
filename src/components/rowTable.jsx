import React from "react";
import "./css/RowTable.css"

const RowTable = (props)=>{
    return(
        <div className="RowEta">
            <img src="/rutasIcon.svg"/>
            <h2>{props.data.code}</h2> 
            <h2>{props.data.time}</h2> 
        </div>
    )
}


export default RowTable;