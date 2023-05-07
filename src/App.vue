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

    getApiStart(){

      let customParams = {
        params: {
          // api_key: store.apiKey,
          language: store.languageShows, 
          // query: store.titleShows,
          // title: store.titleShows,
          // page: store.pageShows
        }
      }


      console.log('getAPIStart');
      axios.get(store.apiUrlStart, customParams)
      // axios.get(store.apiUrlStart)
      .then(result => {
        store.popularFilmsArray = result.data.results;
        console.log('store.popularFilmsArray', store.popularFilmsArray);
      })
      .catch(error => {
        console.log(error);
      })
    },

    getApiSearch(){
      let customParams = {
        params: {
          api_key: store.apiKey,
          language: store.languageShows, 
          query: store.titleShows,
          // title: store.titleShows,
          page: store.pageShows

        }
      }
      // axios.get(store.apiUrl, store.apiKey, customParams)
      axios.get(store.apiUrl, customParams)
      .then(result => {
        store.popularFilmsArray = result.data.results;
        console.log('store.popularFilmsArray', store.popularFilmsArray);

      })
      .catch(error => {
        console.log(error);
      })
    },

    getApi(){
      console.log('getAPI search');
      let customParams = {
        params: {
          title: store.titleShows,
          original_title: store.originalTitleShows,
          original_language: store.languageShows, 
          vote_average: store.voteShows

        }
      }
      axios.get(store.apiUrl, store.apiKey, customParams)
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
        console.log('store.popularFilmsArray', store.popularFilmsArray);

        // if(store.titleShows.includes(title)){
        //   console.log('1');
        // }else if(title.includes(store.titleShows)){
        //   console.log('2');
        // }else{
        //   console.log('error');
        // }



        console.log(store.apiUrl, store.apiKey, customParams);

      })
      .catch(error => {
        console.log(error);
      })

    },

    //controllo se l'input è vuoto oppure se c'è scritto qualcosa all'interno
    checkInput(){
      const searchBar = document.querySelector('.search-bar');
        console.log(searchBar);
        if(searchBar.value == null || searchBar.value == "" || searchBar.value == "null" ){
        this.getApiStart();
        console.log('getApiStart');
        console.log(searchBar.value);
      }else{
        this.getApiSearch();
        console.log('getApiSearch');
        console.log(searchBar.value);
      }

    }




  },
  mounted(){
    this.getApiStart();
  }

}
</script>

<template>
  <Header @searchShows="getApiSearch" @changeLanguage="checkInput" />
  <Main/>
  <Footer/>
</template>

<style lang='scss'>
@use './scss/main.scss' as *;

body{
  background-color: #0a0a0a;
}

</style>
