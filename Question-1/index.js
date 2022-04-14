const fs = require('fs');



fs.readFile('./abc.txt', "UTF-8", (err, data) => {



    if (err) {

        throw err;

    }

    console.log(data);

});