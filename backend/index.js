const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 3000;

// Parser za JSON podatke
app.use(bodyParser.json());

// Parser za podatke iz formi
app.use(bodyParser.urlencoded({ extended: true }));


const connection = mysql.createConnection({
    host: 'student.veleri.hr',
    user: 'pmocibob',
    password: '11',
    database: 'pmocibob'
  });
 
app.use(express.urlencoded({ extended: true }));
 
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


app.get("/api/nekretnine", (request, response) => {
    
    connection.query("SELECT * FROM Nekretnina", (error, results) => {
      if (error) throw error;
      response.send(results);
    });
/*
    request - slanje zahtjeva s klijentske strane
    response - slanje odgovora sa serverske strane

    npm install -g nodemon
*/
    //response.send("popis knjiga");
});

app.get("/api/nekretnine/:id", (request, response) => {
    const id = request.params.id;
    connection.query("SELECT * FROM Nekretnina WHERE id = ?", id, (error, results) => {
        if (error) throw error;
        response.send(results);
      });
    //response.send("jedna knjiga "+id);
});

app.post("/api/Opis_nekretnine", (request, response) => {
    const data = request.body;
    opis = [[data.Cijena_nekretnine, data.Kvadratura_nekretnine, data.Kvadratura_nekretnine]]

    connection.query("INSERT INTO opis (Cijena_nekretnine, Kvadratura_nekretnine, Kvadratura_nekretnine) VALUES ?", [rezervacija], (error, results) => {
      if (error) throw error;
      response.send(results);
    });
    
    //response.send("Poslano "+data.id_knjiga);
  });
  
  app.listen(port, () => {
    console.log("Server running at port: " + port);
});