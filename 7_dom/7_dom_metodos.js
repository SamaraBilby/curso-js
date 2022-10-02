const calculos = {
    media: function(a, b){
        return (a + b) / 2;
    },

    soma: function(a, b){
        return a + b;
    },

    subtracao: function(a, b){
        return a - b;
    },

    multiplicacao: function(a, b){
        return a * b;
    },

    divisao: function(a, b){
        return a / b;
    },

    setMedia: function(media){
        this.media = media;
    },
    getMedia: function(a, b, c){
        this.media =(a + b + c) / 3
        return this.media;
    }
}

console.log(calculos.media(24,3));
console.log(calculos.soma(24,3));
console.log(calculos.subtracao(24,3));
console.log(calculos.multiplicacao(24,3));
console.log(calculos.divisao(24,3));

calculos.setMedia(1,10,7);

console.log(calculos.media)

calculos.getMedia(3, 5, 7);
console.log(calculos.media)