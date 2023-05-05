<script>
export default {
  name: 'Header',
  data(){
    return{

    }
  }

}
</script>

<template>
  <header class="w-100 d-flex justify-content-between align-items-center p-2">
      <img src="public\img\logo-boolflix.png" alt="logo">
      <div class="container d-flex align-items-center justify-content-end">
        <div class="input-group input-group-sm mx-3">
          <input type="text" class="w-25 form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Cerca un film">
        </div>
        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
          <option value="null" selected>All</option>
          <option>Film</option>
          <option>Serie TV</option>
        </select>
      </div>


  </header>
</template>

<style lang="scss" scoped>
@use '../scss/main.scss' as *;

header{
  background-color: $primary-color;

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