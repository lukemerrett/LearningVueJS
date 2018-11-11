let app = {};

window.onload = function() {
    app = new Vue({
        el: '#app',
        data: {
            message: "Hello",
            firstName: "Luke",
            lastName: "Merrett",
            fullName: "Luke Merrett"
        },
        // Properties calculated by running the method
        // Can be used the same as data properties, but encapsulate more complex logic
        // Unlike using a method, computed properties are cached based on their dependencies, so more performant on re-render
        // If you used a method (e.g: {{reversedMessage()}}) it will always rerun during a re-render
        computed: {
            reversedMessage: function() {
                return this.message.split("").reverse("").join("")
            },
            // Example of a better way to calculate full name, without having to add 2x watchers and a dummy data property
            betterFullName: function() {
                return this.firstName + " " + this.lastName
            },
            // You can also set up 2 way data binding on computed properties as well
            // By default they are get only if you use the above approach
            twoWayFullName: {
                get: function() {
                    return this.firstName + " " + this.lastName
                },
                set: function(val) {
                    var names = newValue.split(' ')
                    this.firstName = names[0]
                    this.lastName = names[names.length - 1]
                }
            }
        },
        // Allows you to watch certain properties for changes, a modify state accordingly
        // It's usually better to use a computed property as it does this for you with less complexity
        watch: {
            firstName: function(val) {
                this.fullName = val + " " + this.lastName
            },
            lastName: function(val) {
                this.fullName = this.firstName + " " + val
            }
        }
    })
}
