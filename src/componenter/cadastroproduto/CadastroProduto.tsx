import {  ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from 'react-router-dom';
function CadastroProduto(){
    const navigate = useNavigate()
    const [id,setId] = useState("")
    const [nome,setNome] = useState("")
    const [marca,setMarca] = useState("")
    const [tamanhotela,setTamanhotela] = useState("")
    const [resolucaotela,setResolucaotela] = useState("")
    const [proporcaotela,setProporcaotela] = useState("")
    const [frequenciatela,setFrequenciatela] = useState("")
    const [imagem,setImagem] = useState("")
    async function handleForm(event:FormEvent){
        event.preventDefault()
        try{
            const resposta = await fetch("https://one022a-marketplace-18yz.onrender.com/produtos",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    id:id,
                    nome:nome,
                    marca:marca,
                    tamanhotela:tamanhotela,
                    resolucaotela:resolucaotela,
                    proporcaotela:proporcaotela,
                    frequenciatela:frequenciatela,
                    imagem:imagem
                })
            })
            if(resposta.status!=500){
                alert("Produto Cadastro com Sucesso")
                navigate("/")
            }
            else{
                const mensagem = await resposta.text()
                alert("Erro ao Cadastrar Produto - Error: " + mensagem)
            }
        }
        catch(e){
            alert("Servidor não está respondendo.")
        }
        
    }
    function handleId(event:ChangeEvent<HTMLInputElement>){
        setId(event.target.value)
    }
    function handleNome(event:ChangeEvent<HTMLInputElement>){
        setNome(event.target.value)
    }
    function handleMarca(event:ChangeEvent<HTMLInputElement>){
        setMarca(event.target.value)
    }
    function handleTamanhotela(event:ChangeEvent<HTMLInputElement>){
        setTamanhotela(event.target.value)
    }
    function handleResolucaotela(event:ChangeEvent<HTMLInputElement>){
        setResolucaotela(event.target.value)
    }
    function handleProporcaotela(event:ChangeEvent<HTMLInputElement>){
        setProporcaotela(event.target.value)
    }
    function handleFrequenciatela(event:ChangeEvent<HTMLInputElement>){
        setFrequenciatela(event.target.value)
    }
    function handleImagem(event:ChangeEvent<HTMLInputElement>){
        setImagem(event.target.value)
    }
    return(
        <>
            <h1>Meu Componente de Cadastro de Produtos</h1>
            <form onSubmit={handleForm}>
                <div>
                    <input placeholder="Id" type="text" name="id" id="id" onChange={handleId} />
                </div>
                <div>
                    <input placeholder="Nome" type="text" name="nome" id="nome" onChange={handleNome} />
                </div>
                <div>
                    <input placeholder="Marca" type="text" name="marca" id="marca" onChange={handleMarca} />
                </div>
                <div>
                    <input placeholder="Tamanho" type="tamanhotela" name="tamanhotela" id="tamanhotela" onChange={handleTamanhotela} />
                </div>
                <div>
                    <input placeholder="Resolução" type="resolucaotela" name="resolucaotela" id="resolucaotela" onChange={handleResolucaotela} />
                </div>
                <div>
                    <input placeholder="Proporção" type="proporcaotela" name="proporcaotela" id="proporcaotela" onChange={handleProporcaotela} />
                </div>
                <div>
                    <input placeholder="Frequência" type="frequenciatela" name="frequenciatela" id="frequenciatela" onChange={handleFrequenciatela} />
                </div>
                <div>
                    <input placeholder="URL Imagem" type="text" name="imagem" id="imagem" onChange={handleImagem} />
                </div>
                <input type="submit" value="Cadastrar" />
            </form>
        </>
    )
}

export default CadastroProduto