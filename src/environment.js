
const env = process.env.REACT_APP_ENVIROMENT;
let url;
let sourceUrl ='someurl';
let googleApiKey='keyfjfjkslskls';
if (env === "prod") {
    url = "https://productionUrl"
} else {
    url = "http://localhost:9000/"
}
export { url, sourceUrl, googleApiKey };
