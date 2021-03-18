import React from 'react'
import { useSelector } from 'react-redux'
import AdicionaFruta from './AdicionaFruta'
import Fruta from './fruta'

const ListaFrutas = () =>{
    
    const frutas = useSelector(state => state.frutaReducers.frutas)
    
    return(
        <div>
            <h1>Lista de Frutas</h1>

            <AdicionaFruta/>

            {frutas.map(fruta =>(
                <Fruta key={fruta.id} fruta={fruta}/>
            ))}
        </div>
    )
}

export default ListaFrutas