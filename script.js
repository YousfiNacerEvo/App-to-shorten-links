//Variables
    const inputFild = document.querySelector("input");
    const button = document.querySelector("button");
    const display = document.querySelector(".display");
    const errorMsg = document.querySelector("#error-msg");

//main
    button.addEventListener("click",ShortenLink);

//funcitons

    function ShortenLink(){
        
        if( inputFild.value != ""){
            let inputvalue = inputFild.value;

            if(inputvalue.endsWith(".com",inputvalue.length) || inputvalue.endsWith(".org",inputvalue.length) || inputvalue.endsWith(".net",inputvalue.length) || inputvalue.endsWith(".dz",inputvalue.length) ){
                
                //afficher le shorten linkz

                let url = `https://is.gd/create.php?format=json&url=${encodeURIComponent(inputvalue)}`;

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                       display.firstElementChild.textContent = `${data.shorturl}`;
                       display.firstElementChild.href = `${data.shorturl}`
                       display.style.display = "grid";
                    })
                    .catch(error => console.error('Error:', error));

            }else{
                errorMsg.textContent = "Invalid Domain Name";
                errorMsg.classList.add("err-style");

                setTimeout(function(){
                    errorMsg.classList.remove("err-style");
                },500);
            }
        }
    }   