var router=require("express").Router()
var user=require('../controller/user') //controller


router.post('/register',user.register)
// router.post('/color',user.color)
// router.post('/chalk1',user.chalk1)


module.exports=router;
