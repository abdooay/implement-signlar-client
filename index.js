var connection = $.hubConnection();
connection.url = 'http://localhost:28824/realtime'
 
// connection.qs = { 'IsAdmin' : 'true' };
 var hubProxy = connection.createHubProxy('StationsHub');

connection.start()
    .done(function(){ console.log('Now connected, connection ID=' + connection.id); })
    .fail(function(){ console.log('Could not Connect!'); });