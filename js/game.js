"use strict";

import cell from "./cell.js";


export default class game {
    constructor() {
        console.log("game class!");
        this._cells = [];
        for (let i = 0; i < 20; i++) {
            for (let y = 0; y < 20; y++) {
                let state = Math.round(Math.random());
                const Cell = new cell(i, y, state);
                this._cells.push(Cell);
            }
        }
    }

    update() {
        this._cells.forEach(c => {
            c.update();
            // this._cells.function();
        });
        // this._cells.update(this._cells);
    }

    render() {
        this._cells.forEach(c => {
            c.render();
        });
    }
}