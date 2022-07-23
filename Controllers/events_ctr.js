const router = require("express").Router();
const db = require("../models");

//Controllers routes for Events
//GET route events - INDEX page
router.get("/", async (req, res) => {
  const foundEvents = await db.Event.find();
  try {    
    res.status(200).json(foundEvents);
    console.log(foundEvents)
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST add new events
router.post("/", async (req, res) => {
  const newEvent = await db.Event.create(req.body);
  try {    
    res.json(newEvent);
  } catch (err) {
    if (err && err.name === "ValidationError") {
      let message = "Validation Error: ";
      for (var field in err.errors) {
        message += `${field} was ${err.errors[field].value}.`;
        message += `${err.errors[field].message}`;
      }
      console.log("Validation error message", message);
      res.render("services/new_events", { message });
    } else {
      res.status(500).json(err);
    }
  }
});

//GET show events
router.get("/:id", async (req, res) => {
  try {
    const foundEvent = await db.Event.findById(req.params.id)
    .populate('comments')
    res.status(200).json(foundEvent);    
  } catch (err) {
    console.log("error", err);
    res.status(500).json(err);
  }
});

//PUT edit events
router.put("/:id", async (req, res) => {
  try {
    const updatedEvent = await db.Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { runValidators: true }
    );
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

////Post comment to events
// router.post('/:id/comment', async (req, res) => {
//   if (req.body.author === '') { req.body.author = undefined }
//     req.body.event = req.body.event ? true : false
//     try{
//         let addEventComment = await db.EventComment.create(req.body)
//         res.status(200).json(addEventComment)
//     }
//     catch(err){
//         res.status(500).json(err)
//     }
// });

//DELETE events
router.delete("/:id", async (req, res) => {
  try {
    const deletedEvent = await db.Event.findByIdAndDelete(req.params.id);
    res.status(303).json(deletedEvent);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE comment from pet adoption
// router.delete("/:id/comment/:commentId", (req, res) => {
//   db.EventComment.findByIdAndDelete(req.params.commentId)
//     .then(() => {
//       console.log("Success");
//       res.redirect(`/events/${req.params.id}`);
//     })
//     .catch((err) => {
//       res.render("error404");
//     });
// });

module.exports = router;
