// ПЕРЕКЛЮЧЕНИЕ РАЗМЕРОВ

sizeS.addEventListener("click", S);
sizeM.addEventListener("click", M);
sizeL.addEventListener("click", L);

function S() {
    sizeS.className = "size_style size_S active";
    sizeM.className = "size_style size_M";
    sizeL.className = "size_style size_L";
}

function M() {
    sizeS.className = "size_style size_S";
    sizeM.className = "size_style size_M active";
    sizeL.className = "size_style size_L";
}

function L() {
    sizeS.className = "size_style size_S";
    sizeM.className = "size_style size_M";
    sizeL.className = "size_style size_L active";
}


// ПЕРЕКЛЮЧЕНИЕ ЦВЕТОВ

colorWhite.addEventListener("click", white);
colorYellow.addEventListener("click", yellow);
colorGreen.addEventListener("click", green);

function white() {
    colorWhite.className = "color_one active";
    colorYellow.className = "color_two";
    colorGreen.className = "color_three";
    tshirtOne.className = "photo photo_one";
    tshirtTwo.className = "photo photo_two_invisible";
    tshirtThree.className = "photo photo_three_invisible";
}

function yellow() {
    colorWhite.className = "color_one";
    colorYellow.className = "color_two active";
    colorGreen.className = "color_three";
    tshirtOne.className = "photo photo_one_invisible";
    tshirtTwo.className = "photo photo_two";
    tshirtThree.className = "photo photo_three_invisible";
}

function green() {
    colorWhite.className = "color_one";
    colorYellow.className = "color_two";
    colorGreen.className = "color_three active";
    tshirtOne.className = "photo photo_one_invisible";
    tshirtTwo.className = "photo photo_two_invisible";
    tshirtThree.className = "photo photo_three";
}
