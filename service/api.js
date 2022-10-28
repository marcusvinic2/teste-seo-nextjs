import axios from 'axios'

const ApiNext = axios.create({
	baseURL: "https://fakestoreapi.com"
})

export default ApiNext