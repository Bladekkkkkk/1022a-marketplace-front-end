import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";


function CadastroUsuario() {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarsenha, setConfirmarsenha] = useState("");
    const [datanascimento, setDatanascimento] = useState("");
    const [telefone, setTelefone] = useState("");
    const [endereco, setEndereco] = useState("");

    async function handleForm(event: FormEvent) {
        event.preventDefault();
        if (senha !== confirmarsenha) {
            alert("As senhas não coincidem!");
            return;
        }

        try {
            const resposta = await fetch("https://one022a-marketplace-18yz.onrender.com/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id,
                    nome,
                    email,
                    senha,
                    datanascimento,
                    telefone,
                    endereco,
                }),
            });

            if (resposta.status !== 500) {
                alert("Usuário Cadastrado com Sucesso");
                navigate("/");
            } else {
                const mensagem = await resposta.text();
                alert(`Erro ao Cadastrar Usuário - Error: ${mensagem}`);
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

        <div className="search-bar">
          <input type="text" placeholder="Busque aqui" />
          <button className="search-button">➤</button>
        </div>

        <div className="header-actions">
        <button
            className="produto-button"
            onClick={() => window.location.href = "produtos"}>
            Produtos
          </button>
        <button
            className="usuario-button"
            onClick={() => window.location.href = "usuarios"}>
            Usuários
          </button>
        <button
            className="cadastroproduto-button"
            onClick={() => window.location.href = "cadastro-produto"}>
            Cadastrar Produtos
          </button>
          <button
            className="login-button"
            onClick={() => window.location.href = "cadastro-usuario"}>
            Cadastrar-se
          </button>
          
          <div className="icons">
            <a href="#" className="icon">🔍</a>
            <a href="#" className="icon">🛒</a>
            <a href="#" className="icon">❤️</a>
          </div>
        </div>
      </header>


      
      <main className="container">
    <h1>Cadastro de Usuário</h1>
    <div className="signup">
        <form onSubmit={handleForm} className="form-cadastro">
            <div className="input-group">
                <label htmlFor="id">ID</label>
                <input
                    placeholder="Id"
                    type="text"
                    name="id"
                    id="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                />
            </div>

            <div className="input-group">
                <label htmlFor="nome">Nome</label>
                <input
                    placeholder="Nome"
                    type="text"
                    name="nome"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
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
                    required
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
                    required
                />
            </div>

            <div className="input-group">
                <label htmlFor="confirmarsenha">Confirmar Senha</label>
                <input
                    placeholder="Confirmar Senha"
                    type="password"
                    name="confirmarsenha"
                    id="confirmarsenha"
                    value={confirmarsenha}
                    onChange={(e) => setConfirmarsenha(e.target.value)}
                    required
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
                    required
                />
            </div>

            <div className="input-group">
                <label htmlFor="telefone">Telefone</label>
                <input
                    placeholder="Telefone (XX) X XXXX-XXXX"
                    type="tel"
                    name="telefone"
                    id="telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    required
                />
            </div>

            <div className="input-group">
                <label htmlFor="endereco">Endereço</label>
                <input
                    placeholder="Endereço"
                    type="text"
                    name="endereco"
                    id="endereco"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    required
                />
            </div>

            <div className="terms">
                <label>
                    <input type="checkbox" name="terms" required />
                    Aceito os <a href="#">termos de serviço</a> e a <a href="#">política de privacidade</a>.
                </label>
            </div>

            <button type="submit" className="submit-btn">Cadastrar</button>
        </form>
    </div>
</main>

        </>
    );
}

export default CadastroUsuario;
