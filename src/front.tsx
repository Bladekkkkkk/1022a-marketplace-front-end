import { useNavigate } from "react-router-dom";
import './App.css'

// Tipo para usuários


function Appo() {
  const navigate = useNavigate();
  return (
    <>

<header className="site-header">
                <div className="logo">
                    <img src="logo.png" alt="Logo" />
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Busque aqui" />
                    <button className="search-button">➤</button>
                </div>

                <div className="header-actions">
                    <button
                        className="produto-button"
                        onClick={() => navigate("/produtos")}> {/* Alterado para navigate */}
                        Produtos
                    </button>
                    <button
                        className="usuario-button"
                        onClick={() => navigate("/usuarios")}> {/* Alterado para navigate */}
                        Usuários
                    </button>
                    <button
                        className="cadastroproduto-button"
                        onClick={() => navigate("/cadastro-produto")}> {/* Alterado para navigate */}
                        Cadastrar Produtos
                    </button>
                    <button
                        className="login-button"
                        onClick={() => navigate("/cadastro-usuario")}> {/* Alterado para navigate */}
                        Cadastrar-se
                    </button>

                    <div className="icons">
                        <a href="#" className="icon">🔍</a>
                        <a href="#" className="icon">🛒</a>
                        <a href="#" className="icon">❤️</a>
                    </div>
                </div>
            </header>

    </>
  )
}

export default Appo