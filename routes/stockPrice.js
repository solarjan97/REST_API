'use strict'
import fetch from 'node-fetch';

const apiKey = '14e4a68067msh6b4f6c66295a45dp195a43jsn1430bc286846';

async function getStockPrice(stockCode) {
    const url = `https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/${stockCode}`;
    const headers = {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "yahoo-finance15.p.rapidapi.com"
    };
    const response = await fetch(url, { headers }).catch(err => {
        console.error(err);
    });
    const data = await response.json();
    console.log(data);
    return data[0].regularMarketPrice;
}

export default getStockPrice;
