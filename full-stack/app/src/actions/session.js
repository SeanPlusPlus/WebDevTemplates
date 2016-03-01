import * as $ from 'jquery';
import { API } from '../api';

export function getSessionDetail() {

  var fetch = function() {
    var api = new API();
    var url = api.host + 'session' + api.ext;
    return $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
    });
  };

  return {
    type: 'GET_SESSION_DETAIL',
    payload: {
      promise: fetch(),
    },
  };
}
