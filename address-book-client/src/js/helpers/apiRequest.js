import axios from 'axios';

class ApiRequest {
  /**
   * Constructor function for ApiRequest object.
   * @param {String} baseUrl
   * @param {String} path
   */
  constructor(baseUrl, path) {
    this.baseUrl = baseUrl;
    this.path = path;
  }

  /**
   * Send GET HTTP request.
   * @param {String} id(optional)
   * @param {String} query
   * @return {Object|Array} response from server.
   */
  get = (id, query) => {
    return this.sendRequest(
      `${this.path}${id ? `/${id}/` : ''}${query ? query : ''}`,
      'GET'
    );
  };

  /**
   * Send POST HTTP request.
   * @param {Object} data
   * @returns {Object} response from server.
   */
  post = (data) => {
    return this.sendRequest(`${this.path}`, 'POST', data);
  };

  /**
   * Send PUT HTTP request.
   * @param {String} id
   * @param {Object} data
   * @returns {Object} response from server.
   */
  put = (id, data) => {
    return this.sendRequest(`${this.path}/${id}`, 'PUT', data);
  };

  /**
   * Send PATCH HTTP request.
   * @param {String} id
   * @param {Object} data
   * @returns {Object} response from server.
   */
  patch = (id, data, query) => {
    return this.sendRequest(`${this.path}/${id}`, 'PATCH', data);
  };

  /**
   * Send DELETE HTTP request.
   * @param {String} id
   * @returns @returns {Object} response from server.
   */
  delete = (id) => {
    return this.sendRequest(`${this.path}/${id}`, 'DELETE');
  };

  /**
   * Send the HTTP request to the API_GATEWAY_URL endpoint.
   * @param {String} method
   * @param {Object} body
   * @return {Object|Array} response from server.
   */
  sendRequest = async (path, method, body) => {
    this.toggleLoading(true);
    const url = `${this.baseUrl}${path}`;
    try {
      const response = await axios({
        method,
        url,
        data: body,
        headers: { 'Content-Type': 'application/json' },
      });
      this.toggleLoading(false);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response ? error.response.data : 'Error while sending request'
      );
    }
  };

  toggleLoading(isShowLoading) {
    const loading = document.querySelector('.loading-overlay');
    if (isShowLoading) {
      loading.classList.add('loading--display');
    } else {
      loading.classList.remove('loading--display');
    }
  }
}

export default ApiRequest;
