<script>
import {store} from '../data/store'
export default {
  name: 'Header',
  data(){
    return{
      store
    }
  }

}
</script>

<template>
  <header class="w-100 d-flex justify-content-between align-items-center p-2">
      <img src="public\img\logo-boolflix.png" alt="logo">
      <div class="container d-flex align-items-center justify-content-end">
        <!-- input di ricerca in base al titolo -->
        <div class="input-group input-group-sm mx-3">
          <input @keyup.enter="$emit('searchShows')" v-model="store.titleShows" type="text" class="w-25 form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Cerca un film">
        </div>
        <!-- select di ricerca in base a film e serie tv -->
        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
          <option value="null" selected>All</option>
          <option>Film</option>
          <option>Serie TV</option>
        </select>

<!-- CREA UNA SELECT CHE CONTIENE DELLE BANDIERE IN MODO DA POTER CAMBIARE LA LINGUA -->
        <!-- select di ricerca in base a film e serie tv -->
        <!-- <select v-model="languageShows" class="form-select form-select-sm" aria-label=".form-select-sm example">
          <option  value="en-US" selected>English</option>
          <option value="it" >Ita</option>
        </select> -->


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