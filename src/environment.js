

const env = process.env.REACT_APP_ENVIROMENT;
let url;
let sourceUrl ='sdsdds';
let googleApiKey='dssssssssssss';
if (env === "prod") {
    url = "https://prod..."
} else {
    url = "http://localhost:3000/"
}
export { url, sourceUrl, googleApiKey };

