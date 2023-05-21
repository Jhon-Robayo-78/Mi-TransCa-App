import React from "react";

const RowTable = (props)=>{
    return(
    <tr>
        <td>{props.data.code}</td>
        <td>{props.data.time}</td>
    </tr>
    )
}

export default RowTable;