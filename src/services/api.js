import axios from "axios";

// URL https://sujeitoprogramador.com/r-api/?api=filmes
// BASE_URL = // https://sujeitoprogramador.com/
// TODOS_FILMES = r-api/?api=filmes
// FILME_UNICO = r-api/?api=filmes/{id} 

const api = axios.create({
    baseURL: "https://sujeitoprogramador.com",
});

export default api;