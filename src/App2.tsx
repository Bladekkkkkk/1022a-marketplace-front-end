import { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

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

  // useEffect para carregar usuários
  useEffect(() => {
    // Buscar os usuários
    fetch("https://one022a-marketplace-18yz.onrender.com/usuarios")
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados))
  }, [])
  function handleExcluirUsuario(id: number) {
    fetch(`https://one022a-marketplace-18yz.onrender.com/usuarios/${id}`, {
      method: 'DELETE'
    })
      .then(resposta => {
        if (resposta.status === 200) {
          alert("Usuário excluído com sucesso")
          setUsuarios(usuarios.filter(usuario => usuario.id !== id)) // Atualiza a lista de usuários
        } else {
          alert("Erro ao excluir o usuário: Confira o terminal do backend")
        }
      })
  }

  return (
    <>

      {/* Listagem de Usuários */}
      <div className="usuarios-container">
        <h1 className='titulo-usuario'>Usuários</h1>
        <div className="usuarios-list">
          {
            usuarios.map(usuario => (
              <div key={usuario.id} className="usuario-item">
                <h1 className="usuario-nome">{usuario.nome}</h1>
                <p>Email: {usuario.email}</p>
                <p className="usuario-datanascimento">Data de Nascimento: {usuario.datanascimento}</p>
                <p className="usuario-telefone">Telefone: {usuario.telefone}</p>
                <p className="usuario-endereco">Endereço: {usuario.endereco}</p>
                <button className="botao-excluir" onClick={() => handleExcluirUsuario(usuario.id)}>Excluir</button>
                <Link className="botao-alterar" to={`/alterar-usuario/${usuario.id}`}>Alterar</Link>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Appi
