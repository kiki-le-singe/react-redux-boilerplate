let store;

if (__DEV__) {
  store = require('./configureStoreDev');
} else {
  store = require('./configureStoreProd');
}

export default store;
