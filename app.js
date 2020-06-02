//.  app.js
var express = require( 'express' ),
    client = require( 'cheerio-httpcli' ),
    app = express();

client.set( 'browser', 'chrome' );
client.set( 'referer', false );

app.get( '/', function( req, res ){
  res.contentType( 'text/plain; charset=utf-8' );
  client.fetch( 'http://tools.up2a.info/ja/requestheaders', {}, 'UTF-8', function( err, $, res0, body ){
    if( err ){
      res.status( 400 );
      res.write( JSON.stringify( err ) );
      res.end();
    }else{
      res.write( $('.YOUR_IP_ADDR').text().trim() );
      res.end();
    }
  });
});

var port = 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );
