import { useEffect, useState } from 'react'
import './filme-info.css'
import { useParams, useHistory } from "react-router-dom";
import api from '../../services/api';

import { toast } from 'react-toastify';


export default function Filme(){
    const {id} = useParams();
    const history = useHistory();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{

        async function loadFilme() {
            const response = await api.get(`r-api/?api=filmes/${id}`)

            if(response.data.length === 0){
                // Tentou acessar com o id inexistente e redureciona para home
                history.replace('/');
                return;
            }

            setFilme(response.data);
            setLoading(false);
        }
        loadFilme();

        return () => {
            console.log('COMPONENTE DESMONTADO')
          }
    },[history, id]);


    function salvaFilme(){
        const minhaLista = localStorage.getItem('filmes');

        let filmesSalvos = JSON.parse(minhaLista) || [];

        // Verifica se ja existe o filme na lista
        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)
        if(hasFilme){
            toast.error('O filme já existe na lista')
            //alert("O filme já existe na lista");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
        // alert('Filme salvo com sucesso!')
        toast.success('Filme salvo com sucesso!')
    }


    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando...</h1>
            </div>
        )
    }



    return(
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome} />

            <h3>Sinopse</h3>
            {filme.sinopse}

            <div className='botoes'>
                <button onClick={ salvaFilme }>Salvar</button>
                <a target="blank" href={`https://www.youtube.com/results?search_query=${filme.nome} trailer`}>
                    Trailer
                </a>
            </div>    
        </div>
    );
}