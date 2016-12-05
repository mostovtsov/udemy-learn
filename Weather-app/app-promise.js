const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    }).help()
    .alias('help', 'h')
    .argv;

var inputAddress = encodeURIComponent(argv.address);
const apiEndPoint = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
var geocodeUrl = apiEndPoint + inputAddress;


axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    }

    const secretKey = 'e10adaf293fc1b85cd0bd026e2180d85';
    const apiEndPoint = 'https://api.darksky.net/forecast/';
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `${apiEndPoint}${secretKey}/${lat},${lng}?units=si`;
    console.log(response.data.results[0].formatted_address);

    return axios.get(weatherUrl).then((response) => {
        var temporature = response.data.currently.temperature;
        var apparentTemperature = response.data.currently.apparentTemperature;
        console.log(`Current ${temporature} like ${apparentTemperature}`);
    });
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to google API servers');
    } else {
        console.log(e.message);
    }
});