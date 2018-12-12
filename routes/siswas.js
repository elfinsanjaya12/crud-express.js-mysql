var express = require('express');
var router = express.Router();
var models = require('../models')
/* GET users listing. */

router.get('/', function(req, res, next) {
    models.Siswa.findAll().then(siswas => {
      res.render('siswa/index', {siswas: siswas})
    }).catch(err => {
      console.log(err)
      res.render('siswa/index')
    })
});

router.get('/delete/:id', (req, res) => {
    const siswaId = req.params.id
    models.Siswa.findOne({where: {id: siswaId}}).then(siswa => {
      return siswa.destroy()
    }).then(siswa => {
      res.redirect('/siswas')
    }).catch(err => {
      console.log(err)
      res.redirect('/siswas')
    })
})

module.exports = router;
