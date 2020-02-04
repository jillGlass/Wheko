const express = require('express')

const db = require('../db/db')

const router = express.Router()

// get route for calling getBirds (returns array of birds)
router.get('/birds', (req, res) => {
  return db.getBirds()
    .then(birds => {
      res.json(birds)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// Put route for resetting the database
router.put('/reset', (req, res) => {
  return db.resetBirds()
    .then((s) => {
      res.json(s)
    })
    .catch(err => {
      res.status(500).send('NEVER HAVE I EVER DATABASE ERROR: ' + err.message)
    })
})

// Put route for changing bird found status to true in db
// router.put('/:id', (req, res) => {
//   const id = Number(req.params.id)
//   return db.foundBird(id)
//     .then((status) => {
//       res.json(status)
//     })
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR:  ' + err.message)
//     })
// })

// Put route for changing number of birds found in db and status of bird
router.put('/:id', (req, res) => {
  const id = Number(req.params.id)
  return db.foundNum(id)
  .then(number => {
    res.json(number)
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})


module.exports = router