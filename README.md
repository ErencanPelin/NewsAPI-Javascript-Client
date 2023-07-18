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
```js
var query = new NewsAPIQuery()
    .setKeywords("bitcoin")
    .setFrom("2023-07-17")
    .setTo("2023-08-17")
    .setSortBy("popularity")
    .setDomains("techcrunch.com, thenextweb.com");
```

## 3. Sending the Query
```js
var response = await (client.everything(query)); //where response is a NewsAPIResponse object
console.log(response.status);
console.log(response.body); //contains articles as an array
```
