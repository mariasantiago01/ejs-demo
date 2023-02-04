var express = require('express');
var app = express();

//sets ejs as the view engine for the Express app
app.set('view engine', 'ejs');

//use res.render to load ip an ejs view file

//index page
app.get('/', (req, res) => {
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";
    
    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    })
});

//about page
app.get('/about', (req, res) => {
    res.render('pages/about');
});

app.listen(8080);
console.log('Server is running on port 8080...');




