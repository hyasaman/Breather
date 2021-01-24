export const fetchResults = pathParams => ({
  type: "FETCH_ACTION",
  pathParams
});
export const fetchResultsSuccess = response => ({
  type: "FETCH_SUCCESS",
  response
});
export const fetchResultsError = error => ({
  type: "FETCH_ERROR",
  error
});
