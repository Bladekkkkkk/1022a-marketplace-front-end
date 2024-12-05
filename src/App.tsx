import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

// Tipo para produtos
type ProdutoType = {
  id: number,
  nome: string,
  marca: string,
  tamanhotela: string,
  resolucaotela: string,
  proporcaotela: string,
  frequenciatela: string,
  imagem: string
}

function App() {
  const navigate = useNavigate()
  const [produtos, setProdutos] = useState<ProdutoType[]>([])

  // useEffect para carregar produtos
  useEffect(() => {
    // Buscar os produtos
    fetch("https://one022a-marketplace-18yz.onrender.com/produtos")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados))
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
            <a href="#" className="icon">🔍</a>
            <a href="#" className="icon">🛒</a>
            <a href="#" className="icon">❤️</a>
          </div>
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
                <p className="produto-marca">{produto.marca}</p>
                <p className="produto-tamanhotela">{produto.tamanhotela}</p>
                <p className="produto-resolucaotela">{produto.resolucaotela}</p>
                <p className="produto-proporcaotela">{produto.proporcaotela}</p>
                <p className="produto-frequenciatela">{produto.frequenciatela}</p>
                <button className="botao-comprar">Comprar</button>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
