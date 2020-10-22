Simple React App for tracking stock data 
Homepage - simple 1 pager explaining what the app is/does
Login - use Auth0 - COMPLETE and private path now working 
Dashboard - allow users to search for stock tickers and save them to 'track' 
CSS to use - https://codepen.io/fossheim/pen/LYVOBRZ
API - Alpha Vantage - API Key: FE9K3L2JE7ENJIKI, URL: https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo
To create graph, best way looks like it will be from this api: https://finnhub.io/docs/api#stock-candles and using just the close price to plot the graph
Can offer different time values by manipulating the API through template literals and changing the required fields in the API documentation. To do so, I'll need to let the user select a date range and convert that to unix time: https://flaviocopes.com/how-to-get-timestamp-javascript/
