"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("Hello API project");
});
router.get("/about", (req, res) => {
    res.send(("This is about page of hello API"));
});
router.get("/contact", (req, res) => {
    res.send("This is contacting us info page of hello API");
});
router.post('/data', (req, res) => {
    const data = req.body;
    // Log the received data
    console.log('Received data:', data);
    // Send back a response
    res.json({
        message: "Data received successfully",
        receivedData: data
        
    });
   

});

module.exports = router;

