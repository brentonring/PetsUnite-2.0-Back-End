const db = require('../models');

db.User.create([
    {
      first_name: "Lance",
      last_name: "Weston",
      email: "snakecharmer@mail.com",
      about_me: "I have had at least one snake as a pet for most of my live and am lookig for others who enjoy having snakes.",
      username: "SnakeDad",
      password: "slytherin4ever$$"
    },{
      first_name: "Roberta",
      last_name: "Smith",
      email: "SmithRT@mail.com",
      about_me: "I have a dog named Buddy and am looking for ways to connect with other dog owners in the community",
      username: "DoggoneRight",
      password: "BassetsRBest87!"
    },{
      first_name: "Owen",
      last_name: "Lee",
      email: "footballfan97@mail.com",
      about_me: "Just chillin'...",
      username: "OWowLee",
      password: "GoPackers#1*"
    },{
      first_name: "Lilah",
      last_name: "Parkes",
      email: "LMParkes@mail.com",
      about_me: "I just adopted a Bernese puppy named Hugo. He's 5 months and growning fast!",
      username: "MeandmyBernese",
      password: "HugoBear<3"
    },{
      first_name: "Sergio",
      last_name: "Ortiz",
      email: "SerioO82@mail.com",
      about_me: "I want a bird as a pet but don't know anything wbout them.",
      username: "SergioOrtiz2",
      password: "sergio78910#"
    },{
      first_name: "Stephanie",
      last_name: "McCormick",
      email: "stephMC@email.com",
      about_me: "My cats, Freckles, Audrey and Munchkin are THE BEST! I want to share how adorable they are to everyone!!!",
      username: "crazy_cat_lady",
      password: "ILOVECATS!!!**11"
    }
])

.then(() => {
  console.log('Success!');
  process.exit();
})

.catch(err => {
  console.log('Error', err);
  process.exit();
})