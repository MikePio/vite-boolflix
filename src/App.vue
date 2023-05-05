<script>
import axios from "axios"
import { store } from "./data/store"
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components:{
    Header,
    Main,
    Footer
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(){
      console.log('getAPI test');
      axios.get(store.apiUrl)
      .then(result => {
        // console.log(result.data);
        // store.popularFilmsArray.push(result.data);

        // * in questo modo ottengo dall'array results l'oggetto con indice 5 che contiene i dati del 6° film di results
        // store.popularFilmsArray.push(result.data.results[5]);
        // store.popularFilmsArray.push(result.data.results);

        //! trova il nome e l'immagine di un solo film
        // store.popularFilmsArray.push(result.data);
        // console.log(store.popularFilmsArray);
        // store.popularFilmsArray.forEach(element => {
        //   // store.titlePopularFilms.push(element.results);
        //   // * trova il nome del film con indice 0
        // store.titlePopularFilms.push(element.results[0].name);
        //   // * trova l'immagine del film con indice 0
        //   store.titlePopularFilms.push(element.results[0].backdrop_path);
        // });

        // //* trova tutti i nomi e tutte le immagini
        // const results = result.data.results;

        // for (let i = 0; i < results.length; i++) {
        //   // console.log(result.data.results[i].name);
        //   console.log(results[i].backdrop_path);
        //   store.titlePopularFilms.push(results[i].backdrop_path)
        // }

        //* prendo tutti gli elementi di tutti i film
        store.popularFilmsArray = result.data.results;
        console.log(store.popularFilmsArray);

      })
      .catch(error => {
        console.log(error);
      })

    }
  },
  mounted(){
    this.getApi();
  }

}
</script>

<template>
  <Header/>
  <Main/>
  <Footer/>
</template>

<style lang='scss'>
@use './scss/main.scss' as *;

body{
  background-color: #0a0a0a;
}

</style>
