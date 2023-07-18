# NewsAPI-Javascript-Client
A Javascript implementation package of the popular [NewsAPI](https://newsapi.org/) (that actually works)
It is recommended you view the [NewsAPI documentation](https://newsapi.org/docs) to understand what each parameter does and how the endpoint is structured before using this package.

# How to use
Download the code and move the /Src folder into your own project. The only important file for this to work is the /Src/index.js script which contains the main code that queries the NewsAPI

## 1. Creating a NewsAPIClient object
```js
var client = new NewsAPIClient(APIKey); //replace APIKey with your own API key as a string
var client = new NewsAPIClient("1234567890"); //like this
```

## 2. Creating a NewsAPIQuery object
Everything:
```js
var query = new NewsAPIQuery()
    .setKeywords("bitcoin")
    .setFrom("2023-07-17")
    .setTo("2023-08-17")
    .setSortBy("popularity")
    .setDomains("techcrunch.com, thenextweb.com");
```
Top-Headlines:
```js
var query = new NewsAPIQuery()
    .setKeywords("trump")
    .setCountry("us")
    .setCategory("business");
```

## 3. Sending the Query
Everything:
```js
var response = await (client.everything(query)); //where response is a NewsAPIResponse object
console.log(response.status);
console.log(response.body); //contains articles as an array
```
Top Headlines:
```js
var response = await (client.topHeadlines(query)); //where response is a NewsAPIResponse object
console.log(response.status);
console.log(response.body); //contains articles as an array
```