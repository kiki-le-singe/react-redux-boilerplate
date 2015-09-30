import * as types from 'constants/ToolConstants';

const initialState = {
  tools: [],
  searchValue: '',
};

const tools = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_TOOLS:
      return action.tools;

    default:
      return state.tools;
  }
};

export default tools;
