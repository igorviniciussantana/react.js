import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import api from '../services/api'
import { Link, Outlet } from 'react-router-dom'
import './Noticia.css';


function Noticia() {
	let params = useParams()

	const [noticia, setNoticia] = useState([])
	
	useEffect(() => {
		api
			.get(`/noticias/visualizar?id=${params.idNoticia}`)
			.then(response => {
				setNoticia(response.data)
			})
			.catch(err => {
				console.log('Deu ruim: ', err)
			})
	}, [])

	return (
    <>
    
				
		
    <div className="divNoticia">
    <div className="cabecalho">
    	<Link to='/' className="homeBut">⌂</Link>
		<h1 className="notTitle">{noticia.titulo}</h1>
    </div>
    <div className="notConteudo">
    <h2 className="autor">{noticia.autor}</h2><br/>
    <h2 className="data">{noticia.dataPublicacao}</h2><br/>
    <article>
    <p className="conteudo">{noticia.conteudo}</p><br/>
    </article>
    </div>
    </div>
  </>
	)
}

export default Noticia