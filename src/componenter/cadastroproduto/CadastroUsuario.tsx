                                                                                                                                                                                        import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from 'react-router-dom';
function CadastroUsuario() {
    const navigate = useNavigate()
    const [id, setId] = useState("")
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmarsenha, setConfirmarsenha] = useState("")
    const [datanascimento, setDatanascimento] = useState("")
    const [telefone, setTelefone] = useState("")
    const [endereco, setEndereco] = useState("")
    async function handleForm(event: FormEvent) {
        event.preventDefault()
        try {
            const resposta = await fetch("https://one022a-marketplace-18yz.onrender.com/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: id,
                    nome: nome,
                    email: email,
                    senha: senha,
                    confirmarsenha: confirmarsenha,
                    datanascimento: datanascimento,
                    telefone: telefone,
                    endereco: endereco
                })
            })
            if (resposta.status != 500) {
                alert("Usuário Cadastrado com Sucesso")
                navigate("/")
            }else {
                const mensagem = await resposta.text()
                alert("Erro ao Cadastrar Produto - Error: " + mensagem)
            }
        }
        catch (e) {
            alert("Servidor não está respondendo.")
        }

    }
    function handleId(event: ChangeEvent<HTMLInputElement>) {
        setId(event.target.value)
    }
    function handleNome(event: ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value)
    }
    function handleemail(event: ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value)
    }
    function handlesenha(event: ChangeEvent<HTMLInputElement>) {
        setSenha(event.target.value)
    }
    function handleconfirmarsenha(event: ChangeEvent<HTMLInputElement>) {
        setConfirmarsenha(event.target.value)
    }
    function handledataNascimento(event: ChangeEvent<HTMLInputElement>) {
        setDatanascimento(event.target.value)
    }
    function handletelefone(event: ChangeEvent<HTMLInputElement>) {
        setTelefone(event.target.value)
    }
    function handleendereco(event: ChangeEvent<HTMLInputElement>) {
        setEndereco(event.target.value)
    }
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


            <h1>Cadastro de Usuários</h1>
            <form onSubmit={handleForm}>
                <div>
                    <input placeholder="Id" type="text" name="id" id="id" onChange={handleId} />
                </div>
                <div>
                    <input placeholder="Nome" type="text" name="nome" id="nome" onChange={handleNome} />
                </div>
                <div>
                    <input placeholder="Email" type="text" name="email" id="email" onChange={handleemail} />
                </div>
                <div>
                    <input placeholder="Senha" type="senha" name="senha" id="senha" onChange={handlesenha} />
                </div>
                <div>
                    <input placeholder="Confimar Senha" type="confirmarsenha" name="confirmarsenha" id="confirmarsenha" onChange={handleconfirmarsenha} />
                </div>
                <div>
                    <input placeholder="Data de Nascimento" type="dataNascimento" name="dataNascimento" id="dataNascimento" onChange={handledataNascimento} />
                </div>
                <div>
                    <input placeholder="Telefone (XX) X XXXX-XXXX" type="telefone" name="telefone" id="telefone" onChange={handletelefone} />
                </div>
                <div>
                    <input placeholder="Endereço" type="text" name="endereco" id="endereco" onChange={handleendereco} />
                </div>
                <input type="submit" value="Cadastrar" />
            </form>
        </>
    )
}

export default CadastroUsuario