import React from "react";
import { Link } from "react-router-dom";

class userview extends React.Component{
    render(){
        return(
            <div className="UserView">
                {/* Baner */}
                <Link to="/Profile" ><div>
                    <h4>Info de cuenta</h4><img src="" alt="IconUser" />
                    </div>
                </Link>
                <Link to="/edit" ><div>
                     <h4>Actualizar datos</h4><img src="" alt="IconConfigUser" />
                    </div>
                </Link>
                <Link to="" ><div>
                     <h4>Desactivar Tarjeta</h4><img src="" alt="IconSafe" />

                    </div>
                </Link>
                <Link to="" ><div>
                    <h4>Enviar un reporte</h4><img src="" alt="IconReport" />
                    </div>
                </Link>
                <Link to="/FAQ" ><div>
                    <h4>Terminos y cond,</h4><img src="" alt="Icon" />
                    </div>
                </Link>
            </div>  
        )
    }
}

export default userview;