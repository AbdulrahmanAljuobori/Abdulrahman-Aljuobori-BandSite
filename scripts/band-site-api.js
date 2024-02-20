class BandSiteAPI {
  constructor(apiKEY) {
    this.apikey = apiKEY;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
  }
  async getShows() {
    const result = await axios.get(`${this.baseUrl}/showdates`);

    return result.data;
  }

  async getComments() {
    const result = await axios.get(`${this.baseUrl}/comments`);

    return result.data;
  }

  async postComments(submit) {
    const result = await axios.post(
      `${this.baseUrl}/comments?api_key=${this.apikey}`,
      comment
    );
    return result.data;
  }
}

export default BandSiteAPI;
