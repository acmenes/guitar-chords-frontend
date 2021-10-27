import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://127.0.0.1:3001";

class GuitarApi {
    static token;

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        const mode = "cors"
        const headers = { Authorization: `Bearer ${GuitarApi.token}` };
        const params = (method === "get")
            ? data
            : {};

        try {
            return (await axios({ url, method, data, params, headers, mode })).data;
            } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
            }
    }
    
    static async getAllChords() {
        const result = await this.request("/chords")
        return result.chords;
    };

    static async getChord(chord_fullname) {
        /// solve CORS problem
        const result = await this.request(`chords/${chord_fullname}`)
        // const result = await this.request("chords", { chord_fullname })
        alert("calling the api from api file")
        console.log(result)
        return result;
    }

    static async testFunc() {
        const result = await axios.get(`${BASE_URL}/chords`)
        return result.data.rows;
    }
}

export default GuitarApi;