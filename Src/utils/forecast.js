const { response } = require('express')
const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherapi.com/v1/current.json?key=774ce0f814fa40ee856165601211003&q=' + latitude + ',' + longitude

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        }
        else if (response.body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            data = 'The Temperature currently out there in '+response.body.location.name+' is '+response.body.current.temp_c + ' degrees. ' + response.body.current.condition.text+' conditions. It feels like '+response.body.current.feelslike_c+' degrees. '
            callback(undefined, data)
        }
    })
}

module.exports = forecast
