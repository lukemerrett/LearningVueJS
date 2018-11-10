let app = {};

Vue.component("hello-message", {
    props: ["name"],
    template: "<div>{{name}}</div>"
})
Vue.component("shopping-item", {
    props: ["item"],
    template: "<li>{{item.name}}</li>"
})

window.onload = function() {
    app = new Vue({
        el: '#app',
        data: {
            name: "Luke",
            welcome_message: 'Hello Vue',
            hover_msg: 'You loaded this page on ' + new Date().toLocaleString(),
            seen: true,
            todos: [
                { text: "Make pancakes!" }
            ],
            shopping_list: [
                { id: 0, name: "Buy milk" },
                { id: 1, name: "Buy eggs" },
                { id: 2, name: "Buy flour" }
            ]
        },
        methods: {
            reverseMessage: function() {
                this.welcome_message = this.welcome_message.split('').reverse().join('')
            }
        }
    })
}
