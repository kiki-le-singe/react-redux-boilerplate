let Root;

if (__DEBUG__) {
  Root = require('./RootDebug');
} else {
  Root = require('./RootProd');
}

export default Root;
