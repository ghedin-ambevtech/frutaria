import React, { useState } from 'react'

const AdicionaFruta = () => {

    const [nome, setNome] = useState('')
    const [quantidade, setQuantidade] = useState(0)

    const AdicionarFruta = event  => {
        event.preventDefault();

    const fruta = {
        id: new Date(),
        nome,
        quantidade 
        }
        console.log('Adicionar fruta', fruta);

    }

    return(
        <form onSubmit={AdicionarFruta}>
            <input
            type="text"
            name={nome}
            placeholder="Fruta"
            required
            Onchange={event => setNome(event.target.value)}
            />

            <input
            type="number"
            name={quantidade}
            placeholder="Quantidade"
            required
            Onchange={event => setQuantidade(event.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    )
}

export default AdicionaFruta