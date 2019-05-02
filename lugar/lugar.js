const axios = require('axios');

const obtenerLugarLatLng  = async (direccion) => {
    const encodeURL = encodeURI(direccion);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
    headers: {'X-RapidAPI-Key': '6a9452cf1emsh81abfc055b05ce7p189a89jsne7ada56dd9e1'}
  });

  

  const resp = await instance.get();

  if(resp.data.Results.length === 0) {
      throw new Error(`NO se encontraron resultados para ${direccion}`)
  }

  const {name, lat, lon } = resp.data.Results[0];
  
  return {
      name, 
      lat,
      lon
  }
   
}

module.exports = {
    obtenerLugarLatLng
}


