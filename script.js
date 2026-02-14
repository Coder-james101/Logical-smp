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
