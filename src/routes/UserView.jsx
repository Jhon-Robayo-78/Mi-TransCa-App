import React from "react";
import { Link } from "react-router-dom";

class userview extends React.Component{
    render(){
        return(
            <div className="content-wrapper">
                <Link to="/Profile" ><div className="optionRow">
                    <h1>Información de cuenta</h1><img src="accountIconFilled.svg" alt="IconUser" />
                    </div>
                </Link>
                <Link to="/edit" ><div className="optionRow">
                     <h1>Actualizar datos</h1><img src="editAccount.svg" alt="IconConfigUser" />
                    </div>
                </Link>
                <Link to="" ><div className="optionRow">
                     <h1>Desactivar Tarjeta</h1><img src="deactivate.svg" alt="IconSafe" />

                    </div>
                </Link>
                <Link to="" ><div className="optionRow">
                    <h1>Enviar un reporte</h1><img src="report.svg" alt="IconReport" />
                    </div>
                </Link>
                <Link to="/FAQ" ><div className="optionRow">
                    <h1>Terminos y condiciones</h1><img src="terms.svg" alt="Icon" />
                    </div>
                </Link>
            </div>  
        )
    }
}

export default userview;