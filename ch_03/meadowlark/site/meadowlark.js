var express = require('express');

var fortunes = [
    "Победи свои страхи, или они победят тебя.",
    "Рекам нужны истоки.",
    "Не бойся неведомого.",
    "Тебя ждет приятный сюрприз.",
    "Будь проще везде, где только можно.",
];


var app = express();

// Установка механизма представления handlebars
var handlebars = require('express-handlebars')
    .create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('home');
});

app.get('/about', function(req, res){
    var randomFortune =
        fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', { fortune: randomFortune });
});


app.use(function(req, res){
    res.status(404);
    res.render('404');
});

app.use(function(err, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost' + app.get('port') + ': нажмите Ctrl+C для завершения');
});