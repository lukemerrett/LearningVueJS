let components = {};

window.onload = function() {
    components.app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
    })
}
