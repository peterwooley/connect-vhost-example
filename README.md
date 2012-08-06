= Connect vhosts example
To use the vhosts, edit your `/etc/hosts` and add:

    127.0.0.1 foo
    127.0.0.1 bar
    127.0.0.1 baz

Run it on port 80 with (change the port in `app.js` if you'ure using 80, or just turn off whatever is listening on port 80):

    npm install
    node app.js

To test it, navigate to `http://foo`, `http://bar` and `http://baz` in your browser and node that the appropriate JSON is returned.
