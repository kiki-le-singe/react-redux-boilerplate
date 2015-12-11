// http://redux.js.org/docs/recipes/ReducingBoilerplate.html - Async Action Creators

/**
 * Handles all requests to the server.
 */
const API = store => next => action => { // eslint-disable-line
  const {
    types,
    callAPI,
    shouldCallAPI = () => true, // default call API everytime
    payload = {},
  } = action;

  if (!types) {
    // Normal action: pass it on
    return next(action);
  }

  if (
    !Array.isArray(types) ||
    types.length !== 3 ||
    !types.every(type => typeof type === 'string')
  ) {
    throw new Error('Expected an array of three string types.');
  }

  if (typeof callAPI !== 'function') {
    throw new Error('Expected fetch to be a function.');
  }

  // check if the response from request is already in the state.
  // If it is the case, not need to call API.
  if (!shouldCallAPI(store.getState())) {
    return; // eslint-disable-line
  }

  const [requestType, successType, failureType] = types;

  next({
    type: requestType,
    payload,
  });

  return callAPI().then(
    response => next({
      response: response,
      type: successType,
      payload,
    }),
    error => next({
      error: error,
      type: failureType,
      payload,
    })
  );
};

export default API;
