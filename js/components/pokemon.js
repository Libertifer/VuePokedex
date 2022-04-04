Vue.component('pokedex', {
  props: ['name','fav','id'],
  template: `
    <div class="pokemon">
      <span class="name" onclick="openInfo(this.innerHTML)">{{ name | capitalize }}&nbsp{{ fav }}</span>
      <input type="checkbox" v-model="fav">
    </div>
  `
});
