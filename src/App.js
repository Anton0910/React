import React, {useState, useEffect} from 'react';
import Header from './components/Header';

import './App.css';
import backgroungImage from './Imagens/Background.avif'
import './services/api';
import api from './services/api';

/**
 * Componente
 * Propiedade
 * Estado e Imutabilidade
 */


function App() {

    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        api.get('products').then(response =>{
            setProjects(response.data);
        })
    },[]);

    //iseState retorna um array com 2 posições
    // 1. varaivel com seu valor inicial
    // 2.função para atualizarmos esse valor

    async function handleAddProject() {
    
     const response =  await api.post('products',{
        name: `Novo projeto ${Date.now()}`,
	    price: 20,
     });

     const project = response.data;

     setProjects([...projects,project]);
    }

    

    return (
        <>
            <Header title="Projects" />

          
            <ul>
                 { projects.map (project => <li key ={project.id}> {project.name}</li> )}     {/**Exibe project para cada projects existente/** */}
                
            </ul>

        <button type = "button" onClick={handleAddProject}> Adicionar projeto </button>
        </>
    );
}

export default App;