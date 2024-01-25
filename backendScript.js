var apiKey = "gudcJ94GAQUNf64z83rMQvIC5bneUXGo"
function searchNews(searchQuery) {
    var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&api-key= ${apiKey}`;
    fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        return data
    });
    return data
 }
