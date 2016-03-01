class API {
  constructor() {
    var host = window.location.hostname;
    var port = window.location.port;

    if (port === '8080') {
      port = '5000';
    }

    // update host port if needed in dev
    this.host = '//' + host + ':' + port + '/api/';
  }

  host() {
    return this.host;
  }
}

export { API };
