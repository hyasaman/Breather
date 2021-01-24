const initialState = {};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};
