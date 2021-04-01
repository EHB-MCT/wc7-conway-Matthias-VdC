"use strict";

import game from './game.js';


function init() {
    const Game = new game();
    console.log(Game.cell);
    Game.update();
    Game.render();

    document.getElementById("step").addEventListener("click", function () {
        game.update();
        game.render();
    });
}

init();