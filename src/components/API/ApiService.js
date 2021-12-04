import axios from "axios";

export default class ApiService {
	static async getCharacter(name, page = 1) {
		const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`);
		console.log(response);
		return response;
	}

	static async getCharacterById(id) {
		const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
		console.log('dsafs',id);
		console.log('dsafsdasfdsfdsfdsfdsafdsasafdsa',id);
		console.log(response.data);
		return response;
	}
}