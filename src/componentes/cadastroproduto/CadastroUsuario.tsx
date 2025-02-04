import {  ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from 'react-router-dom';



function CadastroUsuario(){
    const navigate = useNavigate()
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmarsenha, setConfirmasenha] = useState("")
    const [datanascimento, setDatanascimento] = useState("")
    const [telefone, setTelefone] = useState("")
    const [endereco, setEndereco] = useState("")
    async function handleForm(event: FormEvent){
        event.preventDefault()
        try {
            const resposta = await fetch("https://one022a-marketplace-18yz.onrender.com/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome: nome,
                    email: email,
                    senha: senha,
                    confirmarsenha: confirmarsenha,
                    datanascimento: datanascimento,
                    telefone: telefone,
                    endereco: endereco
                })
            })
            if(resposta.status!=500){
                alert("Usuário Cadastro com Sucesso")
                navigate("/usuarios")
            }
            else{
                const mensagem = await resposta.text()
                alert("Erro ao Cadastrar Usuário - Error: "+mensagem)
            }
        }
        catch(e){
            alert("Servidor não está respondendo.")
        }
        
    }
    function handleNome(event: ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value)
    }
    function handleEmail(event: ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value)
    }
    function handleSenha(event: ChangeEvent<HTMLInputElement>) {
        setSenha(event.target.value)
    }
    function handleConfirmarsenha(event: ChangeEvent<HTMLInputElement>) {
        setConfirmasenha(event.target.value)
    }
    function handleDatanascimento(event: ChangeEvent<HTMLInputElement>) {
        setDatanascimento(event.target.value)
    }
    function handleTelefone(event: ChangeEvent<HTMLInputElement>) {
        setTelefone(event.target.value)
    }
    function handleEndereco(event: ChangeEvent<HTMLInputElement>) {
        setEndereco(event.target.value)
    }
    return(
        <>

      
      <div className="container">
      <h1>Cadastro de Usuarios</h1>
      <form onSubmit={handleForm}>
    <div className="input-group">
        <label htmlFor="nome">Nome</label>
        <input placeholder="Nome" type="text" name="nome" id="nome" onChange={handleNome} />
    </div>
    <div className="input-group">
        <label htmlFor="email">Email</label>
        <input placeholder="Email" type="text" name="email" id="email" onChange={handleEmail} />
    </div>
    <div className="input-group">
        <label htmlFor="senha">Senha</label>
        <input placeholder="Senha" type="text" name="senha" id="senha" onChange={handleSenha} />
    </div>
    <div className="input-group">
        <label htmlFor="confirmarsenha">Confirmar Senha</label>
        <input placeholder="Confirmar Senha" type="text" name="confirmarsenha" id="confirmarsenha" onChange={handleConfirmarsenha} />
    </div>
    <div className="input-group">
        <label htmlFor="datanascimento">Data Nascimento</label>
        <input placeholder="Data nascimento" type="text" name="datanascimento" id="datanascimento" onChange={handleDatanascimento} />
    </div>
    <div className="input-group">
        <label htmlFor="telefone">Telefone</label>
        <input placeholder="Telefone" type="text" name="telefone" id="telefone" onChange={handleTelefone} />
    </div>
    <div className="input-group">
        <label htmlFor="endereco">Endereço</label>
        <input placeholder="Endereco" type="text" name="endereco" id="endereco" onChange={handleEndereco} />
    </div>
    <input type="submit" value="Cadastrar" className="submit-btn" />
    </form>
    
    </div>
        </>
    )
}

export default CadastroUsuario