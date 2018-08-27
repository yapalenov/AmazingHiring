let initialState = {
  title: null,
  reverse: false
}

export default function (state=initialState, action) {
  let newState = {};
  switch (action.type) {
    case 'CHANGE_SORT':
      newState.title = action.payload
      newState.reverse = state.title == action.payload ? !state.reverse : false;
      newState.reverse = !state.title ? false : newState.reverse;
      return newState;
      break;
    default:
      return state;

  }
}
