const Lugar = require('./lugar/lugar');
const Clima = require('./clima/clima');

const argv = require('yargs')
            .options({
                direccion: {
                    alias: 'd',
                    desc: 'Dirección de donde se obtendrá el clima',
                    demand: true
                }
            }).argv;



//console.log(argv.direccion);

const obtenerInfo = async (direccion) => {
    let mensaje;

    try {
        const coords = await Lugar.obtenerLugarLatLng(direccion);
        const temp = await Clima.obtenerClima(coords.lat, coords.lon);
        return `El clima para ${coords.name} es de ${temp}°.`;    
    } catch (e) {
        return `No se pudo determinar el clima para ${coords.name}`;
    }
}

obtenerInfo(argv.direccion)
            .then(res => console.log(res))
            .catch(err => console.log(err));



  