const request = require('request');
const secretKey = 'e10adaf293fc1b85cd0bd026e2180d85';
const apiEndPoint = 'https://api.darksky.net/forecast/';
const statusNotFound = 'ZERO_RESULTS';
const statusOK = 'OK';

var getTemperature = (location, callback) => {
    request({
        url: `${apiEndPoint}${secretKey}/${location.lat},${location.lng}?units=si`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to darksky.net servers.')
        } else {
            callback(undefined, {
                temperature: body.currently.temperature
            });
        }
    });
};

module.exports = {
    getTemperature
}