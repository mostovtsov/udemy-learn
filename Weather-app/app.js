
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather');


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


console.log(argv);

var location;

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
        location = {
            address: results.address,
            lat: results.latitude,
            lng: results.longitude
        }

        weather.getTemperature(location, (errorMessage, results) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`Temperature at ${location.address}: ${results.temperature}`);
            }
        });
    }
});


