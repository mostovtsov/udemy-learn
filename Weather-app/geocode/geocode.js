const request = require('request');

const apiEndPoint = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
const statusNotFound = 'ZERO_RESULTS';
const statusOK = 'OK';

var geocodeAddress = (address, callback) => {
    var inputAddress = encodeURIComponent(address);

    request({
        url: apiEndPoint + inputAddress,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Google servers.')
        } else if (body.status === statusNotFound) {
             callback('Unbale to find that address');
        } else if (body.status === statusOK) {
             callback(undefined, {
                 address: body.results[0].formatted_address,
                 latitude: body.results[0].geometry.location.lat,
                 longitude: body.results[0].geometry.location.lng
             });
        }
    });
};

module.exports = {
    geocodeAddress
}