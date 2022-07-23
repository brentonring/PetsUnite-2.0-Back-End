const router = require('express').Router();
const db = require('../models');

//Controllers routes for Services
//GET route services - INDEX page
router.get('/', async (req, res) => {
  const foundServices = await db.Service.find();
  try {    
    res.status(200).json(foundServices);
  } catch (err) {
    res.status(500).json(err);
  }
})


//POST add new service
router.post('/', async (req, res) => {
  const newService = await  db.Service.create(req.body);
  try{
    res.json(newService);
  } catch (err) {
      if(err && err.name === 'ValidationError'){
        let message = "Validation Error: "
        for(var field in err.errors){
          message+= `${field} was ${err.errors[field].value}.`
          message+= `${err.errors[field].message}`
        }
        console.log('Validation error message', message);
        res.render('services/new_services', {message});
      } else {
        res.status(500).json(err);
      }
    }
});

//GET show service
router.get('/:id', async (req, res) => {
  try {
  const foundService = await db.Service.findById(req.params.id)
    .populate('comments')
    res.status(200).json(foundService);
  } catch (err) {
    console.log("error", err);
    res.status(500).json(err);
  }
});

//PUT edit service
router.put('/:id', async (req, res) => {
  try {
    const updatedService = await db.Service.findByIdAndUpdate(req.params.id, req.body, {runValidators: true}
      );    
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

//POST comment to service
// router.post('/:id/comment', (req, res) => {
//   console.log('post comment', req.body)
//   if (req.body.author === '') { req.body.author = undefined }
//     req.body.service = req.body.service ? true : false
//     db.Service.findById(req.params.id)
//         .then(services => {
//             db.ServiceComment.create(req.body)
//                 .then(comment => {
//                     services.comments.push(comment.id)
//                     services.save()
//                         .then(() => {
//                             res.redirect(`/services/${req.params.id}`)
//                         })
//                         .catch(err => {
//                             res.render('error404')
//                         })
//                 })
//                 .catch(err => {
//                     res.render('error404')
//                 })
//         })
//         .catch(err => {
//             res.render('error404')
//         })
// })

//DELETE service
router.delete('/:id', async (req, res) => {
  let deletedService = await db.Service.findByIdAndDelete(req.params.id)
  try {
    res.status(303).json(deletedService);
  } catch (err) {
    res.status(500).json(err);
  }  
});

//DELETE comment from pet adoption
// router.delete('/:id/comment/:commentId', (req, res) => {
//   db.ServiceComment.findByIdAndDelete(req.params.commentId)
//         .then(() => {
//             console.log('Success')
//             res.redirect(`/services/${req.params.id}`)
//         })
//         .catch(err => {
//             res.render('error404')
//         })
// })

module.exports = router;