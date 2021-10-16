const fs = require('fs');


 function getData(fileName) {
    return new Promise((resolve, rejects) => {
         fs.readFile(fileName, (err, data) => {
            if (err)
                rejects(err);
            resolve(data.toString());
        });
    })
};

getData('./input1.txt').then((data) => {
    console.log(data.toString());

});



