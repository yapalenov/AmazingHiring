let initialState = {
  name: null,
  reverse: false
}

export default function (state=initialState, action) {
  let newState = {};
  switch (action.type) {
    case 'CHANGE_SORT':
      newState.name = action.payload
      newState.reverse = state.name == action.payload ? !state.reverse : false;
      newState.reverse = !state.name ? false : newState.reverse;
      return newState;
      break;
    default:
      return state;

  }
}
