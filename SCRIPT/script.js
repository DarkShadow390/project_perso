// Animation Card
let card = document.querySelector(".card");

card.addEventListener("mouseover", function cardHover(){
    document.querySelector(".imgCard").style.display = "none";
    card.style.justifyContent = "center";
});
card.addEventListener("mouseleave", function cardHover(){
    document.querySelector(".imgCard").style.display = "block";
    card.style.justifyContent = "initial";
});