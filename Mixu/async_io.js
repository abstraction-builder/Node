setTimeout(function() {
    console.log('setTimeout at ' + new Date().toDateString());
}, 1000);

require('fs').readFile('/etc/passwd', function(err, result) {
    console.log(result);
});