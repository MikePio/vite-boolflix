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
      //* crea delle condizioni if che controllano se la select di type ha un valore uguale a tv allora store.apiUrlStart="https://api.themoviedb.org/3/tv/popular"
      //* else if invece se la select di type ha un valore uguale a movie allora store.apiUrlStart="https://api.themoviedb.org/3/movie/popular"
      //* else allora store.apiUrlStart="https://api.themoviedb.org/3/trending/all/day"
      //! OPPURE else if invece se la select di type ha un valore uguale a null allora store.apiUrlStart="https://api.themoviedb.org/3/trending/all/day"
      const selectTypes = document.querySelector('.select-types');
      if (selectTypes.value == 'tv') {
        store.apiUrlStart = 'https://api.themoviedb.org/3/tv/popular';
        console.log('tv', selectTypes.value);
      } else if (selectTypes.value == 'movie') {
        store.apiUrlStart = 'https://api.themoviedb.org/3/movie/popular';
        console.log('movie', selectTypes.value);
      } else if (selectTypes.value == null || selectTypes.value == "" || selectTypes.value == "null") {
        store.apiUrlStart = 'https://api.themoviedb.org/3/trending/all/day';
        console.log('null', selectTypes.value);
      }
      
      // numero che rappresenta la pagina corrente
      console.log('store.pageShows', store.pageShows);

      let customParams = {
        params: {
          api_key: store.apiKey,
          language: store.languageShows, 
          // query: store.titleShows,
          // title: store.titleShows,
          page: store.pageShows
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
      // //!  è = a getApiSection //////////////////////////////////////////////////////////////////////////////////
      // // todo SCRITTO 2 VOLTE QUINDI SOSTITUISCILO CON UNA FUNZIONE //////////////////////////////////////////////////////////////////////////////////
      // const selectTypes = document.querySelector('.select-types');
      // if (selectTypes.value == 'tv') {
      //   store.apiUrl = 'https://api.themoviedb.org/3/search/tv';
      //   console.log('tv', selectTypes.value);
      // } else if (selectTypes.value == 'movie') {
      //   store.apiUrl = 'https://api.themoviedb.org/3/search/movie';
      //   console.log('movie', selectTypes.value);
      // } else if (selectTypes.value == null || selectTypes.value == "" || selectTypes.value == "null") {
      //   store.apiUrl = 'https://api.themoviedb.org/3/search/multi';
      //   console.log('null', selectTypes.value);
      // }
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
        //!  è = a getApiSection //////////////////////////////////////////////////////////////////////////////////
        // todo SCRITTO 2 VOLTE QUINDI SOSTITUISCILO CON UNA FUNZIONE //////////////////////////////////////////////////////////////////////////////////
        const selectTypes = document.querySelector('.select-types');
        // const selectTypes = document.getElementById('select-types-id');
        if (selectTypes.value == 'tv') {
          store.apiUrl = 'https://api.themoviedb.org/3/search/tv';
          console.log('selectTypes = tv', selectTypes.value);
        } else if (selectTypes.value == 'movie') {
          store.apiUrl = 'https://api.themoviedb.org/3/search/movie';
          console.log('selectTypes = movie', selectTypes.value);
        } else if (selectTypes.value == null || selectTypes.value == "" || selectTypes.value == "null") {
          store.apiUrl = 'https://api.themoviedb.org/3/search/multi';
          console.log('selectTypes = null', selectTypes.value);
        }
        this.getApiSearch();
        console.log('getApiSearch');
        console.log(searchBar.value);
      }

    },

    //!Quando si clicca sulla option della select film
    //*CREA una chiamata API SOLO PER FILM che fa diventare display none la sezione/il componente delle SERIE TV 

    //!Quando si clicca sulla option della select serie tv
    //*CREA una chiamata API SOLO PER SERIE TV  che fa diventare display none la sezione/il componente dei FILM 

    //!Quando si clicca sulla option della select ALL e COME DEFAULT
    //*CREA UN METODO CON IF CHE SERVE PER DIVIDERE LA SEZIONE FILM DALLA SEZIONE SERIE TV 
    //* IN MODO DA FARE UNA SOLA CHIAMATA IN CUI I FILM SONO COLORO CHE HANNO COME "media_type": "movie",
    //* IN MODO DA FARE UNA SOLA CHIAMATA IN CUI LE SERIE TV SONO COLORO CHE HANNO COME media_type": "tv",
    checkInputType(){
      // TODO DA SOSTITUIRE CON LA FUNZIONE PRECEDENTE INSERENDO DEI PARAMETRI /////////////////////////////////////////////////////////////////////////////////////////////
      const searchBar = document.querySelector('.search-bar');
        console.log(searchBar);
        if(searchBar.value == null || searchBar.value == "" || searchBar.value == "null" ){
        this.getApiStart();
        console.log('getApiStart');
        console.log(searchBar.value);
      }else{
        this.getApiSection();
        console.log('getApiSection');
        console.log(searchBar.value);
      }
      
    },

    getApiSection(){
      //!  è = a getApiSearch //////////////////////////////////////////////////////////////////////////////////
      // todo SCRITTO 2 VOLTE QUINDI SOSTITUISCILO CON UNA FUNZIONE //////////////////////////////////////////////////////////////////////////////////
      const selectTypes = document.querySelector('.select-types');
      if (selectTypes.value == 'tv') {
        store.apiUrl = 'https://api.themoviedb.org/3/search/tv';
        console.log('tv', selectTypes.value);
      } else if (selectTypes.value == 'movie') {
        store.apiUrl = 'https://api.themoviedb.org/3/search/movie';
        console.log('movie', selectTypes.value);
      } else if (selectTypes.value == null || selectTypes.value == "" || selectTypes.value == "null") {
        store.apiUrl = 'https://api.themoviedb.org/3/search/multi';
        console.log('null', selectTypes.value);
      }
      let customParams = {
        params: {
          api_key: store.apiKey,
          language: store.languageShows, 
          query: store.titleShows,
          page: store.pageShows,

        }
      }
      axios.get(store.apiUrl, customParams)
      .then(result => {
        store.popularFilmsArray = result.data.results;
        console.log('getApiSection store.popularFilmsArray', store.popularFilmsArray);
        console.log('getApiSection store.apiUrl', store.apiUrl);

      })
      .catch(error => {
        console.log(error);
      })
    },





  },
  mounted(){
    this.getApiStart();
  }

}
</script>

<template>
  <Header @searchShows="getApiSearch" @changeLanguage="checkInput" @changeType="checkInputType" />
  <Main/>
  <Footer @changePage="getApiStart"/>
</template>

<style lang='scss'>
@use './scss/main.scss' as *;

body{
  background-color: #0a0a0a;
}

</style>
