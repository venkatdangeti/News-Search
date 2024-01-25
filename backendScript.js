var apiKey = "gudcJ94GAQUNf64z83rMQvIC5bneUXGo"
async function searchNews(searchQuery) {
    var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&api-key=${apiKey}`;
    let response = await fetch(queryURL);
    let data = await response.json();
    return data;
 }