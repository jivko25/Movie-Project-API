const router = require('express').Router();
const Movie = require('../models/MovieModel');
// const verify = require('./verifyToken');
// const validateCreateMovie = require('../validation/createMovieValidation');


//Get all movies
router.get('/', async (req, res) => {
    const movies = await Movie.find();
    res.send(movies)
})

//Get movie by id
router.get('/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.send(movie);
})

//Post movie
router.post('/', async (req, res) => {

    // const error = validateCreateMovie(req.body);
    // if(error) return res.status(400).send(error);
    
    const movie = new Movie({
        ownerId : req.body.ownerId,
        title : req.body.title,
        plot : req.body.plot,
        actors : req.body.actors,
        genre : req.body.genre,
        releaseDate : req.body.releaseDate,
        country : req.body.country,
        imageUrl : req.body.imageUrl,
        trailerUrl : req.body.trailerUrl,
        budget : req.body.budget,
        rate : req.body.rate,
        votes : req.body.votes,
        oscar : req.body.oscar,
        director : req.body.director,
        screenwriter : req.body.screenwriter
    })
    try {
        const savedMovie = await movie.save();
        res.send(savedMovie);
    } catch (error) {
        res.status(400).send(error)
    }
})

//Delete movie
router.delete('/:id', async (req, res) => {
    const deleted = await Movie.deleteOne({_id : req.params.id});

    if(deleted.deletedCount == 1) return res.send(`Movie with id ${req.params.id} was successfully deleted!`);
    res.send(`Movie with id does not exist!`)
})

//Edit partly(patch) movie
router.patch('/:id', async (req, res) => {
    try {
        // const updatedMovie = await Movie.updateOne({_id : req.params.id}, {title : req.body.title});
        const body = req.body;
        let changes = 0;
        for(prop in body){
            let change;
            switch (prop) {
                case "ownerId":
                    change = {ownerId : req.body[prop]};
                    changes++;
                break;
                case "title":
                    change = {title : req.body[prop]};
                    changes++;
                break;
                case "plot":
                    change = {plot : req.body[prop]};
                    changes++;
                break;
                case "actors":
                    change = {actors : req.body[prop]};
                    changes++;
                break;
                case "genre":
                    change = {genre : req.body[prop]};
                    changes++;
                break;
                case "releaseDate":
                    change = {releaseDate : req.body[prop]};
                    changes++;
                break;
                case "country":
                    change = {country : req.body[prop]};
                    changes++;
                break;
                case "imageUrl":
                    change = {imageUrl : req.body[prop]};
                    changes++;
                break;
                case "trailerUrl":
                    change = {ownerId : req.body[prop]};
                    changes++;
                break;
                case "budget":
                    change = {budget : req.body[prop]};
                    changes++;
                break;
                case "rate":
                    change = {rate : req.body[prop]};
                    changes++;
                break;
                case "votes":
                    change = {votes : req.body[prop]};
                    changes++;
                break;
                case "oscar":
                    change = {oscar : req.body[prop]};
                    changes++;
                break;
                case "director":
                    change = {director : req.body[prop]};
                    changes++;
                break;
                case "screenwriter":
                    change = {screenwriter : req.body[prop]};
                    changes++;
                break;
            
                default:
                    break;
            }
            console.log(change);
            await Movie.updateOne({_id : req.params.id}, change);
        }
        if(changes > 0) return res.send(`${changes} has been made`)
        res.send('No changes has been made!');
    } catch (error) {
        res.send(`Movie with id does not exist!`)
    }
})



module.exports = router;