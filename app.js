var express = require('express');

var foo = express();
foo.get('/', function(req, res) { res.json("Foo"); });
var bar = express();
bar.get('/', function(req, res) { res.json("Bar"); });
var baz = express();
baz.get('/', function(req, res) { res.json("Baz"); });

express()
  .use(express.vhost('foo', foo))
  .use(express.vhost('bar', bar))
  .use(express.vhost('baz', baz))
  .listen(80)

/* Add the following to your /etc/hosts file
127.0.0.1 foo
127.0.0.1 bar
127.0.0.1 baz
*/
