const initialState = {
  items: [],
  item: {},
};

export default (state=initialState, action) => {
  if (action.type === 'GET_SESSION_DETAIL_FULFILLED') {
    return {
      item: action.payload,
    };
  }

  return state;
};
