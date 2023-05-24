import React from "react";
import { Link } from "react-router-dom";

class userview extends React.Component{
    render(){
        return(
            <div className="content-wrapper">
                <Link to="/Profile" ><div className="optionRow">
                    <h3>Información de cuenta</h3><img src="accountIconFilled.svg" alt="IconUser" />
                    </div>
                </Link>
                <Link to="/edit" ><div className="optionRow">
                     <h3>Actualizar datos</h3><img src="editAccount.svg" alt="IconConfigUser" />
                    </div>
                </Link>
                <Link to="" ><div className="optionRow">
                     <h3>Desactivar Tarjeta</h3><img src="deactivate.svg" alt="IconSafe" />

                    </div>
                </Link>
                <Link to="" ><div className="optionRow">
                    <h3>Enviar un reporte</h3><img src="report.svg" alt="IconReport" />
                    </div>
                </Link>
                <Link to="/FAQ" ><div className="optionRow">
                    <h3>Terminos y condiciones</h3><img src="terms.svg" alt="Icon" />
                    </div>
                </Link>
            </div>  
        )
    }
}

export default userview;