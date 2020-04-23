const csv = require('csv-parser');
const fs = require('fs');
// var colors = require('colors');
// const chalk = require('chalk');
// var readlineSync = require('readline-sync');
// var uc = require('upper-case');

var Shipping=require('../model/TestModel') // schema

var multer=require('multer');
//var   moment = require('moment')

var storage = multer.diskStorage({
    destination: function(req, file, cd) {
        cd(null, 'upload/')
    },
    filename: function(req, file, cd) {        
        cd(null,file.originalname) 
    }
})

var uploads = multer({
    storage: storage
}).any('');

////////////////////////////////////////////////////

module.exports.register=(req,res)=>{
    uploads(req, res, (err) => {
        if (err) {
            console.warn(err)
        } else {
            var imagename = req.files;
            var x;
            console.log(imagename)
            console.log(req.path)
            var newArr=imagename.map((result)=>{
                x=result.path; 
              })
              console.log(x)
    fs.createReadStream(x)
  .pipe(csv({
      mapHeaders:({header,index})=>header.trim()
  }))
  .on('data', async(row) => {
    console.info("Show csv data",row)
    console.log(row.loadid);
    console.log(row.po);
    console.log(row.shipperno);
    console.log(row.shippername);
    console.log(row.address);
    console.log(row.city);
    console.log(row.state);
    console.log(row.zipcode);
    var loadid=row.loadid;	
    var po=row.po;
    var shipperno=row.shipperno;	
    var shippername=row.shippername;	
    var address=row.address;	
    var city=row.city;
    var state=row.state;
    var zipcode=row.zipcode;
    var Ship = Shipping({
        loadid:loadid,
        po:po,
        shipperno:shipperno,
        shippername:shippername,
        address:address,
        city:city,
        state:state,
        zipcode:zipcode
    })
    Ship.save(function(data){
        console.log(data);
    })
//     .on('end', () => {
//     console.log('CSV file successfully processed')
// })
   });
}
})
   
       
}


// module.exports.color=(req,res)=>{
//     console.log('i like cake and pies'.underline.red)
// }

// module.exports.chalk1=(req,res)=>{
//     //console.log(chalk.blue('Hello world!'))
//     // var userName = readlineSync.question('May I have your name? ');
//     // console.log('Hi ' + userName + '!');
//     console.log(uc.upperCase("Hello World!"))

// }