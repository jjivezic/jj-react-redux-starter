
const env = process.env.REACT_APP_ENVIROMENT;
let url;
let sourceUrl ='https://pointsnaps.s3.eu-central-1.amazonaws.com/';
let googleApiKey='AIzaSyBFNk58EV3naa_6yU_Skpc_4l3qSWmsL50';
if (env === "prod") {
    url = "https://pointsnaps.com/"
} else {
    url = "http://localhost:3000/"
}
export { url, sourceUrl, googleApiKey };
