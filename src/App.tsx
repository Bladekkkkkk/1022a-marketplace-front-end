import { useEffect, useState } from 'react'
import './App.css'
// Tipo para produtos
type ProdutoType = {
  id: number,
  nome: string,
  preco: string,
  descricao: string,
  imagem: string
}

// Tipo para usuários
type UsuarioType = {
  id: number,
  name: string,
  email: string,
  created_at: string,
  updated_at: string
}

function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([])
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([])

  // useEffect para carregar produtos e usuários
  useEffect(() => {
    // Buscar os produtos
    fetch("http://localhost:8000/produtos")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados))

    // Buscar os usuários
    fetch("https://one022a-marketplace-e90o.onrender.com/usuarios")
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados))
  }, [])

  return (
    <>


      <header className="site-header">


        <nav className="navigation">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="login-button">Login</button>
        </div>
      </header>
      {/* Listagem de Produtos */}
      <div className="produtos-container">
        <h1 className='titulo-produto'>Produtos</h1>
        <div className="produtos-list">
          {
            produtos.map(produto => (
              <div key={produto.id} className="produto-item">
                <h3 className="produto-nome">{produto.nome}</h3> {/* Use h3 para o nome do produto */}
                <div className='container-imagem'>
                  <img src={produto.imagem} alt="Imagem do produto" />
                </div>
                <p className="produto-preco">{produto.preco}</p>
                <p className="produto-descricao">{produto.descricao}</p>
                <button className="botao-comprar">Comprar</button>
              </div>
            ))
          }
        </div>
      </div>

      {/* Listagem de Usuários */}
      <div className="usuarios-container">
        <h1 className='titulo-usuario'>Usuários</h1>
        <div className="usuarios-list"> {/* Adicionando wrapper */}
          {
            usuarios.map(usuario => (
              <div key={usuario.id} className="usuario-item">
                <h1 className="usuario-nome">{usuario.name}</h1>
                <p>Email: {usuario.email}</p>
                <p>Criado em: {new Date(usuario.created_at).toLocaleDateString()}</p>
                <p>Atualizado em: {new Date(usuario.updated_at).toLocaleDateString()}</p>
              </div>
            ))
          }
        </div> {/* Fechando a div aqui */}
      </div>
    </>
  )
}

export default App