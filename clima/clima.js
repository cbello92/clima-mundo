const axios = require('axios');

const obtenerClima = async (lat, lon) => {

    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d0516152cb2c76d8b4e708e5ebf33842&units=metric`);
    return result.data.main.temp;
}

module.exports = {
    obtenerClima
}
