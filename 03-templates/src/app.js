import $ from 'jquery';
import router from './router';
import homeTpl from './templates/home.hbs';
import contactTpl from './templates/contact.hbs';
import notFoundTpl from './templates/not-found.hbs';
import playerTpl from './templates/player.hbs';

const $app = $('#app');

const $chessPlayers = {
    'magnus' : {
        name: 'Magnus Carlsen',
        image: 'https://cdn.worldchess.com/static/img/ny2016v2/carlsen.png',
        description: 'is good but not very good'
    },
    'sergey' : {
        name: 'Sergey Karjakin',
        image: 'https://cdn.worldchess.com/static/img/ny2016v2/karjakin.png',
        description: 'is better but also not very good'
    }
}

function index() {
  $app.html(homeTpl());
}

function contact() {
  $app.html(contactTpl());
}

function notFound() {
  $app.html(notFoundTpl());
}

function players(dynamicPart) {
    if(dynamicPart === 'sergey') {
        $app.html(playerTpl($chessPlayers.sergey));
    }
    else if(dynamicPart === 'magnus') {
        $app.html(playerTpl($chessPlayers.magnus));
    }
    else{
        $app.html(notFoundTpl());
    }
}

router('/', index);
router('/contact', contact);
router('/players/:player', players);
router('*', notFound);
router();
