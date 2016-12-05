const request = require('request');
const secretKey = 'e10adaf293fc1b85cd0bd026e2180d85';
const apiEndPoint = 'https://api.darksky.net/forecast/';
const statusCodeOK = 200;

var getTemperature = (location, callback) => {
    request({
        url: `${apiEndPoint}${secretKey}/${location.lat},${location.lng}?units=si`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === statusCodeOK) {
            callback(undefined, {
                temperature: body.currently.temperature
            });
        } else {
            callback('Unable to fetch weather.')
        } 
    });
};

module.exports = {
    getTemperature
}