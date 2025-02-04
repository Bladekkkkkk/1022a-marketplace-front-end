import { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

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
  const [produtos, setProdutos] = useState<ProdutoType[]>([])

  // useEffect para carregar produtos e usuários
  useEffect(() => {
    // Buscar os produtos
    fetch("https://one022a-marketplace-18yz.onrender.com/produtos")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados))
  }, [])

  // Função para excluir um produto
  function handleExcluirProduto(id: number) {
    fetch(`https://one022a-marketplace-18yz.onrender.com/produtos/${id}`, {
      method: 'DELETE'
    })
      .then(resposta => {
        if (resposta.status === 200) {
          alert("Produto excluído com sucesso")
          setProdutos(produtos.filter(produto => produto.id !== id)) // Atualiza a lista de produtos
        } else {
          alert("Erro ao excluir o produto: Confira o terminal do backend")
        }
      })
  }

  return (
    <>
      {/* Listagem de Produtos */}
      <div className="produtos-container">
        <h1 className='titulo-produto'>Monitores</h1>
        <div className="produtos-list">
          {
            produtos.map(produto => (
              <div key={produto.id} className="produto-item">
                <h3 className="produto-nome">{produto.nome}</h3>
                <div className='container-imagem'>
                  <img src={produto.imagem} alt="Imagem do produto" />
                </div>
                <p className="produto-marca">{produto.marca}</p>
                <p className="produto-tamanhotela">{produto.tamanhotela}</p>
                <p className="produto-resolucaotela">{produto.resolucaotela}</p>
                <p className="produto-proporcaotela">{produto.proporcaotela}</p>
                <p className="produto-frequenciatela">{produto.frequenciatela}</p>
                <button className="botao-comprar">Comprar</button>
                <button className="botao-excluir" onClick={() => handleExcluirProduto(produto.id)}>Excluir</button>
                <Link className="botao-alterar" to={`/alterar-produto/${produto.id}`}>Alterar</Link>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
