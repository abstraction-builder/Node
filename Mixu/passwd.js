const fs = require('fs')

fs.readFile('/etc/passwd', function(err, data) {
    console.log(data);
});
