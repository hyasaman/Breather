import axios from "axios";

export const fetchHackerNews = async ({ query, tags, page }) => {
  return axios({
    method: "GET",
    url: `https://hn.algolia.com/api/v1/search?&query=${query}&tags=${tags}&page=${page}`
  }).then(res => {
    return res.data;
  });
};
