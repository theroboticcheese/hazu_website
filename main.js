function FullView(ImgLink){
    document.getElementById("FullImage").src = ImgLink;
    document.getElementById("FullImageView").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function Exit(ImgLink){
    document.getElementById("FullImage").src = "";
    document.getElementById("FullImageView").style.display = "none";
    document.body.style.overflow = "visible";
}