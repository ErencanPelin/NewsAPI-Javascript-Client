# NewsAPI-Javascript-Client
A Javascript implementation package of the popular NewsAPI (that actually works)

# How to use
Download the code and move the /Src folder into your own project. The only important file for this to work is the /Src/index.js script which contains the main code that queries the NewsAPI

## 1. Creating a NewsAPIClient object
```js
var client = new NewsAPIClient(APIKey);
```

## 2. Creating a NewsAPIQuery object
```js
var query = new NewsAPIQuery("bitcoin");
```

## 3. Sending the Query
```js
var response = await (client.everything(query)); //where response is a NewsAPIResponse object
console.log(response.status);
console.log(response.body); //contains articles as an array
```
