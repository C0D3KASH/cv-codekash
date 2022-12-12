function toggleDropdown(){
    let navbarToggle = document.getElementById("navbar-toggle");
    if(navbarToggle.className === "topnav"){
        navbarToggle.className += " responsive";
        // change topnav to topnav.responsive
    }else{
        navbarToggle.className = "topnav";
    }

}