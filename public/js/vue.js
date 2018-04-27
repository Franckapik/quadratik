Vue.component('liste', {
    props : ['title','nom'],
    template: '<p>Ici sera ma liste {{title}} {{nom}}</p>',
    data: function() {
        return {
            password: '',
            visible: false
        }
    }
});

var app = new Vue({
    el: '#app'
})
