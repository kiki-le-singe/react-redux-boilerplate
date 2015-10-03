import types from 'constants/IndicatorConstants';

const indicator = (state = false, action) => {
  switch (action.type) {
    case types.SHOW_INDICATOR:
      return true;

    case types.HIDE_INDICATOR:
      return false;

    default:
      return state;
  }
};

export default indicator;
