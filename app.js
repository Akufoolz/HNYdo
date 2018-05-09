Vue.component('todo-item', {
    props: ['todo'],
    template: 
`
<div class="card">
    <div class="level is-mobile">
        <div class="level-left">
            <div class="level-item">
                <span class="icon is-medium has-text-grey-light">
                    <i class="fas fa-lg fa-check-square"></i>
                </span>
            </div>
            <div class="level-item">
                <span class="title is-5">{{ todo.text }}</span>
            </div>
        </div>
        <div class="level-right">
            <div class="level-item">
                <button class="delete"></button>
            </div>
        </div>
    </div>
</div>
`
})
var activeList = new Vue({
    el: '#activeList',
    data: {
       todoItems: [
           { id: 0, text: "Hello, World!"},
           { id: 1, text: "Punch the baby's face"},
           { id: 2, text: "Kiss the Honey Bunny"}
       ]
    }
})

