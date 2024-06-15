//data
const input = document.querySelector("input");
const button = document.querySelector("#ShortenBtn");
const displaySection = document.querySelector(".display-section");
const emptyInputErr = document.querySelector(".err");
//main
button.addEventListener("click",shortenLink);
input.addEventListener("keyup",removeErr);

//funciton 
function shortenLink(){
    
    let url = `https://is.gd/create.php?format=json&url=${encodeURIComponent(input.value)}`;
    if(input.value !=""){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let linkShortek = data.shorturl;
        console.log(linkShortek);
        displayShortedLink(input.value,linkShortek)
    })
    .catch(error =>{
        emptyInputErr.classList.add("show-error");
        emptyInputErr.classList.add("bouge");
        emptyInputErr.textContent = "URL incorrect"
        input.style.border = "1px solid rgb(208, 65, 65)"
        setTimeout(()=>{
            emptyInputErr.classList.remove("bouge");
        },300);

    });
    }else{
        emptyInputErr.classList.add("show-error");
        emptyInputErr.classList.add("bouge");
        emptyInputErr.textContent = "veuillez remplire le champe de saisie"
        input.style.border = "1px solid rgb(208, 65, 65)"
        setTimeout(()=>{
            emptyInputErr.classList.remove("bouge");
        },300);
        
    }
    input.value = "";

}
function removeErr(){
    if(input.value.length > 0){
        emptyInputErr.classList.remove("show-error");
        input.style.border = "none"
    }
}


function displayShortedLink(originalurl,shortulr){
    let Element = document.createElement("div");
    Element.classList.add("Element-style");

    let divLink = document.createElement("div");
    divLink.classList.add("div-link");
    
    let originallink = document.createElement("p");
    originallink.textContent = originalurl;
    divLink.append(originallink);

    let shortlink = document.createElement("a");
    shortlink.href = shortulr;
    shortlink.textContent = shortulr;
    divLink.append(shortlink);

    Element.appendChild(divLink);

    let btn = document.createElement("button");
    btn.classList.add("btn-style");
    btn.textContent = "Copier"
    Element.appendChild(btn);

    displaySection.append(Element);

}