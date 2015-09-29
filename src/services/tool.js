import request from 'superagent';

import api from 'config/api.json';

class Tool {

    static fetch() {
      return new Promise((resolve, reject) => {
        request
           .get(api.tools)
           .end((err, res) => {
             if (res.ok) {
               resolve(res.body);
             } else {
               console.error(api.tools, res.text); // eslint-disable-line
               reject(res.text);
             }
           });
      });
    }

    static fetchOne(id) {
      return new Promise((resolve, reject) => {
        request
           .get(api.tools + '/' + id)
           .end((err, res) => {
             if (res.ok) {
               resolve(res.body);
             } else {
               console.error(api.tools, res.text); // eslint-disable-line
               reject(res.text);
             }
           });
      });
    }

    static create(tool) {
      return new Promise((resolve, reject) => {
        request
           .post(api.tools)
           .type('form')
           .send(tool)
           .end((err, res) => {
             if (res.ok) {
               resolve(res.body);
             } else {
               console.error(api.tools, res.text); // eslint-disable-line
               reject(res.text);
             }
           });
      });
    }

    static delete(id) {
      return new Promise((resolve, reject) => {
        request
           .del(api.tools + '/' + id)
           .end((err, res) => {
             if (res.ok) {
               resolve(res.body);
             } else {
               console.error(api.tools, res.text); // eslint-disable-line
               reject(res.text);
             }
           });
      });
    }
}

export default Tool;
