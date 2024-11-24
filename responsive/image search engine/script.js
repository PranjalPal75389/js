console.log("hello")
const searchBox=document.querySelector(".search-box");
const showMore=document.querySelector("#show-more-btn");
const submitBtn=document.querySelector(".submit-btn")
const searchForm=document.getElementById("search-form");
const searchResult=document.getElementById("search-result");
let keyword="";
let page=1;
const accessKey="mR4bZ2WI2UPvUrYZZm80OlQzq0d2bXHCMK9lsrz_fbc";

async function searchImage() {
   
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response =await fetch(url);
    const data= await response.json();
    if(page===1){
        searchResult.innerHTML='';
    }
    const results=data.results;

    console.log(data);
    results.map((result)=>{
       const image=document.createElement("img");
       image.src=result.urls.small;
       const imageLink=document.createElement("a");
       imageLink.href=result.links.html;
       imageLink.target="_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
      })
      showMore.style.display="block";
}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImage();
  
   
})
showMore.addEventListener("click",()=>{
    page++;
    searchImage();
})
