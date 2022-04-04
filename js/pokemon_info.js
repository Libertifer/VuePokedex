let params = location.search;
params = params.replace("?name=","");
var dataURL = 'https://pokeapi.co/api/v2/pokemon/'+params;

Vue.filter('capitalize', function (value) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
})
Vue.filter('enlist', function (value) {
  if (!value) return '';
  for (let i = 0; i < value.length; i++) {
    value[i] = value[i][0].toUpperCase() + value[i].substr(1);
  }
  value = value.join(", ");
  return value.charAt(0).toUpperCase() + value.slice(1);
})

const app = new Vue({
  el: '#app',
  data: {
    name: [],
    weight: [],
    height: [],
    types: [],
    artwork: []
  },
  mounted() { // when the Vue app is booted up, this is run automatically.
    var self = this;
    $.getJSON(dataURL, function(data) {
      self.name = data.name;
      self.weight = data.weight;
      self.height = data.height;
      for (i=0;i<data.types.length;i++) {
        self.types.push(data.types[i].type.name);
      }
      self.artwork = data.sprites.other["official-artwork"].front_default;
    });
  },
  methods: {
    clipboard: function() {
      nameCap = this.name.charAt(0).toUpperCase() + this.name.slice(1);
      typeName = this.types
      for (let i = 0; i < typeName.length; i++) {
        typeName[i] = typeName[i][0].toUpperCase() + typeName[i].substr(1);
      }
      navigator.clipboard.writeText("Name: "+nameCap+"\nWeight: "+this.weight+"\nHeight: "+this.height+"\nTypes: "+typeName.join(", "));
    }
  }
});
