"use strict";

class Setting{

    constructor(src,dist){
        this.src = src;
        this.dest = dist;
    }
}

module.exports = function(src,dist){
    return new Setting(src,dist);
};