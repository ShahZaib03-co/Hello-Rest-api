const express = require('express');
const app = express();  
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Hello API project");
});

app.get("/about" , (req,res) =>{
   res.send(("This is about page of hello API"));
});

app.get("/contact" , (req,res) =>{
   res.send("This page is contacting us info");
});

app.post('/data', (req, res) => {
    const data = req.body;
    // Log the received data
    console.log('Received data:', data);
    
    // Send back a response
    res.json({
        message: "Data received successfully",
        receivedData: data
    });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export{};