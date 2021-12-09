import axios from "axios";

export default class ApiService {
	static async getCharacter(name, page = 1) {
		const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`);
		return response;
	}

	static async getCharacterById(id) {
		const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
		return response;
	}

	static async getEpisodeDataByFullAdress(link) {
		const response = await axios.get(`${link}`);
		return response;
	}
}