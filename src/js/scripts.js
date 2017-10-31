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

color_white.addEventListener("click", white);
color_yellow.addEventListener("click", yellow);
color_green.addEventListener("click", green);

function white() {
    color_white.className = "color_one active";
    color_yellow.className = "color_two";
    color_green.className = "color_three";
    tshirtOne.className = "photo photo_one";
    tshirtTwo.className = "photo photo_two_invisible";
    tshirtThree.className = "photo photo_three_invisible";
}

function yellow() {
    color_white.className = "color_one";
    color_yellow.className = "color_two active";
    color_green.className = "color_three";
    tshirtOne.className = "photo photo_one_invisible";
    tshirtTwo.className = "photo photo_two";
    tshirtThree.className = "photo photo_three_invisible";
}

function green() {
    color_white.className = "color_one";
    color_yellow.className = "color_two";
    color_green.className = "color_three active";
    tshirtOne.className = "photo photo_one_invisible";
    tshirtTwo.className = "photo photo_two_invisible";
    tshirtThree.className = "photo photo_three";
}
