const images=[
   "images/download (1).webp" ,
    "images/download (2).webp" ,
    "images/OIP (1).webp" ,
    "images/OIP (2).webp",
    "images/OIP.webp" ,
];
let currentIndex=0;
function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = images[currentIndex];
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
function changeImage(step){
    currentIndex+=step;
    if(currentIndex<0){
        currentIndex=images.length-1;
    }
    if(currentIndex>=images.length){
        currentIndex=0;
    }
    document.getElementById("lightbox-img").src=images[currentIndex];
}
