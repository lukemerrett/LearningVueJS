let components = {};

window.onload = function() {
    components.app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
    })

    components.app2 = new Vue({
        el: '#app-2',
        data: {
          message: 'You loaded this page on ' + new Date().toLocaleString()
        }
      })
}
