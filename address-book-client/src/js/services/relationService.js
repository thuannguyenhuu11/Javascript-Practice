import API_BASE_URL from "../constants/url";
import ApiRequest from "../helpers/apiRequest";

class RelationService {
  /**
   * Constructor of Relation Service object.
   */
  constructor() {
    this.apiRequest = new ApiRequest(API_BASE_URL, "/relations");
  }

  /**
   * Get relation list from database.
   * @returns {Array} relation list.
   */
  getRelationList = async () => {
    const data = await this.apiRequest.get();
    return data;
  };
}

export default RelationService;
