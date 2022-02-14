let loader = document.getElementById("loader");
if(loader){
    loader.addEventListener("click", ()=>{
        let spinner = document.getElementById("spinner");
        if(spinner){
            spinner.style.display="block";
            loader.style.display="none";
        }
    })
}