import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './favoritos.css'

import { toast } from 'react-toastify';

export default function Favoritos(){
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        //Busca os filmes salvos em localStorage
        const minhaLista = localStorage.getItem('filmes');
        // Vai vim um json e vai transformar em uma lista
        // Se a lista(array) vim vazia ela vai renderizar a página sem item (|| [])
        setFilmes(JSON.parse(minhaLista) || []);

    },[])

    function handDelete(id){
        // Faz um filtro no array(filmes)
        let filtroFilmes = filmes.filter((item)=> {
            return (item.id !== id)
        })
        setFilmes(filtroFilmes);
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes))
        toast.success('Excluido com sucesso!!!')
    }

    return(
        <div id="meus-filmes">
            <h1>Meus filmes salvos</h1>

            {filmes.length === 0 && <span>Você não possui filme salvo :(</span>}


            <ul>
                {filmes.map((item)=>{
                    return (
                        <li key={item.id}>
                            <span>{item.nome}</span>

                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                
                                <button onClick={ () => handDelete(item.id) }>Excluir</button>
                            </div>

                        </li>
                    )
                }
                    
                )}
            </ul>
        </div>
    )
}