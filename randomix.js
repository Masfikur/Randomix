function Randomix() {
    this.rand;
    this.color;
    this.array;
    this.multipile;
    
this.rand = function (d) {
this.txt =d;
    return this.txt[(Math.floor(Math.random()*this.txt.length))];
    };
    
this.color = function () {
    this.cls="0123456789abcdef";
    return "#"+this.rand(this.cls)+this.rand(this.cls)+this.rand(this.cls)+this.rand(this.cls)+this.rand(this.cls)+this.rand(this.cls);
    
    };

this.array = function (ar) {
    this.arr =ar;
    return this.rand(this.arr);
    
    };

this.multipile = function (md,c) {
    this.mud=md;
    this.cnt =c;
    this.res ="";
    for(i=0;i<this.cnt;i++) {
        this.res +=this.rand(this.mud);
    }
    return this.res;
    };
}