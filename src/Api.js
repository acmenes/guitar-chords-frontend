import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://127.0.0.1:3001";

class GuitarApi {
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const mode = "cors";
    const headers = { Authorization: `Bearer ${GuitarApi.token}` };
    const params = method === "get" ? data : {};

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
    return res.user[0];
  }

  static async addChordToUserList(username, chord_fullname) {
    await this.request(
      `users/${username}/chords/${chord_fullname}`,
      {},
      "post"
    );
  }
  static async removeChordFromUserList(username, chord_fullname) {
    await this.request(
      `users/${username}/chords/${chord_fullname}`,
      {},
      "delete"
    );
  }
  /** allow users to edit their chordslist */
  static async markChordDone(username, chord_fullname) {
    await this.request(
      `users/${username}/chords/${chord_fullname}`,
      { chordDone: true },
      "patch"
    );
  }
  static async markChordNotDone(username, chord_fullname) {
    await this.request(
      `users/${username}/chords/${chord_fullname}`,
      { chordDone: false },
      "patch"
    );
  }
  static async getUserChords(username) {
    let res = await this.request(`users/${username}/chords`);
    return res.chordList;
  }

  static async getAllChords() {
    let result = await this.request("/chords");
    return result.chords;
  }

  static async getChord(chord_fullname) {
    /// solve CORS problem
    let result = await this.request(`chords/${chord_fullname}`);
    // const result = await this.request("chords", { chord_fullname })
    console.log(result);
    return result;
  }

  static async getAllProgressions() {
    let result = await this.request("progressions");
    return result.progressions;
  }

  static async getProgression(id) {
    let result = await this.request(`progressions/${id}`);
    console.log(result);
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
