import request from 'superagent';

import api from 'config/api.json';

const end = (resolve, reject) => {
  return (err, res) => {
    if (res.ok) {
      resolve(res.body);
    } else {
      console.error(api.tools, res.text); // eslint-disable-line
      reject(res.text);
    }
  };
};

class Tool {

  static fetch() {
    return new Promise((resolve, reject) => {
      request
         .get(api.tools)
         .end(end(resolve, reject));
    });
  }

  static fetchOne(id) {
    return new Promise((resolve, reject) => {
      request
         .get(`${api.tools}/${id}`)
         .end(end(resolve, reject));
    });
  }

  static create(tool) {
    return new Promise((resolve, reject) => {
      request
         .post(api.tools)
         .type('form')
         .send(tool)
         .end(end(resolve, reject));
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      request
         .del(`${api.tools}/${id}`)
         .end(end(resolve, reject));
    });
  }
}

export default Tool;
