import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './index.css'
import App from './App'
import Noticia from './routes/Noticia'


ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path=':idNoticia' element={<Noticia />} />
				
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
