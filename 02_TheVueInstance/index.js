window.onload = function() {
    // Root Vue instance for our application, needed to initialise Vue
    // Whenever created, an options object is passed in
    // All Vue components are also Vue instances, so accept the same options object
    var vm = new Vue({
        // All properties in the data object when created are added to Vue's reactivity system
        // That is, when they change, so does the UI, and vica versa (two way data binding)
        // Note: any properties added to data after the instance has been created won't be tracked
        data: {
            message: "Hello"
        },
        // There are lifecycle hooks that can have event handlers attached
        created: function() {
            console.log("Message is set to: " + this.message);
        }
    })
};