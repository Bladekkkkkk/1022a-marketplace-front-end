import { useEffect, useState } from 'react'
import './App.css'

// Tipo para usuários
type UsuarioType = {
  id: number,
  nome: string,
  email: string,
  senha: string,
  confirmarsenha: string, 
  datanascimento: string,
  telefone: number,
  endereco: string
}

function Appi() {
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([])

  // useEffect para carregar produtos e usuários
  useEffect(() => {
    // Buscar os usuários
    fetch("https://one022a-marketplace-18yz.onrender.com/usuarios")
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados))
  }, [])

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
            Cadastrar-se
          </button>
          
          <div className="icons">
            <a href="#" className="icon">🔍</a>
            <a href="#" className="icon">🛒</a>
            <a href="#" className="icon">❤️</a>
          </div>
        </div>
      </header>

      {/* Listagem de Usuários */}
      <div className="usuarios-container">
        <h1 className='titulo-usuario'>Usuários</h1>
        <div className="usuarios-list"> {/* Adicionando wrapper */}
          {
            usuarios.map(usuario => (
              <div key={usuario.id} className="usuario-item">
                <h1 className="usuario-nome">{usuario.nome}</h1>
                <p>Email: {usuario.email}</p>
                <p className="usuario-senha">Senha: {usuario.senha}</p>
                <p className="usuario-datanascimento">Data de Nascimento: {usuario.datanascimento}</p>
                <p className="usuario-telefone">Telefone: {usuario.telefone}</p>
                <p className="usuario-endereco">Endereço: {usuario.endereco}</p>
              </div>
            ))
          }
        </div> {/* Fechando a div aqui */}
      </div>
    </>
  )
}

export default Appi