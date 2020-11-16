let form_button = document.getElementById('form_button');

let images = ["https://wallpaperaccess.com/full/1947303.png", "https://wallpapercave.com/wp/wp3705491.jpg", "https://fsb.zobj.net/crop.php?r=6umFmug1SFwnSiTnNbzZ3NdTsnhfEV2vTbr7REL-ng9iPaIL1pqqV1wsmPDsQl1qv4mX8BxvZpoO9FSgj3m5oLqnk_ArL34f-QAY20MP5J5CJW7qwMyqy7t0DpbqiDV2DrAw_SIMWO_AZbHu", "https://fsb.zobj.net/crop.php?r=HHhU9cnbFu5OXeLvq1Jv217qn17Jyw26QRiHuqsNyDgvSnaXBehJM73MEPlrkf7J7-yRaPmkdkOQ_5JmKQF-hCR92CSZy1ONzjFgm6gwg9I5t5Kj6y5FnS89rRybWqIGrAo817rj6S6tE88B"];

let imagesRecup = document.querySelectorAll(".img");

let paragraphes = document.querySelectorAll('p');

let audio = new Audio('song.mp3');


if (form_button) {
    form_button.addEventListener('click', () => audio.play());
}

if (imagesRecup) {
    imagesRecup.forEach((img, i) => {
        imagesRecup[i].addEventListener('mouseover', () => img.src = images[i]);
        imagesRecup[i].addEventListener('mouseleave', () => img.src = "spoiler.png");
    });
}

if (paragraphes) {
    paragraphes.forEach((p, i) => {
        paragraphes[i].addEventListener('click', () => p.style.color = randomColor());
    });
}

function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
















