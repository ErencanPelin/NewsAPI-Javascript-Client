import { stat } from "fs";

export class NewsAPIClient {
    constructor(apiKey) {
        this.APIKey = apiKey;
        this.verifyAPIKey();
    }

    everything = async (query) => {
        let q = "https:newsapi.org/v2/everything?q=" + query.getQuery();
        q += "&apiKey=" + this.APIKey; //append the API key
        console.log(q); //log the query for debugging
        var response = await fetch(q);
        console.log(response);
        return new NewsAPIResponse(response.status, await response.json());
    }

    verifyAPIKey() {
        if (this.APIKey == null)
            throw "No API key spcified";
    }
}

export class NewsAPIQuery {
    constructor(keywords, from, to, sortBy, domains) {
        this.keywords = keywords,
            this.from = from;
        this.to = to;
        this.sortBy = sortBy;
        this.domains = domains;
    }

    getQuery()
    {
        var q = this.keywords;
        if (this.from != null) q += "&from=" + this.from;
        if (this.to != null) q += "&to=" + this.to;
        if (this.sortBy != null) q += "&sortBy=" + this.sortBy;
        if (this.domains != null) q += "&domains=" + this.domains;
        return q;
    }
}

export class NewsAPIResponse {
    constructor(status, body) {
        this.status = status;
        this.body = body;
    }
}