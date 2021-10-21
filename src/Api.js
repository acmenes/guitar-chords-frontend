import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

class GuitarApi {
    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${GuitarApi.token}` };
        const params = (method === "get")
            ? data
            : {};

        try {
            return (await axios({ url, method, data, params, headers })).data;
            } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
            }
    }
    
    static async getAllChords(chord_fullname) {
        // const result = await axios.get(`${BASE_URL}/chords`)
        // return result.data;

        let res = await this.request(`chords`, {chord_fullname})
        return res.chords
    };

    static async getChord() {
        const result = await axios.get(`${BASE_URL}/chords/:chordname`)
        return result.data;
    }
}

export default GuitarApi;