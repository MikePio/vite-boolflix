import {reactive} from "vue";

export const store = reactive({
  // apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro',
  // esempio con la mia chiave
  // apiUrl: 'https://api.themoviedb.org/3/movie/550?api_key=62ddb60fd9eb8727b99a8b8bf24bd8b2',
  //tv film popolari
  // apiUrl: 'https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1',
  //tv film popolari con la mia chiave
  apiUrl: 'https://api.themoviedb.org/3/tv/popular?api_key=62ddb60fd9eb8727b99a8b8bf24bd8b2&language=en-US&page=1',

  popularFilmsArray: [],

})