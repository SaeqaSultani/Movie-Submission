// import necessary modules
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import submitForm  from './submit-form.js';


//initialize express app
const app = express();
const PORT = 3001;

// create a movie list
const movieList = [];

//__dirname is setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Set view engine to EJS
app.set('view engine', 'ejs');


//middleware setup
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); 

// Handle GET request to show the form
app.get('/', (req, res) => {
    res.render('index'); 
  });



// Handle POST request from the form submission and render success or failure page
app.post('/submit', submitForm, (req, res) => {
    const { movie, rating } = req.body;
  
    if (req.submitFormFailed) {
      res.status(400).render('failed');
    } else {
        // Save the movie and rating to the movie list
        movieList.push({ movie, rating }); 
      res.status(200).render('success', { movie, rating }); // Pass submitted data
    }
  });

// Handle GET request to show the movie list
app.get('/movies', (req, res) => {
    res.render('movies', { movieList });
  });

//set view engine
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    }
);