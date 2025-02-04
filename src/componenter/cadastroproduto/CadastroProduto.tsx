import { FormEvent, useState } from "react"
import { useNavigate } from 'react-router-dom';

function CadastroProduto() {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [marca, setMarca] = useState("");
    const [tamanhotela, setTamanhotela] = useState("");
    const [resolucaotela, setResolucaotela] = useState("");
    const [proporcaotela, setProporcaotela] = useState("");
    const [frequenciatela, setFrequenciatela] = useState("");
    const [imagem, setImagem] = useState("");

    async function handleForm(event: FormEvent) {
        event.preventDefault();
        try {
            const resposta = await fetch("https://one022a-marketplace-18yz.onrender.com/produtos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome, marca, tamanhotela, resolucaotela, proporcaotela, frequenciatela, imagem
                })
            });

            if (resposta.status === 200) {
                alert("Produto cadastrado com sucesso");
                navigate("/produtos");
            } else {
                const mensagem = await resposta.text();
                alert("Erro ao cadastrar produto: " + mensagem);
            }
        } catch (e) {
            alert("Servidor não está respondendo.");
        }
    }

    return (
        <>
            <header className="site-header">
                <div className="logo">
                    <img src="logo.png" alt="Logo" />
                </div>
                <div className="header-actions">
                    <button className="produto-button" onClick={() => navigate("/produtos")}>Produtos</button>
                    <button className="cadastroproduto-button" onClick={() => navigate("/cadastro-produto")}>Cadastrar Produtos</button>
                </div>
            </header>

            <div className="container">
                <h1>Cadastro de Produtos</h1>
                <form onSubmit={handleForm}>
                    <div className="input-group">
                        <label htmlFor="nome">Nome</label>
                        <input placeholder="Nome" type="text" id="nome" value={nome} onChange={e => setNome(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="marca">Marca</label>
                        <input placeholder="Marca" type="text" id="marca" value={marca} onChange={e => setMarca(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="tamanhotela">Tamanho</label>
                        <input placeholder="Tamanho" type="text" id="tamanhotela" value={tamanhotela} onChange={e => setTamanhotela(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="resolucaotela">Resolução</label>
                        <input placeholder="Resolução" type="text" id="resolucaotela" value={resolucaotela} onChange={e => setResolucaotela(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="proporcaotela">Proporção</label>
                        <input placeholder="Proporção" type="text" id="proporcaotela" value={proporcaotela} onChange={e => setProporcaotela(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="frequenciatela">Frequência</label>
                        <input placeholder="Frequência" type="text" id="frequenciatela" value={frequenciatela} onChange={e => setFrequenciatela(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="imagem">URL Imagem</label>
                        <input placeholder="URL Imagem" type="text" id="imagem" value={imagem} onChange={e => setImagem(e.target.value)} />
                    </div>
                    <input type="submit" value="Cadastrar" className="submit-btn" />
                </form>
            </div>
        </>
    );
}

export default CadastroProduto;
