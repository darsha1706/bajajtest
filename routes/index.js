var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

router.post("/bfhl",(req,res,next)=>{
    var d = req.body.data;

    var n = [];
    var a= [];
     d.forEach(dt => {
      if(!isNaN(dt))
      {
        n.push(dt);  
      }
      else 
        a.push(dt);
    }  );

    var r  = {
      is_success: true,
      user_id: "darshana_agarwal_17061999",
      email: "darshanaagarwal99@gmail.com",
      roll_number: "PD0924",
      numbers: n,
      alphabets: a

    }
    
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(r));

});

module.exports = router;
