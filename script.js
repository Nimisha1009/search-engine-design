const accesskey = "nmQ8wTUvWGlqFeG4wa2TRFEFHWD3mvdfY3CKeXvbTHs";
const  searchForm = document.getElementById("search-form")
const  searchBox = document.getElementById("search-box")
const  searchResult = document.getElementById("search-result")
const  showMoreBtn = document.getElementById("show-more")
let keyword = "";
let page = 1;
async function searchImages(){

    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`;
   const response = await fetch(url);
   const data = await response.json();
   const results = data.results;
   results.map((result) => {
      const image = document.createElement("img");
      image.src = result.urls.small;
      const imageLink = document.createElement("a");
      imageLink.href = result.links.html; 

   })
}
searchForm.addEventListener("submit",(e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})