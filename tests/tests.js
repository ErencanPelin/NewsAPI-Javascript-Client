console.log("Importing Modules...");
import { NewsAPIClient, NewsAPIQuery } from "../src/index.js";
import { APIKey } from "../secrets.js";
console.log("Running...");

//var query = new NewsAPIQuery("bitcoin");
var query = new NewsAPIQuery()
    .setLanguage("en");
var client = new NewsAPIClient(APIKey); //replace APIKey here with your own API key from [https://newsapi.org/docs]
var response = await (client.sources(query));
console.log(response.body);