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

router.get('/create', (req,res) => {
  res.render('siswa/create')
})

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

router.post('/create', (req, res) =>{
  const { nama, alamat, kelas } = req.body
  models.Siswa.create({nama, alamat, kelas }).then(siswa => {
    res.redirect('/siswas')
  }).catch(err => {
    console.log(err)
  })
})

router.get('/edit/:id', (req,res) => {
  const siswaId = req.params.id
  models.Siswa.findOne({where: {id: siswaId}}).then(siswa =>{
    res.render('siswa/edit', {siswa:siswa})
  }).catch(err => {
    console.log(err)
    res.redirect('/siswas')
  })
})

router.post('/edit/:id',(req, res) => {
  const siswaId = req.params.id
  const { nama, alamat, kelas } = req.body
  models.Siswa.findOne({where: {id: siswaId}}).then(siswa => {
    return siswa.update({
      nama,
      alamat,
      kelas
    }).then(updateSiswa => {
      res.redirect('/siswas')
    }).catch(err => {
      console.log(err)
      res.redirect('/siswas')
    })
  })
})

module.exports = router;