const { getDataPlace } = require('./Places/place');
const { getWeather } = require('./Places/weather');

const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Country name'
    }
}).argv;

const getInfo = async () => {
    const direccion = await getDataPlace(argv.direccion);
    const weather = await getWeather(direccion);

    return `La temperatura de ${direccion.direccion} es de: ${weather.temp} grados F.`;
}


getInfo()
    .then(msj => console.log(msj))
    .catch(err => console.log(err));