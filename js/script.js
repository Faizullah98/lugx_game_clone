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

// Tabs Filter 

var tabButtons = document.querySelectorAll(".tablinks");

    for (var i = 0; i < tabButtons.length; i++) {
      tabButtons[i].addEventListener("click", function () {
        var tabName = this.dataset.tab;
        var tabContent = document.getElementById(tabName);
        var allTabContent = document.querySelectorAll(".tabcontent");
        var allTabButtons = document.querySelectorAll(".tablinks");

        for (var j = 0; j < allTabContent.length; j++) {
          allTabContent[j].style.display = "none";
        }

        for (var k = 0; k < allTabButtons.length; k++) {
          allTabButtons[k].classList.remove("active");
        }

        tabContent.style.display = "grid";
        this.classList.add("active");
      });
    }

    document.querySelector(".tablinks").click();
