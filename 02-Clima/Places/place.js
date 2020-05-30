const axios = require('axios');

const getDataPlace = async (direccion) => {
    const encodedURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: {
            'X-RapidAPI-Key': 'c243d531b9msh885ff8828bbfc9cp18aa2fjsn1f4e21d69173',
            'content-type':'application/octet-stream',
            'x-rapidapi-host':'devru-latitude-longitude-find-v1.p.rapidapi.com'
        }
      });
    
    const resp = await instance.get();

    if(resp.data.Results.length === 0){
        throw new Error('An error has occurred.');
    }

    const data = resp.data.Results[0];

    return {
        direccion: data.name,
        lat: data.lat,
        lng: data.lon
    };
}

module.exports = {
    getDataPlace
};