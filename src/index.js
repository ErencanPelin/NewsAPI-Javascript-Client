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

    topHeadlines = async (query) => {
        let q = "https:newsapi.org/v2/top-headlines?q=" + query.getQuery();
        q += "&apiKey=" + this.APIKey; //append the API key
        console.log(q); //log the query for debugging
        var response = await fetch(q);
        console.log(response);
        return new NewsAPIResponse(response.status, await response.json());
    }

    sources = async (query) => {
        let q = "https:newsapi.org/v2/top-headlines/sources?q=" + query.getQuery();
        q += "&apiKey=" + this.APIKey; //append the API key
        console.log(q); //log the query for debugging
        var response = await fetch(q);
        console.log(response);
        return new NewsAPIResponse(response.status, await response.json());
    }

    verifyAPIKey() {
        if (this.APIKey == null)
            throw "No API key specified";
    }
}

export class NewsAPIQuery {
    setKeywords(keywords) {
        this.keywords = keywords;
        return this;
    }
    setFrom(from) {
        this.from = from;
        return this;
    }
    setTo(to) {
        this.to = to;
        return this;
    }
    setSortBy(sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    setDomains(domains) {
        this.domains = domains;
        return this;
    }
    setCountry(country) {
        this.country = country;
        return this;
    }
    setCategory(category) {
        this.category = category;
        return this;
    }
    setSources(sources) {
        this.sources = sources;
        return this;
    }
    setLanguage(language) {
        this.language = language;
        return this;
    }

    getQuery() {
        var q = this.keywords;
        if (this.country != null) q += "&country=" + this.country;
        if (this.sources != null) q += "&sources=" + this.sources;
        if (this.category != null) q += "&category=" + this.category;
        if (this.language != null) q += "&language=" + this.language;
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