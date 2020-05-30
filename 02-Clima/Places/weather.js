const axios = require('axios');

const getWeather = async (place) => {
    const apiKey = '398143fcb8b3e657ed5e24e6852e03b6';

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${place.lat}&lon=${place.lng}&appid=${apiKey}`,
      });
    
    const resp = await instance.get();

    if(resp.data.length === 0){
        throw new Error('An error has occurred.');
    }

    return resp.data.main;
}

module.exports = {
    getWeather
};