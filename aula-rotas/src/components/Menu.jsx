// Criando um menu

//Importando o componente Link do router dom.
import { Link } from "react-router-dom"

export default function Menu(){

    return(
    <nav className="menu">
             <link to='/'>JHome</link>
            <span>  </span>
            <Link to='/produtos'>Produtos</Link>
        </nav>
    )
}