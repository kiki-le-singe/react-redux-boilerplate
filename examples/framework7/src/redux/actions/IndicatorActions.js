import types from '../constants/IndicatorConstants';

/*
 * action creators
 */

function showIndicator() {
  return {
    type: types.SHOW_INDICATOR,
  };
}

function hideIndicator() {
  return {
    type: types.HIDE_INDICATOR,
  };
}

export default { showIndicator, hideIndicator };
