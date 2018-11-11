let app = {};

window.onload = function() {
    app = new Vue({
        el: '#app',
        data: {
            isActive: true,
            hasError: false,
            classes: {
                visible: true
            },
            activeClass: "active",
            errorClass: "error",
            activeColor: "red",
            fontSize: 30,
            styles: {
                color: "green",
                align: "right",
                "font-weight": "bold" // Can be fontWeight or font-weight
            }
        },
        methods: {
            
        }
    })
}
