import axios from 'axios'

const api = axios.create({
	baseURL: 'https://meuapp.igorsantanasant.repl.co'
})

export default api