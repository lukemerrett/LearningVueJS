let components = {};

window.onload = function() {
    components.app = new Vue({
        el: '#app',
        data: {
            welcome_message: 'Hello Vue',
            hover_msg: 'You loaded this page on ' + new Date().toLocaleString(),
            seen: true,
            todos: [
                { text: "Buy milk" },
                { text: "Buy eggs" },
                { text: "Buy flour" },
                { text: "Make pancakes!" }
            ]
        },
        methods: {
            reverseMessage: function() {
                this.welcome_message = this.welcome_message.split('').reverse().join('')
            }
        }
    })
}
