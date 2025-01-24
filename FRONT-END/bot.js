const WebSocket = require('ws');

const derivWs = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=1089'); // Replace with your app ID
const token = 'YOUR_API_TOKEN_HERE';

let stake = 10; // Default stake
let stopLoss = -50; // Example value
let takeProfit = 100; // Example value
let accountBalance = 1000; // Example initial balance
let openTradeId = null;

// Connect to the API
derivWs.on('open', () => {
  console.log('Connected to Deriv API');
  derivWs.send(JSON.stringify({ authorize: token }));
});

// Handle incoming messages
derivWs.on('message', (response) => {
  const data = JSON.parse(response);

  // Example: Handle authorization
  if (data.msg_type === 'authorize') {
    console.log('Authorized:', data.authorize.fullname);

    // Subscribe to volatility index ticks
    derivWs.send(
      JSON.stringify({
        ticks: 'R_50',
        subscribe: 1,
      })
    );
  }

  // Example: Handle price ticks
  if (data.msg_type === 'tick') {
    const tick = data.tick;
    console.log(`Price: ${tick.quote}`);

    // Simple logic to decide trade direction
    const decision = Math.random() > 0.5 ? 'CALL' : 'PUT'; // Replace with Neural Network output
    if (!openTradeId) placeTrade(decision, stake);
  }

  // Handle trade opening
  if (data.msg_type === 'buy') {
    openTradeId = data.buy.contract_id;
    console.log('Trade opened:', openTradeId);
  }

  // Handle profit/loss updates
  if (data.msg_type === 'profit_table') {
    const trades = data.profit_table.transactions;
    const lastTrade = trades[trades.length - 1];

    if (lastTrade.sell_price) {
      const profit = lastTrade.sell_price - lastTrade.buy_price;
      accountBalance += profit;

      if (accountBalance <= stopLoss) {
        console.log('Stop loss reached. Halting trading.');
        derivWs.close();
      } else if (accountBalance >= takeProfit) {
        console.log('Take profit reached. Halting trading.');
        derivWs.close();
      }
    }
  }
});

// Function to place a trade
function placeTrade(direction, amount) {
  derivWs.send(
    JSON.stringify({
      buy: 1,
      price: amount,
      parameters: {
        amount,
        basis: 'stake',
        contract_type: direction,
        currency: 'USD',
        duration: 1,
        duration_unit: 'm',
        symbol: 'R_50',
      },
    })
  );
}
