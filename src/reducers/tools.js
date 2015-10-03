import types from 'constants/ToolConstants';

const initialState = {
  items: [],
  searchValue: '',
};

const tools = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_TOOLS:
      return {
        items: action.tools,
        searchValue: '',
      };

    default:
      return state;
  }
};

export default tools;
