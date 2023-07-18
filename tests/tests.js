console.log("Importing Modules...");
import { NewsAPIClient, NewsAPIQuery } from "../src/index.js";
import { APIKey } from "../secrets.js";
console.log("Running...");

//var query = new NewsAPIQuery("bitcoin");
var query = new NewsAPIQuery()
    .setKeywords("bitcoin")
    .setFrom("2023-07-17")
    .setTo("2023-08-17")
    .setSortBy("popularity")
    .setDomains("techcrunch.com, thenextweb.com");
var client = new NewsAPIClient(APIKey); //replace APIKey here with your own API key from [https://newsapi.org/docs]
var response = await (client.everything(query));
console.log(response.body);