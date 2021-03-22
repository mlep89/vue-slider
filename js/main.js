var root = new Vue({
    el: '#root',
    data: {
    counter_photo: 0,
    pokemon: [
        {
            myName: 'Bulbasaur',
            img: 'images/bulbasaur.png',
            sign: 'earth',
            img_sign: 'images/earth.jpeg'
        },
        {
            myName: 'Ivysaur',
            img: 'images/ivysaur.png',
            sign: 'earth',
            img_sign: 'images/earth.jpeg'
        },
        {
            myName: 'Venusaur',
            img: 'images/venusaur.png',
            sign: 'earth',
            img_sign: 'images/earth.jpeg'
        },
        {
            myName: 'Charmender',
            img: 'images/charmender.png',
            sign: 'fire',
            img_sign: 'images/earth.jpeg'
        },
        {
            myName: 'Charmeleon',
            img: 'images/charmeleon.png',
            sign: 'fire',
            img_sign: 'images/earth.jpeg'
        },
        {
            myName: 'Charizard',
            img: 'images/charizard.png',
            sign: 'fire',
            img_sign: 'images/earth.jpeg'
        },
        {
            myName: 'Squirtle',
            img: 'images/squirtle.png',
            sign: 'water',
            img_sign: 'images/earth.jpeg'
        },
        {
            myName: 'Wartortle',
            img: 'images/wartortle.png',
            sign: 'water',
            img_sign: 'images/earth.jpeg'
        },
        {
            myName: 'Blastoise',
            img: 'images/blastoise.png',
            sign: 'water',
            img_sign: 'images/earth.jpeg'
        }
    ]
    },
    /*created: function() {
        setInterval(() => {
            this.nextClick();
        }, 3000);
    },*/
    methods: {
        prevClick: function() {
            this.counter_photo -= 1;
            if (this.counter_photo < 0) {
                this.counter_photo = (this.pokemon.length -1);
            }
        },
        nextClick: function() {
            this.counter_photo += 1;
            if (this.counter_photo > (this.pokemon.length -1)) {
                this.counter_photo = 0;
            }
        },
        clickPoint: function() {
            
        },
        chooseColor: function(x) {
            if (x == 'earth') {
                return "green";
            }
            else if (x == 'fire') {
                return 'red';
            }
            else if (x == 'water') {
                return 'blue';
            }
        }
    }
    });