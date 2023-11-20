import axios from "axios";

class ApiRequest {
  constructor(baseUrl, path) {
    this.baseUrl = baseUrl;
    this.path = path;
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  /**
   * Send GET HTTP request.
   * @param {String} id(optional)
   * @param {String} query
   * @return {Object|Array} response from server.
   */
  get = async (id, query) => {
    const response = await this.axiosInstance.get(`${this.path}${id ? `/${id}/` : ""}${query ? query : ""}`);
    return response.data;
  };

  /**
   * Send POST HTTP request.
   * @param {Object} data
   * @returns {Object} response from server.
   */
  post = async data => {
    const response = await this.axiosInstance.post(this.path, data);
    return response.data;
  };

  /**
   * Send PUT HTTP request.
   * @param {String} id
   * @param {Object} data
   * @returns {Object} response from server.
   */
  put = async (id, data) => {
    const response = await this.axiosInstance.put(`${this.path}/${id}`, data);
    return response.data;
  };

  /**
   * Send PATCH HTTP request.
   * @param {String} id
   * @param {Object} data
   * @returns {Object} response from server.
   */
  patch = async (id, data) => {
    const response = await this.axiosInstance.patch(`${this.path}/${id}`, data);
    return response.data;
  };

  /**
   * Send DELETE HTTP request.
   * @param {String} id
   * @returns @returns {Object} response from server.
   */
  delete = async id => {
    const response = await this.axiosInstance.delete(`${this.path}/${id}`);
    return response.data;
  };
}

export default ApiRequest;
