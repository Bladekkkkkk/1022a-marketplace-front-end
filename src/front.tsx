import './App.css'

// Tipo para usuários


function Appo() {
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
            onClick={() => window.location.href = "produtos"}>
            Produtos
          </button>
        <button
            className="usuario-button"
            onClick={() => window.location.href = "usuarios"}>
            Usuários
          </button>
        <button
            className="cadastroproduto-button"
            onClick={() => window.location.href = "cadastro-produto"}>
            Cadastrar Produtos
          </button>
          <button
            className="login-button"
            onClick={() => window.location.href = "cadastro-usuario"}>
            Entrar ou Cadastrar-se
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