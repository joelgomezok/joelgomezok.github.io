//const md5 = require ('md5');                                                    //instalarlo 
const BaseURL = 'https://gateway.marvel.com:443/v1/public/characters/';
const APIKeyPrivate = "db624a72a76d181be4d200bafcb422237a07e3e9";
const APIKeyPublic = "6658de89c9628f0521d5a33849d853e5";
const Hash = 'a16a610939e0e0e92d81ac5aa803813b';
//const Hash = md5("1" + APIKeyPrivate + APIKeyPublic);
const URL = BaseURL + "1009562?ts=1&apikey=" + APIKeyPublic + "&hash=" + Hash;

let contentHTML = '';

const handleErrors = (error) => {                     //revisar
  console.log("Hubo un error :(", error);
}
const handleData = (data) => {
  if (data.code === "ResourceNotFound") {
    console.log("No lo encontre (pero no tiro error igual xD)");
  } else {
    console.log("Aca va la data: ", data);
  }
}


const api_async_await = async () => {
    const response = await fetch(URL);
    const json = await response.json(); 
  console.log(json);

  let orderedHeroes = json.data.results; //.sort((a, b) => new Date(a.modified) - new Date(b.modified));

}
api_async_await();