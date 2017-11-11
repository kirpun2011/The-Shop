// ПЕРЕКЛЮЧЕНИЕ РАЗМЕРОВ

function changeSize(size) {
    if (size === 's') {
        sizeS.className = 'size_style size_S active';
        sizeM.className = 'size_style size_M';
        sizeL.className = 'size_style size_L';
    } else if (size === 'm') {
        sizeS.className = 'size_style size_S';
        sizeM.className = 'size_style size_M active';
        sizeL.className = 'size_style size_L';
    } else if (size === 'l') {
        sizeS.className = 'size_style size_S';
        sizeM.className = 'size_style size_M';
        sizeL.className = 'size_style size_L active';
    }
}

document.getElementById('sizeList').addEventListener('click', ev => {
    const size = ev.target.dataset['size'];
    changeSize(size);
})

// ПЕРЕКЛЮЧЕНИЕ ЦВЕТОВ

function changePicture(color) {
    document.getElementById('productPicture').src = 'img/tshirts/tshirt_' + color + '.jpg';

    if (color === 'white') {
        colorWhite.className = 'color_one active';
        colorYellow.className = 'color_two';
        colorGreen.className = 'color_three';
    } else if (color === 'yellow') {
        colorWhite.className = 'color_one';
        colorYellow.className = 'color_two active';
        colorGreen.className = 'color_three';
    } else if (color === 'green') {
        colorWhite.className = 'color_one';
        colorYellow.className = 'color_two';
        colorGreen.className = 'color_three active';
    }
}

document.getElementById('colorList').addEventListener('click', ev => {
    const color = ev.target.dataset['color'];
    changePicture(color);
})
