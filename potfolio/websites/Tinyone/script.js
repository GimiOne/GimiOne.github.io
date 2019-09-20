class SPARQLQueryDispatcher {
	constructor( endpoint ) {
		this.endpoint = endpoint;
	}

	query( sparqlQuery ) {
		const fullUrl = this.endpoint + '?query=' + encodeURIComponent( sparqlQuery );
		const headers = { 'Accept': 'application/sparql-results+json' };

		return fetch( fullUrl, { headers } ).then( body => body.json() );
	}
}

const endpointUrl = 'https://query.wikidata.org/sparql';
const sparqlQuery = `SELECT ?item ?IMDb_ID ?sitelink WHERE {
  ?item wdt:P31 wd:Q11424;
    wdt:P345 ?IMDb_ID.
  ?sitelink schema:about ?itemlist;
    schema:isPartOf <https://ru.wikipedia.org/>.
}
LIMIT 10`;

const queryDispatcher = new SPARQLQueryDispatcher( endpointUrl );
queryDispatcher.query( sparqlQuery ).then( console.log );



