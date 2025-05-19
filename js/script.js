// header 
const scrollFromTop = 200;
window.addEventListener("scroll", ()=>{
    const header = document.getElementById("sticky_header");
    const stickyLogo = document.querySelector(".lugx_logo");
    if(window.scrollY > scrollFromTop){
        if(header){
            header.classList.add("sticky_header_effect");
        }
        if(stickyLogo){
            stickyLogo.classList.add("shrink_lugx_logo");
        }
    }
    else{
        if(header){
            header.classList.remove("sticky_header_effect");
        }
        if(stickyLogo){
            stickyLogo.classList.remove("shrink_lugx_logo")
        }
    }
})