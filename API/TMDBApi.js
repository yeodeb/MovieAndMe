//import API_TOKEN from '../Helpers/Token' //pour importer api key hidden
const API_TOKEN = "93b00e87d9f6d39954da0404e4ab68a2"

export function getFilmsFromApiWithSearchText(text) {
  const url = 'https://api.themoviedb.org/3/movie/550?api_key=' + API_TOKEN + '&language=fr&query' + text
   return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}
