const request = require('request');

const apiEndPoint = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
const statusNotFound = 'ZERO_RESULTS';
const statusOK = 'OK';


var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var inputAddress = encodeURIComponent(address);
        request({
            url: apiEndPoint + inputAddress,
            json: true
        }, (error, response, body) => {
            if (!error && body.status === statusOK) {
                resolve(body);
            } else {
                reject('Unbale to find that address');
            }
        });
    });
};


geocodeAddress('00000')
.then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
}).catch((errorMessage) => {
    console.log(errorMessage);
});