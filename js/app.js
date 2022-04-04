var dataURL = 'https://pokeapi.co/api/v2/pokemon';

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

let app = new Vue({
  el: '#app',
  data: {
    pokemons: [],
    search: '',
    onlyfav: false
  },
  mounted() { // when the Vue app is booted up, this is run automatically.
    var self = this;
    $.getJSON(dataURL, function(data) {
      self.pokemons = data.results;
      for (i=0;i<self.pokemons.length;i++) {
        self.pokemons[i]['id'] = i;
        self.pokemons[i]['fav'] = 0;
      }
    });
  },
  methods: {
    turnFav(n) {
      if (this.pokemons[n].fav == 0) {
        this.pokemons[n].fav = 1;
      }else{
        this.pokemons[n].fav = 0;
      }
    }
  }
});
