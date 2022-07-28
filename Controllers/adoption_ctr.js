const router = require('express').Router();
const db = require('../models');


//Controllers routes for Adoption
//GET route pet adoption
router.get('/', async (req, res) => {
  const findAdoption = await db.Adoption.find()
  try{
    res.status(200).json(findAdoption)
  }
  catch(err){
    console.log('err', err);
    res.status(500).json(err);
  }
})

//POST add new pet adoption
router.post('/', async (req, res) => {
  let newAdoption = await db.Adoption.create(req.body)
  try{
    res.status(200).json(newAdoption)
  }
  catch(err){
    if(err && err.name === 'ValidationError'){
        let message = "Validation Error: "
        for(var field in err.errors){
          message+= `${field} was ${err.errors[field].value}.`
          message+= `${err.errors[field].message}`
        }
        console.log('Validation error message', message)
        res.status(500).json({message})
      }
      else{
        res.status(500).json(err);
      }
  }
})

//comments doesnt work
//GET show one pet adoption
router.get('/:id', async (req, res) => {    
    let foundOneAdoption = await db.Adoption.findById(req.params.id)
    .populate('comments')
    // console.log(foundOneAdoption)
    //   var adoptComments = [];
    //   foundOneAdoption.comments.forEach(comment => {
    //     adoptComments.push(db.AdoptComment.findById(comment))
    //   });
    // console.log(adoptComments)
    try{
        res.status(200).json(foundOneAdoption)
        // let allComments = .populate('comments')
        // res.status(200).json(foundOneAdoption.populate('comments'))
    }
    catch(err){
        res.status(500).json(err)
    }
})

//PUT edit one pet adoption
router.put('/:id', async (req, res) => {
  let editOneAdoption = await db.Adoption.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
  try{
    res.status(200).json(editOneAdoption)
  }
  catch(err){
    res.status(500).json(err)
  }
});

//Post comment to pet adoption
router.post('/:id', async (req, res) => {
  if (req.body.author === '') { req.body.author = undefined }
    req.body.adopt = req.body.adopt ? true : false
    try{
        let addAdoptionComment = await db.AdoptComment.create(req.body)
        res.status(200).json(addAdoptionComment)
    }
    catch(err){
        res.status(500).json(err)
    }
});

//DELETE pet adoption
router.delete('/:id', async (req, res) => {
  let deletedAdoption = await db.Adoption.findByIdAndDelete(req.params.id)
  try{
    res.status(303).json(deletedAdoption)
  }
  catch(err){
    res.status(500).json(err)
  }
});

//DELETE comment from pet adoption
router.delete('/:id/:commentId', async (req, res) => {
  let deletedAdoptionComment = await db.AdoptComment.findByIdAndDelete(req.params.commentId)
  try{
    console.log('Success')
    res.status(303).json(deletedAdoptionComment)
  }
  catch(err){
    res.status(500).json(err)
  }
})

module.exports = router;