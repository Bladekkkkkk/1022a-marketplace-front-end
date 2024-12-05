import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from 'react-router-dom';

function CadastroProduto() {
    const navigate = useNavigate()
    const [id, setId] = useState("")
    const [nome, setNome] = useState("")
    const [marca, setMarca] = useState("")
    const [tamanhotela, setTamanhotela] = useState("")
    const [resolucaotela, setResolucaotela] = useState("")
    const [proporcaotela, setProporcaotela] = useState("")
    const [frequenciatela, setFrequenciatela] = useState("")
    const [imagem, setImagem] = useState("")
    async function handleForm(event: FormEvent) {
        event.preventDefault()
        try {
            const resposta = await fetch("https://one022a-marketplace-18yz.onrender.com/produtos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: id,
                    nome: nome,
                    marca: marca,
                    tamanhotela: tamanhotela,
                    resolucaotela: resolucaotela,
                    proporcaotela: proporcaotela,
                    frequenciatela: frequenciatela,
                    imagem: imagem
                })
            })
            if (resposta.status != 500) {
                alert("Produto Cadastro com Sucesso")
                navigate("/produtos")
            }
            else {
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
    function handleMarca(event: ChangeEvent<HTMLInputElement>) {
        setMarca(event.target.value)
    }
    function handleTamanhotela(event: ChangeEvent<HTMLInputElement>) {
        setTamanhotela(event.target.value)
    }
    function handleResolucaotela(event: ChangeEvent<HTMLInputElement>) {
        setResolucaotela(event.target.value)
    }
    function handleProporcaotela(event: ChangeEvent<HTMLInputElement>) {
        setProporcaotela(event.target.value)
    }
    function handleFrequenciatela(event: ChangeEvent<HTMLInputElement>) {
        setFrequenciatela(event.target.value)
    }
    function handleImagem(event: ChangeEvent<HTMLInputElement>) {
        setImagem(event.target.value)
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



      
      <div className="container">
      <h1>Cadastro de Produtos</h1>
      <form onSubmit={handleForm}>
    <div className="input-group">
        <label htmlFor="id">Id</label>
        <input placeholder="Id" type="text" name="id" id="id" onChange={handleId} />
    </div>
    <div className="input-group">
        <label htmlFor="nome">Nome</label>
        <input placeholder="Nome" type="text" name="nome" id="nome" onChange={handleNome} />
    </div>
    <div className="input-group">
        <label htmlFor="marca">Marca</label>
        <input placeholder="Marca" type="text" name="marca" id="marca" onChange={handleMarca} />
    </div>
    <div className="input-group">
        <label htmlFor="tamanhotela">Tamanho</label>
        <input placeholder="Tamanho" type="text" name="tamanhotela" id="tamanhotela" onChange={handleTamanhotela} />
    </div>
    <div className="input-group">
        <label htmlFor="resolucaotela">Resolução</label>
        <input placeholder="Resolução" type="text" name="resolucaotela" id="resolucaotela" onChange={handleResolucaotela} />
    </div>
    <div className="input-group">
        <label htmlFor="proporcaotela">Proporção</label>
        <input placeholder="Proporção" type="text" name="proporcaotela" id="proporcaotela" onChange={handleProporcaotela} />
    </div>
    <div className="input-group">
        <label htmlFor="frequenciatela">Frequência</label>
        <input placeholder="Frequência" type="text" name="frequenciatela" id="frequenciatela" onChange={handleFrequenciatela} />
    </div>
    <div className="input-group">
        <label htmlFor="imagem">URL Imagem</label>
        <input placeholder="URL Imagem" type="text" name="imagem" id="imagem" onChange={handleImagem} />
    </div>
    <input type="submit" value="Cadastrar" className="submit-btn" />
</form>


</div>

        </>
    )
}

export default CadastroProduto