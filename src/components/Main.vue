<script>
import {store} from '../data/store';
export default {
  name: 'Main',
  data(){
    return{
      store,
      flagsArray: [ 'de', 'en', 'es', 'fr', 'it' ],
    }
  },
  methods:{

  },
  mounted(){
  }

}
</script>

<template>
  <main class="p-3">

    <!-- * container grande card -->
    <div class="container w-75 p-3 my-3 d-flex flex-column align-items-center justify-content-center">
      <!-- * container piccolo card -->
      <!-- prima delle sections -->
      <!-- <div class="container d-flex flex-wrap p-0"> -->


        <!-- * cards -->
        <!-- <div class="mp-card">
          <img class="card-img-top" src="public\img\logo-boolflix.png" alt="img">
          <div class="card-body">
            <h5 class="card-title text-center pt-3">test</h5>
          </div>
        </div> -->

        <!-- cards dinamiche-->
        <!-- <div v-for="(card, index) in store.popularFilmsArray" :key="index" class="mp-card">
          <img class="card-img-top" :src="`https://image.tmdb.org/t/p/w500${card.poster_path}`" alt="img">
          <div class="card-body">
            <h5 class="card-title text-center p-3">{{card.name}}</h5>
          </div>
        </div> -->

        <!-- // TODO decommenta dopo aver consegnato le milestone e dopo aver creato la funzione che permette di viualizzare i film nella propria section e la stessa cosa pre le serie tv-->
        <!-- <h1 class="align-self-start py-3 px-2">Film</h1> -->
        <section class="container d-flex flex-wrap p-0">
          <!-- cards dinamiche-->
          <div v-for="(card, index) in store.popularFilmsArray" :key="index" class="mp-card">
            <div>
            <img v-if="card.poster_path || card.backdrop_path != null" class="card-img-top" :src="`https://image.tmdb.org/t/p/w500${card.poster_path || card.backdrop_path}`" alt="img">
            <img v-else class="card-img-top" src="public\img\logo-boolflix.png" alt="img">
            </div>

            <div class="card-body d-flex flex-column align-items-center justify-content-center">
              <!-- Titolo -->
              <h5 class="card-title d-flex align-items-center justify-content-center text-center p-3">{{card.title || card.name}}</h5>
              <!-- Titolo Originale -->
              <h5 class="card-description d-flex align-items-center justify-content-center text-center p-3">{{card.original_name || card.original_title}}</h5>
              <!-- Lingua -->
              <img v-if="this.flagsArray.includes(card.original_language)" class="card-description d-flex align-items-center justify-content-center text-center p-3" :src="`public/img/${card.original_language}.png`" alt="lang img">
              <h5 v-else class="card-description d-flex align-items-center justify-content-center text-center p-3">{{card.original_language}}</h5>
              <!-- Voto -->
              <h5 class="card-description d-flex align-items-center justify-content-center text-center p-3">{{card.vote_average}}</h5>
            </div>
          </div>
        </section>

        <!-- <h1 class="align-self-start py-3 px-2">TV Series</h1>
        <section class="container d-flex flex-wrap p-0"> -->
          <!-- cards dinamiche-->
          <!-- <div v-for="(card, index) in store.popularFilmsArray" :key="index" class="mp-card">
            <div>
            <img v-if="card.poster_path || card.backdrop_path != null" class="card-img-top" :src="`https://image.tmdb.org/t/p/w500${card.poster_path || card.backdrop_path}`" alt="img">
            <img v-else class="card-img-top" src="public\img\logo-boolflix.png" alt="img">
            </div>

            <div class="card-body">
              <h5 class="card-title d-flex align-items-center justify-content-center text-center p-3">{{card.title || card.name}}</h5>
            </div>
          </div>
        </section> -->


      <!-- prima delle sections -->
      <!-- </div> -->

    </div>




  </main>
</template>

<style lang="scss" scoped>
@use '../scss/main.scss' as *;


main{
  background-color:  #0a0a0a;
  // background-color:  rgb(20, 20, 20);
  color: white;
  
  .container {
    // background-color: white;
  }

  .mp-card{
    width: calc(100% / 4 - 20px);
    // border: 1px blue dashed;
    margin: 0 10px 40px 10px;
    //*prima di consegnare la milestone
    //todo decommenta dopo la consegna
    // height: 400px;
    //*dopo di consegnare la milestone
    min-height: 400px;

    img{
      height: 300px;
    }
    .card-body{
      background-color: $primary-color;
      // height: 125px;
      .card-title{
        color: white;
        height: 125px;
      }
      .card-description{
        color: white;
        font-size: small;
      }
      img{
        height: 60px;
      }
      div{

        img{
          height: 60px;
        }

      } 
    }
  }


}

</style>