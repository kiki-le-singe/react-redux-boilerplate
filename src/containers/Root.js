let Root;

if (__DEV__) {
  Root = require('./RootDev');
} else {
  Root = require('./RootProd');
}

export default Root;
