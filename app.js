const BaseURL = 'https://gateway.marvel.com:443/v1/public/';
const APIKeyPrivate = "db624a72a76d181be4d200bafcb422237a07e3e9";
const APIKeyPublic = "6658de89c9628f0521d5a33849d853e5";
const Hash = 'a16a610939e0e0e92d81ac5aa803813b';
const URL = BaseURL + "characters?ts=1&apikey=" + APIKeyPublic + "&hash=" + Hash;

const container = document.querySelector(".row");
let contentHTML = '';

const api_async_await = async () => {
    const response = await fetch(URL);
    const json = await response.json(); 
  //console.log(json);
   
    let orderedHeroes = json.data.results.sort((a, b) => new Date(a.modified) - new Date(b.modified));
    
    for (const hero of orderedHeroes) {
      let urlHero = hero.urls[0].url;

      contentHTML += `
        <div class="col-md-4">
          <a href="${urlHero}" target="_blank">
            <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
          </a>
          <p class="title">${hero.name}</p>
          <span class="title">${hero.modified}</span>
        </div>
      `;

      container.innerHTML = contentHTML;
    }
}
 api_async_await();