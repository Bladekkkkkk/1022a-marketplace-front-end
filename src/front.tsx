import { useNavigate } from "react-router-dom";
import './App.css'

// Tipo para usuários


function Appo() {
  const navigate = useNavigate();
  return (
    <>

<header className="site-header">
       <div className="logo">
        <span className="icon">🖥️</span>
        <span className="logo-text">KM MONITORES</span>
    </div>

    <div className="search-bar">
        <input type="text" placeholder="Busque aqui" />
        <button className="search-button">➤</button>
    </div>

    <div className="header-actions">
        <button
            className="produto-button"
            onClick={() => navigate("/produtos")}>
            Produtos
        </button>
        <button
            className="usuario-button"
            onClick={() => navigate("/usuarios")}>
            Usuários
        </button>
        <button
            className="cadastroproduto-button"
            onClick={() => navigate("/cadastro-produto")}>
            Cadastrar Produtos
        </button>
        <button
            className="login-button"
            onClick={() => navigate("/cadastro-usuario")}>
            Cadastrar-se
        </button>

        <div className="icons">
            <a href="#" className="icon">🛒</a>
            <a href="#" className="icon">❤️</a>
        </div>
    </div>
</header>
    </>
  )
}

export default Appo