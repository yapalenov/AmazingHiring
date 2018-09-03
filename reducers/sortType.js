let initialState = {
  title: null,
  reverse: false
}

export default function (state=initialState, action) {
  let newState = {};
  switch (action.type) {
    case 'CHANGE_SORT':
      const title = action.payload;
      const reverse = state.title === action.payload
        ? !state.reverse
        : false;
      const newState = {
        title,
        reverse
      }
      return newState;
      break;
    default:
      return state;

  }
}
