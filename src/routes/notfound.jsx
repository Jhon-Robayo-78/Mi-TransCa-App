import React from "react";

function Notfound(){
    return (
      <div className="error">
        <div className="content-wrapper">
          <div className="flex-container-spaced">
            <h1 style={{textAlign: "center"}}>Página no encontrada</h1>
            <img style={{width: "350px"}} src="NotFoundWeb.png" alt="not found image"/>
          </div>
        </div>
      </div>
    )
  }

export default Notfound;