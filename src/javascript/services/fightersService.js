class FighterService {
  async getFighters() {
    try {
      const endpoint = "repos/sahanr/street-fighter/contents/fighters.json";
      const apiResult = await callApi(endpoint, "GET");

      return JSON.parse(atob(apiResult.content));
    } catch (error) {
      throw error;
    }
  }
  
  async getFightersDetails() {
	// implement this method
	// endpoint - 'repos/sahanr/street-fighter/contents/fighters.json'
  }
}

const fighterService = new FighterService();
