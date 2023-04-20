'use strict'
import fetch from 'node-fetch';

const apiKey = 'e0XZfEKJdWHOm0ulra91aTQYTxCGiOi4';

async function getLocationKey(airportCode) {
    const locationUrl = `http://dataservice.accuweather.com/locations/v1/poi/search?apikey=${apiKey}&q=${airportCode}&type=37`;

    const response = await fetch(locationUrl).catch(err => {
        console.error(err);
    });

    const data = await response.json();
    return data[0].Key;
}


async function getAirportTemp(airportCode) {
    const locationKey = await getLocationKey(airportCode);

    const conditionsUrl = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`;

    const response = await fetch(conditionsUrl).catch(err => {
        console.error(err);
    });

    const data = await response.json();
    return data[0].Temperature.Metric.Value;
}

export default getAirportTemp;