class API {
  constructor() {
    var host = window.location.hostname;
    var port = window.location.port;

    // update host port if needed in dev
    this.host = '//' + host + ':' + port + '/api/';
    this.ext = '.json';
  }

  host() {
    return this.host;
  }

  ext() {
    return this.ext;
  }
}

export { API };
