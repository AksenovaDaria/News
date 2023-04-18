const _apiBase = "https://newsapi.org/v2/top-headlines?country=us";
const _apiBase2 = "https://newsapi.org/v2/everything?";
const _apiKey = "&apiKey=8b20b02fb0f846f58c0ce5d323422d40";



export const requestAll = (page=1) => `${_apiBase}&pageSize=5&page=${page}${_apiKey}`;



export const requestCategory = (text=8, page = 1) =>
  `${_apiBase}&category=${text}&pageSize=5&page=${page}${_apiKey}`;

  


 export const requestKeyWord = (text=5, page = 1) =>
   `${_apiBase2}q=${text}&pageSize=5&page=${page}${_apiKey}`;
 
