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
  // apiUrlStart: 'https://api.themoviedb.org/3/movie/popular?api_key=62ddb60fd9eb8727b99a8b8bf24bd8b2&language=en-US&page=1',
  //* apiUrlStart serie tv popolari con la mia chiave test
  // apiUrlStart: 'https://api.themoviedb.org/3/tv/popular?api_key=62ddb60fd9eb8727b99a8b8bf24bd8b2&language=en-US&page=1',
  //* apiUrlStart movie e serie tv popolari con la mia chiave test
  apiUrlStart: 'https://api.themoviedb.org/3/trending/all/day?api_key=62ddb60fd9eb8727b99a8b8bf24bd8b2',
  
  //! ESEMPI DA UTILIZZARE PER LA RICERCA E PER DIVIDERE LA SEZIONE FILM DALLA SEZIONE SERIE TV
  //* MOVIE ricerca del film: thor
  // apiUrlStart: 'https://api.themoviedb.org/3/search/movie?api_key=62ddb60fd9eb8727b99a8b8bf24bd8b2&language=en-US&query=thor&page=1&include_adult=false',
  //* TV ricerca della serie tv: signore degli anelli
  // apiUrlStart: 'https://api.themoviedb.org/3/search/tv?api_key=62ddb60fd9eb8727b99a8b8bf24bd8b2&language=en-US&page=1&query=signore%20degli%20anelli',
  //* MULTI ricerca dei film e delle serie tv: gli anelli del potere
  // apiUrlStart: 'https://api.themoviedb.org/3/search/multi?api_key=62ddb60fd9eb8727b99a8b8bf24bd8b2&language=en-US&query=gli%20anelli%20del%20potere&page=1',
  
  //* ricerca del film thor senza le optionals
  // apiUrlStart: 'https://api.themoviedb.org/3/search/movie?api_key=62ddb60fd9eb8727b99a8b8bf24bd8b2&query=thor&page=1',

  // apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=62ddb60fd9eb8727b99a8b8bf24bd8b2&language=en-US&query=thor&page=1&include_adult=false',
  //* ricerca di un qualsiasi film
  // apiUrl: 'https://api.themoviedb.org/3/search/movie',
  //* ricerca di un qualsiasi serie tv
  // apiUrl: 'https://api.themoviedb.org/3/search/tv',
  //* MULTI ricerca di un qualsiasi film e serie tv
  apiUrl: 'https://api.themoviedb.org/3/search/multi',
  // apiUrl: 'https://api.themoviedb.org/3/search/movie?&query=iron&page=1',
  apiKey: '62ddb60fd9eb8727b99a8b8bf24bd8b2',
  // languageShows: '',
  // languageShows: 'null',
  languageShows: 'en-US',
  // languageShows: 'it',
  titleShows:'',
  pageShows:'1',
  typeShows: '',
  
  //! SE NON FUNZIONA CREA UNA STRINGA CON BACKTICK
  //! apiUrl: '`https://api.themoviedb.org/3/search/movie?api_key=${ apiKey }&query=${ titleShows }&page=${ pageShows }`',
  //! apiUrl: '`https://api.themoviedb.org/3/search/movie?api_key=${ apiKey }&language${ languageShows }&query=${ titleShows }&page=${ pageShows }`',
  



})