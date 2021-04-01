"use strict";

import game from "./game.js";

export default class cell {
    constructor(x, y, state) {
        this._x = x;
        this._y = y;
        this._state = state;

        this._cell = document.createElement("div");
        this._cell.className = "cell";

        console.log(x, y);

        if (state == 0) {
            this._cell.style.background = "white";
        } else if (state == 1) {
            this._cell.style.background = "black";
        }
    }

    update(cells) {
        console.log("Cell update!");
        const filteredCells = cells.filter(c => {
            if ((this._x - c._x) <= 1 && (this._x - c._x) >= -1 && (this._y - c._y) <= 1 && (this._y - c._y) >= 1) {
                if (!(this._x == c._x && this._y == c._y)) {
                    console.log("Testeroo");
                    if (c._state) {
                        return true;
                    }
                }
            }
        });
    }

    render() {
        console.log("Cell render");
        const container = document.getElementById("container");
        container.insertAdjacentElement("beforeend", this._cell);
    }
}