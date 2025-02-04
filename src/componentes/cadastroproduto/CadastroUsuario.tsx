import { FormEvent, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

function CadastroUsuario() {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarsenha, setConfirmarsenha] = useState("");
    const [datanascimento, setDatanascimento] = useState("");
    const [telefone, setTelefone] = useState("");
    const [endereco, setEndereco] = useState("");
    const [termosAceitos, setTermosAceitos] = useState(false);

    // Funções de manipulação do estado
    function handleNome(event: ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value);
    }

    function handleEmail(event: ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function handleSenha(event: ChangeEvent<HTMLInputElement>) {
        setSenha(event.target.value);
    }

    function handleConfirmarsenha(event: ChangeEvent<HTMLInputElement>) {
        setConfirmarsenha(event.target.value);
    }

    function handleDatanascimento(event: ChangeEvent<HTMLInputElement>) {
        setDatanascimento(event.target.value);
    }

    function handleTelefone(event: ChangeEvent<HTMLInputElement>) {
        setTelefone(event.target.value);
    }

    function handleEndereco(event: ChangeEvent<HTMLInputElement>) {
        setEndereco(event.target.value);
    }

    function handleTermosAceitos(event: ChangeEvent<HTMLInputElement>) {
        setTermosAceitos(event.target.checked);
    }

    async function handleForm(event: FormEvent) {
        event.preventDefault();

        if (!senha || !confirmarsenha) {
            alert("As senhas não podem estar vazias!");
            return;
        }

        if (senha !== confirmarsenha) {
            alert("As senhas não coincidem!");
            return;
        }

        if (!termosAceitos) {
            alert("Você precisa aceitar os termos e condições.");
            return;
        }

        // Validação do formato de email
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            alert("Por favor, insira um email válido.");
            return;
        }

        try {
            const resposta = await fetch("https://one022a-marketplace-18yz.onrender.com/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nome,
                    email,
                    senha,
                    confirmarsenha,
                    datanascimento,
                    telefone,
                    endereco,
                }),
            });

            if (resposta.ok) {
                alert("Usuário Cadastrado com Sucesso");
                navigate("/usuarios");
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
            <main className="container-usuarios">
                <h1>Criar Conta</h1>
                <div className="signup">
                    <form onSubmit={handleForm} className="form-cadastro">
                        <div className="input-group">
                            <label htmlFor="nome">Nome</label>
                            <input
                                placeholder="Nome"
                                type="text"
                                name="nome"
                                id="nome"
                                value={nome}
                                onChange={handleNome}
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
                                onChange={handleEmail}
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
                                onChange={handleSenha}
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
                                onChange={handleConfirmarsenha}
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
                                onChange={handleDatanascimento}
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
                                onChange={handleTelefone}
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
                                onChange={handleEndereco}
                                required
                            />
                        </div>

                        <div className="terms">
                            <label>
                                <input
                                    type="checkbox"
                                    name="terms"
                                    required
                                    checked={termosAceitos}
                                    onChange={handleTermosAceitos}
                                />
                                Aceito os <a href="#">termos de serviço</a> e a <a href="#">política de privacidade</a>.
                            </label>
                        </div>

                        <button type="submit" className="submit-btn" disabled={!termosAceitos}>
                            Cadastrar
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
}

export default CadastroUsuario;
