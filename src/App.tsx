import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type ProdutoType = {
  id:number,
  nome:string,
  imagem:string,
  preco:number,
  descricao:number
}

function App() {
  const [nome, setNome] = useState("")
  const [produtos, setProdutos] = useState<ProdutoType[]>([])
  //useEffects(o que fazer, quando Fazer ) [] = > Hora do carregamento da pagina
  useEffect(()=>{
    setNome("Kauã")
  //BUscar os dados do BackEnd
  fetch("https://one022a-marketplace-18yz.onrender.com/produtos")
  .then(resposta=>resposta.json())
  .then(dados=>setProdutos(dados))
  //Colocar em uma variável 
  },[])

  return (
    <>
      <h1>{nome}</h1>
      <div className="produtos-container">
        {
          produtos.map(produto=>{
            return(
          <div key={produto.id} className="produto-item">
          <h1>{produto.nome}</h1>
          <p>{produto.imagem}</p>
          <img src={produto.imagem} alt=""></img>
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
