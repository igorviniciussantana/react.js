import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom'
import api from './services/api'
import './App.css';

function App() {
	const [noticias, setNoticias] = useState([])

	useEffect(() => {
		api
			.get('/noticias')
			.then(response => {
				setNoticias(response.data)
			})
			.catch(err => {
				console.log('Deu ruim: ', err)
			})
	}, [])

	return (

		<> 
    <div className="cabecalho">
    <h1 className="cabecalhoh1">IGOR NEWS</h1>
    <div className="sobreContato">
    
    <span className="sobre">sobre</span>
    <span className="contato">contato</span>
    </div>
    <hr className="linha1"/>
    <h2 className="cabecalhoh2">Últimas Notícias</h2>
		</div>
     
			<main>
				{
					noticias.map(noticia => {
						return (
              <div className="cardNoticia">
							<Link to={`${noticia._id}`} key={noticia._id} >
								<h1>{noticia.titulo}</h1> <br/>
                <span>{noticia.descricao}</span> <br/>
							</Link>
              </div>
						)
					})
				}
			</main>
			<Outlet />
		</>
	);
}

export default App;