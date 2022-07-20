const router = require("express").Router();
const db = require("../models");

//Controllers routes for Events
//GET route events
router.get("/", async (req, res) => {
  try {
    const foundEvents = await db.Event.find();
    res.status(200).json(foundEvents);
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST add events
router.post("/", async (req, res) => {
  try {
    const foundEvent = await db.Event.create(req.body);
    res.json(foundEvent);
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
    const foundEvent = await db.Event.findById(req.params.id);
    res.status(200).json(foundEvent);
    // .populate("comments")
    // .then((events) => {
    //   console.log(events.comments);
    //   res.render("events/show_events", { events });
    // })
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
  }
});

//POST comment to events
// router.post("/:id/comment", (req, res) => {
//   console.log("post comment", req.body);
//   if (req.body.author === "") {
//     req.body.author = undefined;
//   }
//   req.body.event = req.body.event ? true : false;
//   db.Event.findById(req.params.id)
//     .then((events) => {
//       db.EventComment.create(req.body)
//         .then((comment) => {
//           events.comments.push(comment.id);
//           events
//             .save()
//             .then(() => {
//               res.redirect(`/events/${req.params.id}`);
//             })
//             .catch((err) => {
//               res.render("error404");
//             });
//         })
//         .catch((err) => {
//           res.render("error404");
//         });
//     })
//     .catch((err) => {
//       res.render("error404");
//     });
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
