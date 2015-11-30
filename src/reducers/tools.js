import types from 'constants/ToolConstants';

const initialState = {
  item: {},
  items: [],
  searchValue: '',
};

const tools = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TOOLS_SUCCESS:
      return {
        ...state,
        items: action.tools,
      };

    case types.FETCH_TOOL_SUCCESS:
      return {
        ...state,
        item: action.tools,
      };

    default:
      return state;
  }
};

export default tools;
