# PetsUnite-2.0-Back-End
Hello this is a social media project about pets version 2!
You can add, edit, explore different pets to adopt, meet other pets at events, and connect to services for your precious pets. 

## ✨ Requirements
* Any Operating System (ie. MacOS X, Linux, Windows)
* Internet Browser (ie. Google Chrome)
* Source Code Editor (ie. VSCode)
* MongoDB Compass/Atlas
* Postman (for Backend testing if needed)
* npm (use npm start or nodemon to intialize the project)

# Project Plan
- ✨ Overall idea
     * Pet rescue/adopt- post/edit/delete available relocate pets
         * Adoption Data: animal type, breed, gender, name, age, health history, pic url
            * Collection/page 1- adoption
         * Services Data: service, animal type, breed, gender, name, age, health history, pic url
            * Collection/page 2- services (walking, pet sitting, grooming)
         * Events Data: event name, date, time, location, pic url
            * Collection/page 3- events (classes, meet-ups, adoption events)
         * User Data: first name, last name, email/username, password
            * Collection/page 4- profiles (username, passwords)
- ✨ Name: PetsUnite
- ✨ Model:
     * (https://beautifultogethersanctuary.com/available-cats/?gclid=Cj0KCQjwyYKUBhDJARIsAMj9lkGVL4yQ4YWCKbrOpLFicM8EJzeVexBc4lktxWp016mjtaEw5iUCaKYaAqeEEALw_wcBv)

- ✨ Design/look
     * Styling: Bootstrap & React Bootstrap
     * Colors: MyColor.space.com
     * Images: Pixabay.com
     * Font: Google Fonts

- ✨ Verison 1
     * Link: https://pets-unite.herokuapp.com/
     
---
## Project Wireframe/Structure:
  * Home page- welcome page/about
     * Navbar (7 main pages, 1 default page, 3 add, 3 edit, 3 show pages)
        * Register page
            * Use of the website checkboxes (adoption, services, events)
        * Login page
        * Home page
        * Adoption page
            * Add a pet button
            * Edit a pet button
            * Delete a pet button
            * Like Button
        * Services page
            * Add a service button
            * Edit a service button
            * Delete a service button
            * Like button
            * Comment button
        * Events page
            * Add an event button 
            * Edit an event button
            * Delete an event button
            * Going/interested buttons (Facebookesque)
            * Comments
        * Error page *

---
### :hammer_and_wrench: Languages and Tools :
 - ✨ Front-end: React, Bootstrap & React Bootstrap, CSS
 - ✨ Back-end: Javascript (MC skeleton)
   - Packages: Express, React, NodeJS
   - Server-side Rendering: JSX (for testing)
   - Node Modules (to install npm i ….):
     * react-create-app
     * express-react-views
     * dotenv
     * method-override
     * mongoose
     * cors
     * body-parser
     * react
     * react-dom
     * react-router-dom
     * react-bootstrap
     * bootstrap
     * redux
     * react-redux
 - ✨ Database: MongoDb Atlas    

---
## ✨ Future Tasks✨
 - Complete React refactoring
 - Component Function for like button to count
 - Component Function for comments button to count
 - Component Filter tool for show pages
 - Create login page and authentication Components
 - Create personal profile page
 - Create register page
 - Connecting user profiles to list their additions
 - Add Star button to favorite data elements and save starred items to profile


## 👤 Author(s)

* Alissa Makligh: [@alissamak](https://github.com/alissamak)
* Brenton Ring: [@brentonring](https://github.com/brentonring)
* Marisol Rodriguez: [@marisoldrodriguez](https://github.com/marisoldrodriguez)
* Katie Eells: [@kleells](https://github.com/kleells)
* Eric Lowe: [@ericlowe25](https://github.com/ericlowe25)


## 📝 License
MIT License

Copyright (c) 2022 brentonring

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.