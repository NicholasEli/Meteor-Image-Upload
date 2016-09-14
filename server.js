const fs = require('fs');
const path = process.env['METEOR_SHELL_DIR'] + '/../../../public/images';

Meteor.methods({
  newImage: (filename, fileContents) => {
      let buffer = new Buffer(fileContents, 'base64');
      fs.writeFile(path+'/'+filename, buffer,function (err) {
        if (err) {
            console.log("Error:" + err);
        } else {
            console.log("Success");
        }
      });
  }
});