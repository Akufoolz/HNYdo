Vue.component('item', {
    template: '#item-template',
    props: ['item']
});

var activeList = new Vue({
    el: '#activeList',
    template: '#activeList-template',
    data: {
        items: [
            { id: 0, text: "Hello, World!" },
            { id: 1, text: "Punch the baby's face" },
            { id: 2, text: "Kiss the Honey Bunny" }
        ]
    },
    methods: {
        removeItem: function(key) {
            this.items.forEach(element => {
                if (element.id == key){
                    this.items.splice(this.items.indexOf(element), 1);
                }
            });
        }
    }
});