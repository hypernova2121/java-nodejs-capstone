const express = require("express")
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

    const html = 
    `
    SUMMARY PAGE
    `
    res.send(html)

});

router.get('/test', async (req, res, next) => {
    console.log("Test page requested")
    res.sendFile(__dirname + '/test.html');
});

module.exports = router