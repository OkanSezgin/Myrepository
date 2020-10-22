let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Business Contact Model
let Contact = require('../models/contact');

let contactController = require('../controllers/contact')

// GET Route for the Business Contacts List -READ Operation
router.get('/', contactController.displayContactList)

// GET Route for displaying the Edit page - READ Operation
router.get('/edit/:id', contactController.displayEditPage);

// POST Route for processing the Edit page - UPDATE Operation
router.post('/edit/:id', contactController.processEditPage);

// GET to perform Deletion - DELETE Operation
router.get('/delete/:id', contactController.performDelete);

module.exports = router;






/*let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// connect to our Contact Model
let Contact = require('../models/contact');
// GET Route for the Business Contacts List -READ Operation



router.get('/', (req, res, next) => {
    Contact.find((err, contactList) => {
       if(err)
       {
           return console.error(err);
       }
       else 
       {
           
           res.render('contact/list', {title: 'Business Contacts List', ContactList: contactList});
       }
    });
})
// GET Route for displaying the Edit page - UPDATE Operation
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if(err) 
        {
            console.log(err);
        }
        else 
        {
            // show the edit view
            res.render('contact/edit', {title: 'Edit Contact', contact: contactToEdit})
        }
    })
});

// POST Route for processing the Edit page - UPDATE Operation
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Contact.updateOne({_id:id}, updatedContact, (err) => {
        if(err) 
        {
            console.log(err);
            res.end(err);
        }
        else 
        {
            // refresh the business contact list
            res.redirect('/contact-list');
        }
    });
});
// GET to perform Deletion - DELETE Operation
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id:id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else 
        {
            // refresh the business contact list
            res.redirect('/contact-list');
        }
    });
});

module.exports = router;

*/


