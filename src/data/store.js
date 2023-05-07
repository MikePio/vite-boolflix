import {reactive} from "vue";

export const store = reactive({
  
  popularFilmsArray: [],

  // apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro',
  // esempio con la mia chiave
  // apiUrl: 'https://api.themoviedb.org/3/movie/550?api_key=62ddb60fd9eb8727b99a8b8bf24bd8b2',
  //tv film popolari
  // apiUrl: 'https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1',
  //tv film popolari con la mia chiave
  // apiUrl: 'https://api.themoviedb.org/3/tv/popular?api_key=62ddb60fd9eb8727b99a8b8bf24bd8b2&language=en-US&page=1',
  //film
  // apiUrl: 'https://api.themoviedb.org/3/search/movie',
  // searchMovie: '/search/movie',
  // apiUrl: 'https://api.themoviedb.org/3',
  
  //* apiUrlStart tv film popolari con la mia chiave test
  // apiUrlStart: 'https://api.themoviedb.org/3/tv/popular?api_key=62ddb60fd9eb8727b99a8b8bf24bd8b2&language=en-US&page=1',
  //* apiUrlStart movie popolari con la mia chiave test
  apiUrlStart: 'https://api.themoviedb.org/3/movie/popular?api_key=62ddb60fd9eb8727b99a8b8bf24bd8b2&language=en-US&page=1',
  //* ricerca del film thor
  // apiUrlStart: 'https://api.themoviedb.org/3/search/movie?api_key=62ddb60fd9eb8727b99a8b8bf24bd8b2&language=en-US&query=thor&page=1&include_adult=false',
  //* ricerca del film thor senza le optionals
  // apiUrlStart: 'https://api.themoviedb.org/3/search/movie?api_key=62ddb60fd9eb8727b99a8b8bf24bd8b2&query=thor&page=1',

  // apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=62ddb60fd9eb8727b99a8b8bf24bd8b2&language=en-US&query=thor&page=1&include_adult=false',
  //* ricerca di un qualsiasi film
  apiUrl: 'https://api.themoviedb.org/3/search/movie',
  // apiUrl: 'https://api.themoviedb.org/3/search/movie?&query=iron&page=1',
  apiKey: '62ddb60fd9eb8727b99a8b8bf24bd8b2',
  languageShows: 'en-US',
  // languageShows: 'it',
  titleShows:'',
  pageShows:'1',
  
  //! SE NON FUNZIONA CREA UNA STRINGA CON BACKTICK
  //! apiUrl: '`https://api.themoviedb.org/3/search/movie?api_key=${ apiKey }&query=${ titleShows }&page=${ pageShows }`',
  //! apiUrl: '`https://api.themoviedb.org/3/search/movie?api_key=${ apiKey }&language${ languageShows }&query=${ titleShows }&page=${ pageShows }`',
  



})