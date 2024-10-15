import { useEffect, useState } from 'react'
import './App.css'
type ProdutoType = {
    id:number,
    nome:string,
    preco:string,
    descricao:string,
    imagem:string
}
function App() {
  const [nome, setNome] = useState("")
  const [produtos, setProdutos] = useState<ProdutoType []>([])
  //useEffects(O que fazer, quando Fazer) []=> Hora do carregamento da página
  useEffect(() => {
    setNome("Kauã Luiz dos Santos")
    //Buscar os dados do BackENd
    fetch("https://one022a-marketplace-18yz.onrender.com/produtos")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados))
    //Colocar em uma variável
  }, [])

  return (
    <>
      <h1>{nome}</h1>
      <div className="produtos-container">
        {
          produtos.map(produto => {
            return (
              <div key={produto.id} className="produto-item">
                <h1>{produto.nome}</h1>
                <div className='container-imagem'><img src={produto.imagem} alt="Imagem do celular" /></div>
                <p>{produto.preco}</p>
                <p>{produto.descricao}</p>
              </div>
            )
          })
        }

      </div>
    </>
  )
}

export default App