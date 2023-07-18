# NewsAPI-Javascript-Client
A Javascript implementation package of the popular NewsAPI (that actually works)

# How to use
Download the code and move the /Src folder into your own project. The only important file for this to work is the /Src/index.js script which contains the main code that queries the NewsAPI

## 1. Creating a NewsAPIClient object
```js
var client = new NewsAPIClient(APIKey); //replace APIKey with your own API key as a string
var client = new NewsAPIClient("1234567890"); //like this
```

## 2. Creating a NewsAPIQuery object
Settings keywords:
```js
var query = new NewsAPIQuery("bitcoin-crypto");
```
From and To dates
```js
var query = new NewsAPIQuery("bitcoin-crypto", "2023-07-18", "2023-08-18");
```
SortBy
```js
var query = new NewsAPIQuery("bitcoin-crypto", "2023-07-18", "2023-08-18", "popularity");
var query = new NewsAPIQuery("bitcoin-crypto", "2023-07-18", "2023-08-18", "publishedAt");
var query = new NewsAPIQuery("bitcoin-crypto", "2023-07-18", "2023-08-18", "relevancy");
```

## 3. Sending the Query
```js
var response = await (client.everything(query)); //where response is a NewsAPIResponse object
console.log(response.status);
console.log(response.body); //contains articles as an array
```
