
const env = process.env.REACT_APP_ENVIROMENT;
let url;
let sourceUrl ='sdsdds';
let googleApiKey='dssssssssssss';
if (env === "prod") {
    url = "https://prod..."
} else {
    url = "http://localhost:9000/"
}
export { url, sourceUrl, googleApiKey };
