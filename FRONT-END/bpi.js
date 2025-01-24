function bpi(){
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(data => {
let usd_rate = data.bpi.USD.rate;
let eur_rate = data.bpi.EUR.rate;
let gbp_rate = data.bpi.GBP.rate;

document.getElementById('usd').innerHTML = '&dollar;'+usd_rate;
document.getElementById('eur').innerHTML = '&euro;'+eur_rate;
document.getElementById('gbp').innerHTML = '&pound;'+gbp_rate;
// console.log(`The current price of Bitcoin is ${usd_rate} USD.`);
    });
   
}

setInterval(bpi, 1000);