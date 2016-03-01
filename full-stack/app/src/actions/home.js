import * as $ from 'jquery';
import { API } from '../api';

export function getHomeDetail() {

  var fetch = function() {
    var api = new API();
    var url = api.host + 'home';
    return $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
    });
  };

  return {
    type: 'GET_HOME_DETAIL',
    payload: {
      promise: fetch(),
    },
  };
}
