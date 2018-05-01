/* Randomix.js v1.0 By Masfikur Rahman*/

function Randomix() {
    this.rand;
    this.color;
    this.array;
    this.multipile;
    
this.rand = function (d) {
//The root function 
this.txt =d;
    return this.txt[(Math.floor(Math.random()*this.txt.length))];
    };
    
this.color = function () {
//generates random hex color
    this.cls="0123456789abcdef";
    return "#"+this.rand(this.cls)+this.rand(this.cls)+this.rand(this.cls)+this.rand(this.cls)+this.rand(this.cls)+this.rand(this.cls);
    
    };

this.array = function (ar) {
/*Returns random result from given Array*/
    this.arr =ar;
    return this.rand(this.arr);
    
    };

this.multipile = function (md,c) {
/*Generates multipile result from given data as given count*/
    this.mud=md;
    this.cnt =c;
    this.res ="";
    for(i=0;i<this.cnt;i++) {
        this.res +=this.rand(this.mud);
    }
    return this.res;
    };
}
