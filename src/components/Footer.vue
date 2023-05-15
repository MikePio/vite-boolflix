<script>
import {store} from '../data/store'
export default {
  name: 'Footer',
  data(){
    return{
      store,
    }
  },
  methods:{
    //* FUNZIONE PER INCREMENTARE DI 1 LA PAGINA AL CLICK DEL BUTTON NEL FOOTER
    nextPage(){
      store.pageShows++;
      this.$emit('changePage')
      console.log(store.pageShows);
    },
    //* FUNZIONE PER DECREMENTARE DI 1 LA PAGINA AL CLICK DEL BUTTON NEL FOOTER
    prevPage(){
      if(store.pageShows > 1){
        store.pageShows--;
        this.$emit('changePage')
        console.log(store.pageShows);
      }
    }
  }

}
</script>

<template>
  <footer>

    <div class="container-buttons container w-75 p-3 my-3 d-flex justify-content-between flex-wrap">
      <button class="btn-prev" @click="prevPage" >Previous page</button>
      <button class="btn-next" @click="nextPage" >Next page</button>
    </div>

  </footer>
</template>

<style lang="scss" scoped>
@use '../scss/main.scss' as *;


footer{
  background-color: #0a0a0a;

  button{
    text-transform: uppercase;
    border: none;
    // padding: 23px 57px;
    width: 227px;
    height: 64px;
    background-color:  #141414;
    color: $secondary-color;
    text-shadow: 0 0 10px transparent;
    border-radius: 5px;
    &:hover{
      // color: $secondary-color;
      background-color: $secondary-color;
      color: #fff;
    }
  }
  
}


</style>