var express = require('express');
var router = express.Router();
var models = require('../models')
var bcrypt = require('bcrypt')

/* GET users listing. */
router.get('/',  function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', (req, res) => {
  res.render('auth/login')
})

router.post('/login', (req, res) => {
  const { username, password } = req.body
  models.User.findOne({
    where: {
      username: username
    }
  }).then(user => {
    if(user != null) {
      const checkPassword =  bcrypt.compareSync(password, user.password)
      if(checkPassword === true){
        req.session.user = {
          username: username
        }
        res.redirect('/siswas')
      }else {
        console.log("tisak kosog tapi salah")
        res.redirect('/users/login')
      }
    }else {
      console.log("kosong")
      res.redirect('/users/login')
    }
  })
})

router.get('/logout', (req, res) => {
  req.session.destroy(function(err) {
    if(err){
      console.log(err)
    }else {
      res.redirect('/users/login')
    }
  })
})
module.exports = router;
