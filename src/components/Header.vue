<script>
import {store} from '../data/store'
export default {
  name: 'Header',
  data(){
    return{
      store
    }
  },
  methods:{

  }

}
</script>

<template>
  <header class="w-100 d-flex justify-content-between align-items-center p-2">
      <img src="public\img\logo-boolflix.png" alt="logo">
      <div class="container d-flex align-items-center justify-content-end">
        <!-- input di ricerca in base al titolo -->
        <div class="input-group input-group-sm mx-3">
          <input @keyup.enter="$emit('searchShows')" v-model="store.titleShows" type="text" class="w-25 form-control search-bar" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Cerca un film">
        </div>

        <!-- select di ricerca in base a film e serie tv -->
        <!-- <select @change="$emit('changeType')" v-model="store.apiUrl" id="select-types-id" class="select-types form-select form-select-sm mx-1" aria-label=".form-select-sm example"> -->
        <!--//! NON UTILIZZARE IL v-model perchè in questo modo il VALORE delle options NON VIENE SALVATO -->
        <select @change="$emit('changeType')" id="select-types-id" class="select-types form-select form-select-sm mx-1" aria-label=".form-select-sm example">
          <option value="" selected>All</option>
          <!-- <option value="null" selected>All</option> -->
          <!-- <option value="null">All</option> -->
          <!-- <option value="movie" selected>Film</option> -->
          <!-- <option value="tv" selected>Serie TV</option> -->
          <option value="movie">Film</option>
          <option value="tv">Serie TV</option>
        </select>

<!-- todo: CREA UNA SELECT CHE CONTIENE DELLE BANDIERE IN MODO DA POTER CAMBIARE LA LINGUA -->

<!-- creata una funzione che al change della select con 2 condizioni if (value == "") se la input bar è vuota changeLanguage cioè getApiSTart e else searchShows cioè getApiSearch -->
        <!-- select di ricerca in base a film e serie tv -->
        <select @change="$emit('changeLanguage')" v-model="store.languageShows" class="select-languages form-select form-select-sm mx-3" aria-label=".form-select-sm example">
          <!--//*  il value della prima option deve essere uguale a quello di default  -->
          <option value="en-US" selected>English <span>&#x1F1FA;&#x1F1F8; 🇬🇧 </span></option>
          <option value="it" >Italiano 🇮🇹 </option>
          <option value="de" >Deutsch 🇩🇪 </option>
          <option value="es" >Español 🇪🇸 </option>
          <option value="fr" >Français 🇫🇷 </option>
        </select>





      </div>


  </header>
</template>

<style lang="scss" scoped>
@use '../scss/main.scss' as *;

header{
  background-color:  #141414;



  height: 100px;
    
    // height: 100px;
  img{
    
    height: 80px;
    
  }

  .input-group{
    width: 180px;
    // height: 40px;
  }

  input{

  }

  .form-select-sm{
    // width: 200px;
    width: 100px;

  }

  // .select {
  //   width: 150px;
  //   border-radius: 5px;
  // }

}

</style>