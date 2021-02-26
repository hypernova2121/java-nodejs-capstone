const express = require("express");
const Insured = require("./insured");
const Vehicle = require("./vehicle");
const InsuranceClaim = require("./insuranceclaim");
const router = new express.Router()

router.get('/', async (req, res, next) => {
    console.log("Home page requested")
    res.sendFile(__dirname + '/home.html');
});

router.post('/summary', async (req, res, nest) => {

    console.log("Summary page requested")
    console.log('Got body:', req.body);
    
    //WOW this part was hard to figure out. it's res.send for raw HTML, not render

    //RENDER IS FOR IF YOU HAVE A TEMPLATE THINGY LIKE HANDLEBARS ISNT IT

    const body = req.body
    
    const insured = new Insured(body.fname, body.lname, body.email)
    const vehicle = new Vehicle(body.year, body.make, body.model)
    const insuranceClaim = new InsuranceClaim(body.dateOfClaim, body.claimNumber, 
        body.description, body.claimApproved, insured, vehicle)
    
    res.send(insuranceClaim.toHTML())

});

router.get('/test', async (req, res, next) => {
    console.log("Test page requested")
    res.sendFile(__dirname + '/test.html');
});

module.exports = router