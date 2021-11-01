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

    static async getCurrentUser(username) {
        let res = await this.request(`users/${username}`);
        return res.user;
      }
    
    static async getAllChords() {
        let result = await this.request("/chords")
        return result.chords;
    };

    static async getChord(chord_fullname) {
        /// solve CORS problem
        let result = await this.request(`chords/${chord_fullname}`)
        // const result = await this.request("chords", { chord_fullname })
        alert("calling the api from api file")
        console.log(result)
        return result;
    }

      /** Get register token */
    static async signup(data) {
        let result = await this.request("auth/register", data, "post");
        return result.token;
    }

    static async login(data) {
        let result = await this.request("auth/token", data, "post");
        return result.token;
    }
}

export default GuitarApi;

