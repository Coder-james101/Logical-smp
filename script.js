const spawnImg = document.getElementById("spawn_img");
const spawnContainer = document.getElementById("spawn_img_container");

const zoomedContainer = document.getElementById("zoomed_container");
const zoomedImg = document.getElementById("zoomed_img");

// show modal
spawnImg.addEventListener("click", () => {
    spawnContainer.style.display = "none";  // hide original
    zoomedContainer.style.display = "flex"; // show overlay
    zoomedImg.style.display = "block";
});

// hide modal when clicking overlay (but not image)
zoomedContainer.addEventListener("click", (e) => {
    if (e.target === zoomedContainer || e.target === zoomedImg) {     // only if clicked background
        spawnContainer.style.display = "block";
        zoomedContainer.style.display = "none";
        zoomedImg.style.display = "none";
    }
});


const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

const lineX1 = document.getElementById("lineX1");
const lineX2 = document.getElementById("lineX2");


function turnHamburgerToX() {
    line1.style.animation = "line1X 0.4s forwards";
    line2.style.animation = "line2X 0.4s forwards";
    line3.style.animation = "line3X 0.4s forwards";
}


function turnHamburgerToHam() {
    line1.style.animation = "line1X 0.4s backwards";
    line2.style.animation = "line2X 0.4s backwards";
    line3.style.animation = "line3X 0.4s backwards";
}



const menu = document.getElementById("menu");

let menu_pressed = false;
// Example: trigger on click
document.getElementById("menu_open_container").addEventListener("click", ()=>{
    if(!menu_pressed){
        turnHamburgerToX()
        menu.style.right = "0"
        menu_pressed = true;
    }

    else{
        turnHamburgerToHam()
        menu_pressed = false;
        menu.style.right = "1000vw"
    }
 
    

});


const team_container = document.getElementById("team_container");
const hidden_team = document.getElementById("hidden_team");

let team_pressed = false;

team_container.addEventListener("click", ()=>{
    if(!team_pressed){
        hidden_team.style.display = "block";
        team_pressed = true;
    }

    else{
        hidden_team.style.display = "none";
        team_pressed = false;

    }
 
    

});
