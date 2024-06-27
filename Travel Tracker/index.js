import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const app = express();
const port = 3000;

const db  = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Get Request
app.get("/", async (req, res) => {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];

  result.rows.forEach((country) => {
    countries.push(country.country_code);
  })

  console.log(result.rows);
  res.render("index.ejs", {countries, total: countries.length});

  db.end();
})

app.listen(port, () =>{
  console.log(`Server is running on port ${port}`);
})