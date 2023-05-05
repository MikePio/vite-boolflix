<script>
import {store} from '../data/store';
export default {
  name: 'Main',
  data(){
    return{
      store,
    }
  }

}
</script>

<template>
  <main class="p-3">

    <!-- * container grande card -->
    <div class="container w-75 p-3 my-3 d-flex flex-column align-items-center justify-content-center">
      <!-- * container piccolo card -->
      <div class="container d-flex flex-wrap p-0">

        <!-- * cards -->
        <!-- <div class="mp-card">
          <img class="card-img-top" src="public\img\logo-boolflix.png" alt="img">
          <div class="card-body">
            <h5 class="card-title text-center pt-3">test</h5>
          </div>
        </div> -->

        <!-- cards dinamiche-->
        <div v-for="(card, index) in store.popularFilmsArray" :key="index" class="mp-card">
          <!-- <img class="card-img-top" :src="card.backdrop_path" alt="img"> -->
          <img class="card-img-top" :src="`https://image.tmdb.org/t/p/w500${card.poster_path}`" alt="img">

          <div class="card-body">
            <h5 class="card-title text-center p-3">{{card.name}}</h5>
          </div>
        </div>


      </div>

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
    background-color: white;
  }

  .mp-card{
    width: calc(100% / 4 - 20px);
    height: 400px;
    // border: 1px blue dashed;
    margin: 0 10px 40px 10px;
    img{
      height: 300px;
    }
    .card-body{
      background-color: $primary-color;
      // height: 125px;
      .card-title{
        color: white;
        height: 80px;
      }
    }
  }


}

</style>