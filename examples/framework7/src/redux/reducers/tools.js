import types from '../constants/ToolConstants';

const initialState = {
  item: {},
  items: [],
  searchValue: '',
  isFetching: false,
  error: false,
};

const tools = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TOOLS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case types.FETCH_TOOLS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error.response,
      };

    case types.FETCH_TOOLS_SUCCESS:
      return {
        ...state,
        items: action.response.body,
        isFetching: false,
        error: false,
      };

    case types.FETCH_TOOL_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case types.FETCH_TOOL_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error.response,
      };

    case types.FETCH_TOOL_SUCCESS:
      return {
        ...state,
        item: action.response.body,
        isFetching: false,
        error: false,
      };

    default:
      return state;
  }
};

export default tools;
