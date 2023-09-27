
let index = 0;

window.addEventListener("load", (event) => {
    showImage(index);
});

function showImage(value) {
    const images = document.getElementsByClassName("image");
    const dots = document.getElementsByClassName("dot");
    //update css
    images[index].style.display = "none";
    dots[index].classList.remove("active");

    //update index
    index += value;
    let numberOfImages = images.length;
    if (index == -1)
        index = numberOfImages - 1;
    index %= numberOfImages;
    //update css
    images[index].style.display = "block";
    dots[index].classList.add("active");

}