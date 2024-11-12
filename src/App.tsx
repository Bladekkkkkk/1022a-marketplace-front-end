import { useEffect, useState } from 'react'
import './App.css'
type ProdutoType = {
    id:number,
    nome:string,
    preco:string,
    descricao:string,
    imagem:string
}
// Tipo para Usuario
type UsuarioType = {
  id: number,
  name: string,
  email: string,
  created_at: string,
  updated_at: string
}

function App() {
  const [nome, setNome] = useState("")
  const [produtos, setProdutos] = useState<ProdutoType []>([])
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([])
  //useEffects(O que fazer, quando Fazer) []=> Hora do carregamento da página
  useEffect(() => {
    setNome("Kauã Luiz dos Santos")
    //Buscar os dados do BackENd
    fetch("http://localhost:8000/produtos")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados))
    //Colocar em uma variável
  }, [])

  useEffect(() => {
    fetch("http://localhost:8000/usuarios")
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados))
  }, [])

return (
    <>
      <h1>{nome}</h1>
      
      {/* Seção de Produtos */}
      <h2>Produtos</h2>
      <div className="produtos-container">
        {produtos.map(produto => {
          return (
            <div key={produto.id} className="produto-item">
              <h3>{produto.nome}</h3>
              <div className='container-imagem'>
                <img src={produto.imagem} alt="Imagem do produto" />
              </div>
              <p><strong>Preço:</strong> {produto.preco}</p>
              <p><strong>Descrição:</strong> {produto.descricao}</p>
            </div>
          )
        })}
      </div>

      {/* Seção de Usuários */}
      <h2>Usuários</h2>
      <div className="usuarios-container">
        {usuarios.map(usuario => {
          return (
            <div key={usuario.id} className="usuario-item">
              <h3>{usuario.name}</h3>
              <p><strong>Email:</strong> {usuario.email}</p>
              <p><strong>Data de Criação:</strong> {new Date(usuario.created_at).toLocaleString()}</p>
              <p><strong>Última Atualização:</strong> {new Date(usuario.updated_at).toLocaleString()}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App