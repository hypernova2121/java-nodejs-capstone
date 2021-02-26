const express = require("express");
const Insured = require("./insured");
const Vehicle = require("./vehicle");
const InsuranceClaim = require("./insuranceclaim");
const router = new express.Router()

router.get('/', async (req, res) => {
    console.log("Home page requested")
    res.sendFile(__dirname + '/home.html');
});

router.post('/summary', async (req, res) => {

    console.log("Summary page requested")
    //console.log('Got body:', req.body);
    
    const body = req.body
    const insured = new Insured(body.fname, body.lname, body.email)
    const vehicle = new Vehicle(body.year, body.make, body.model)
    const insuranceClaim = new InsuranceClaim(body.dateOfClaim, body.claimNumber, 
        body.description, body.claimApproved, insured, vehicle)
    
    res.send(insuranceClaim.toHTML())
});

module.exports = router