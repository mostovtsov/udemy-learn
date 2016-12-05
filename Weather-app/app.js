const request = require('request');
const yargs = require('yargs');
const apiEndPoint = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
const statusNotFound = 'ZERO_RESULTS';
const statusOK = 'OK';

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
//Perevalochnaya 25 Gomel

console.log(argv);

var inputAddress = encodeURIComponent(argv.address);

request({
    url: apiEndPoint + inputAddress,
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('Unable to connect to Google servers.')
    } else if (body.status === statusNotFound) {
        console.log('Unbale to find that address');
    } else if (body.status === statusOK) {
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`lat ${body.results[0].geometry.location.lat}`);
        console.log(`lng ${body.results[0].geometry.location.lng}`);
    }
});