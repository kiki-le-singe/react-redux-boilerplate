import request from 'superagent';

import api from 'config/api.json';

function fetch(id = null) {
  const endpoint = id ? `${api.tools}/${id}` : api.tools;

  return request.get(endpoint);
}

function create(tool) {
  return request
    .post(api.tools)
    .type('form')
    .send(tool);
}

function del(id) {
  return request.del(`${api.tools}/${id}`);
}

export { fetch, create, del };
