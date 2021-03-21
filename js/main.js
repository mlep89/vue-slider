var root = new Vue({
    el: '#root',
    data: {
    counter_photo: 0,
    images: [
        'images/bulbasaur.png',
        'images/ivysaur.png',
        'images/venusaur.png'
    ],
    names: [
        'Bulbasaur',
        'Ivysaur',
        'Venusaur',
    ],
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
                this.counter_photo = (this.images.lenght -1);
            }
        },
        nextClick: function() {
            this.counter_photo += 1;
            if (this.counter_photo > (this.images.length -1)) {
                this.counter_photo = 0;
            }
        },
        clickPoint: function() {
            
        }
    }
    });