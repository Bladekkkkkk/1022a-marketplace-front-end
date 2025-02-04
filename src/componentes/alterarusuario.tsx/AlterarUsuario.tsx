import { useParams, useNavigate } from "react-router-dom";
import { FormEvent, useState, useEffect } from "react";

function AlterarUsuario() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [datanascimento, setDatanascimento] = useState("");
    const [telefone, setTelefone] = useState("");

    useEffect(() => {
        fetch(`https://one022a-marketplace-18yz.onrender.com/usuarios/${id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setNome(dados.nome || "");
                setEmail(dados.email || "");
                setSenha(dados.senha || "");
                setDatanascimento(dados.datanascimento || "");
                setTelefone(dados.telefone || "");
            })
            .catch(() => alert("Erro ao buscar usuário."));
    }, [id]);

    async function handleForm(event: FormEvent) {
        event.preventDefault();
        try {
            const resposta = await fetch(`https://one022a-marketplace-18yz.onrender.com/usuarios/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome,
                    email,
                    senha,
                    datanascimento,
                    telefone
                })
            });

            if (!resposta.ok) {
                const mensagem = await resposta.text();
                alert("Erro ao Alterar Usuário - Error: " + mensagem);
                return;
            }

            alert("Usuário Alterado com Sucesso!");
            navigate("/");
        } catch (e) {
            alert("Servidor não está respondendo.");
        }
    }

    return (
        <div className="container">
            <h1>Alterar Usuário</h1>
            <form onSubmit={handleForm}>
                <div className="input-group">
                    <label htmlFor="nome">Nome</label>
                    <input 
                        placeholder="Nome" 
                        type="text" 
                        name="nome" 
                        id="nome" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        placeholder="Email" 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="senha">Senha</label>
                    <input 
                        placeholder="Senha" 
                        type="password" 
                        name="senha" 
                        id="senha" 
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)} 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="datanascimento">Data de Nascimento</label>
                    <input 
                        placeholder="Data de Nascimento" 
                        type="date" 
                        name="datanascimento" 
                        id="datanascimento" 
                        value={datanascimento} 
                        onChange={(e) => setDatanascimento(e.target.value)} 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="telefone">Telefone</label>
                    <input 
                        placeholder="Telefone" 
                        type="tel" 
                        name="telefone" 
                        id="telefone" 
                        value={telefone} 
                        onChange={(e) => setTelefone(e.target.value)} 
                    />
                </div>
                <input type="submit" value="Alterar" className="submit-btn" />
            </form>
        </div>
    );
}

export default AlterarUsuario;
