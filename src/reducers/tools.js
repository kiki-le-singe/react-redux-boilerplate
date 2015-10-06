import types from 'constants/ToolConstants';

const initialState = {
  item: {},
  items: [],
  searchValue: '',
};

const tools = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_TOOLS:
      return {
        ...state,
        items: action.tools,
      };

    default:
      return state;
  }
};

export default tools;
