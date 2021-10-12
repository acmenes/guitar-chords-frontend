import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class GuitarApi {
    static async getAllChords() {
        const result = await axios.get(`${BASE_URL}/chords`)
        return result.data;
    };

    static async getChord() {
        const result = await axios.get(`${BASE_URL}/chords/:chordname`)
        return result.data;
    }
}

export default GuitarApi;