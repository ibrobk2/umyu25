let bpi = {
  url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
  getData: function() {
    fetch(this.url)
    .then(res=>res.json())
    .then(data=>this.displayData(data))

  },
  displayData: function(data) {
    const {USD, GBP, EUR} = data.bpi;
    document.getElementById('usd').innerHTML = USD.symbol +  USD.rate;
    document.getElementById('gbp').innerHTML = GBP.symbol +  GBP.rate;
    document.getElementById('eur').innerHTML =  EUR.symbol +  EUR.rate;
  }
}

setInterval(() => bpi.getData(), 500);




